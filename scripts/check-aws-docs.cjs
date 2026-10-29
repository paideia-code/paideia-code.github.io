// Validador editorial de datos y enlaces; no crea recursos ni modifica archivos.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const docsRoot = path.join(root, 'docs/theory');
const awsRoot = path.join(docsRoot, 'tecnologias/plataformas/aws');
const cache = new Map();
const errors = [];
const references = new Set();
const report = (message) => errors.push(message);

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}

function readModule(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const module = {exports: {}};
  cache.set(file, module);
  const source = fs.readFileSync(file, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  });
  const localRequire = (name) => {
    const base = name.startsWith('@site/') ? root : path.dirname(file);
    const relative = name.replace(/^@site\//, '');
    const resolved = path.resolve(base, relative);
    return readModule(resolved.endsWith('.ts') ? resolved : resolved + '.ts');
  };
  new Function('require', 'module', 'exports', compiled.outputText)(
    localRequire,
    module,
    module.exports,
  );
  return module.exports;
}

function metadata(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return Object.fromEntries((match?.[1] ?? '').split(/\r?\n/).flatMap((line) => {
    const field = line.match(/^([\w_]+):\s*(.*)$/);
    return field ? [[field[1], field[2].replace(/^["']|["']$/g, '')]] : [];
  }));
}

const pages = walk(awsRoot).filter((file) => file.endsWith('.mdx')).map((file) => {
  const source = fs.readFileSync(file, 'utf8');
  return {file, source, meta: metadata(source)};
});
const visible = pages.filter((page) =>
  page.meta.unlisted !== 'true' && path.basename(page.file) !== 'index.mdx',
);
const route = (page) => '/theory' + page.meta.slug;
const byRoute = new Map(pages.map((page) => [route(page), page]));
const {awsBlocks} = readModule(path.join(root, 'src/data/learning/aws.ts'));
const flatten = (chapters) => chapters.flatMap((chapter) => [
  ...flatten(chapter.children ?? []),
  ...(chapter.lessons ?? []),
]);
const program = flatten(awsBlocks);
const seenIds = new Set();
const bankIds = new Set();
let questionCount = 0;
let bankCount = 0;
const {validateBank} = readModule(path.join(root, 'src/lib/learning/quiz.ts'));

for (const lesson of program) {
  const page = byRoute.get(lesson.href);
  if (!page) report('Lección sin página: ' + lesson.title);
  else if (page.meta.title !== lesson.title) {
    report('Título distinto en programa y página: ' + lesson.title);
  }
}
if (new Set(program.map((lesson) => lesson.href)).size !== program.length) {
  report('El programa repite una URL.');
}

for (const page of visible) {
  const {meta, file, source} = page;
  for (const match of source.matchAll(/https:\/\/[^\s)"'<>]+/g)) {
    references.add(match[0]);
  }
  const label = path.relative(awsRoot, file);
  if (!program.some((lesson) => lesson.href === route(page))) {
    report('Página fuera del programa: ' + label);
  }
  if (!meta.learning_id || !meta.learning_type) report('Metadatos incompletos: ' + label);
  if (seenIds.has(meta.learning_id)) report('learning_id duplicado: ' + meta.learning_id);
  seenIds.add(meta.learning_id);
  if (/<UnderConstruction|<AwsMeta|^# /m.test(source)) {
    report('Formato heredado o estado incompleto: ' + label);
  }
  if (!/https:\/\/docs\.aws\.amazon\.com\//.test(source)) {
    report('Sin fuente oficial en el cuerpo: ' + label);
  }
  for (const item of source.matchAll(/\]\((\/theory[^)#?\s]*)(?:[?#][^)]*)?\)/g)) {
    if (item[1].includes('/aws') && !byRoute.has(item[1])) {
      report('Enlace AWS no resuelto: ' + item[1] + ' en ' + label);
    }
  }
  for (const key of ['pagination_prev', 'pagination_next']) {
    const value = meta[key];
    if (value && value !== 'null') {
      const target = path.join(docsRoot, value + '.mdx');
      if (!fs.existsSync(target)) report('Paginación no resuelta: ' + label + ' → ' + value);
    }
  }
  if (meta.learning_type !== 'lección') continue;
  if (!source.includes('<ContentMeta') || !source.includes('Objetivo de la lección')) {
    report('Falta contexto u objetivo: ' + label);
  }
  const imports = [...source.matchAll(/import\s*\{\s*(\w+)\s*\}\s*from\s*['"]([^'"]*-questions)['"]/g)];
  if (imports.length !== 1) {
    report('Debe haber un banco local por lección: ' + label);
    continue;
  }
  const [, exportName, importPath] = imports[0];
  const bankFile = path.resolve(path.dirname(file), importPath + '.ts');
  if (!bankFile.startsWith(path.dirname(file) + path.sep)) report('Banco fuera de su lección: ' + label);
  const bank = readModule(bankFile)[exportName];
  if (!bank) {
    report('Exportación de banco no encontrada: ' + label);
    continue;
  }
  bankCount += 1;
  questionCount += bank.questions.length;
  if (bankIds.has(bank.id)) report('Identificador de banco repetido: ' + bank.id);
  bankIds.add(bank.id);
  if (bank.title !== meta.title || bank.contentId !== meta.learning_id) {
    report('Banco y metadatos no coinciden: ' + label);
  }
  errors.push(...validateBank(bank).map((error) => label + ': ' + error));
  const prepared = bank.presets.filter((preset) => !preset.id.includes('integrador'));
  const covered = prepared.flatMap((preset) => preset.questionIds);
  if (new Set(covered).size !== covered.length) report('Repetición fuera del repaso: ' + label);
  if (bank.questions.some((question) => !covered.includes(question.id))) {
    report('Preguntas fuera de los bloques preparados: ' + label);
  }
  for (const question of bank.questions) {
    references.add(question.source);
    if (!question.topic.trim()) {
      report('Subtema vacío: ' + question.id);
    }
  }
}

function sidebarOrder(directory) {
  const entries = fs.readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      const children = sidebarOrder(file);
      if (!children.length) return [];
      const categoryFile = path.join(file, '_category_.json');
      const category = fs.existsSync(categoryFile)
        ? JSON.parse(fs.readFileSync(categoryFile, 'utf8')) : {};
      return [{position: category.position ?? 1000, name: entry.name, urls: children}];
    }
    const page = visible.find((item) => item.file === file);
    return page
      ? [{position: Number(page.meta.sidebar_position ?? 1000), name: entry.name, urls: [route(page)]}]
      : [];
  });
  return entries.sort((a, b) => a.position - b.position || a.name.localeCompare(b.name))
    .flatMap((entry) => entry.urls);
}
const sidebar = sidebarOrder(awsRoot);
if (JSON.stringify(sidebar) !== JSON.stringify(program.map((lesson) => lesson.href))) {
  report('Orden distinto entre carpetas/sidebar_position y programa.');
}

const sequence = program.filter((lesson) => byRoute.get(lesson.href)?.meta.learning_type === 'lección');
sequence.forEach((lesson, index) => {
  const page = byRoute.get(lesson.href);
  for (const [field, targetIndex] of [['pagination_prev', index - 1], ['pagination_next', index + 1]]) {
    const target = sequence[targetIndex];
    const expected = target
      ? path.relative(docsRoot, byRoute.get(target.href).file).replace(/\\/g, '/').replace(/\.mdx$/, '')
      : 'null';
    if ((page.meta[field] ?? 'null') !== expected) {
      report('Continuidad distinta al programa: ' + lesson.title + ' / ' + field);
    }
  }
});

if (errors.length) {
  console.error(errors.map((error) => '• ' + error).join('\n'));
  process.exitCode = 1;
} else {
  console.log('AWS: ' + visible.length + ' páginas, ' + bankCount + ' bancos, ' + questionCount + ' preguntas.');
  console.log('Títulos, metadatos, navegación, enlaces y cobertura: correctos.');
}

async function checkReferences() {
  const pending = [...references];
  const failures = [];
  const redirects = [];
  await Promise.all(Array.from({length: 5}, async () => {
    while (pending.length) {
      const url = pending.shift();
      try {
        const response = await fetch(url, {
          method: 'GET',
          redirect: 'follow',
          signal: AbortSignal.timeout(20000),
        });
        if (!response.ok) failures.push(response.status + ' ' + url);
        const from = new URL(url);
        const to = new URL(response.url);
        if (response.redirected && to.pathname.length < from.pathname.length / 2) {
          redirects.push(url + ' → ' + response.url);
        }
        await response.body?.cancel();
      } catch (error) {
        failures.push(url + ': ' + error.message);
      }
    }
  }));
  console.log('Referencias externas revisadas: ' + references.size);
  if (redirects.length) console.log('Redirecciones para revisar:\n' + redirects.join('\n'));
  if (failures.length) {
    console.error(failures.join('\n'));
    process.exitCode = 1;
  } else {
    console.log('Referencias externas: todas respondieron correctamente.');
  }
}

if (process.argv.includes('--links') && !errors.length) {
  checkReferences().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
