# Paideia Code

Sitio general de **Paideia Code**, construido con Docusaurus v3 y TypeScript.

## Requisitos

- Node.js >= 20
- npm

## Comandos

Ejecuta estos comandos desde la raíz del repositorio:

```bash
npm install        # instalar dependencias
npm run start      # servidor de desarrollo con recarga en vivo
npm run build      # generar el sitio estático en build/
npm run typecheck  # verificación de tipos TypeScript
npm run clear      # limpiar caché y archivos generados de Docusaurus
```

## Estructura y pilares

El orden acordado de los pilares es **Theory → POCs → Templates → Libraries → Projects**. Sus índices y contenidos viven en `docs/`:

```text
paideia-code.github.io/
├── docs/
│   ├── theory/                         # Fuente canónica de Theory
│   │   ├── diseno-arquitectura/        # Diseño y arquitectura
│   │   ├── nube/aws/                   # Guía de AWS
│   │   ├── libros/                     # Libros
│   │   └── tecnologias/                # Tecnologías
│   ├── pocs/                           # Índice de POCs
│   ├── templates/                      # Índice de Templates
│   ├── libraries/                      # Índice de Libraries
│   └── projects/
│       └── paideia-code-site/          # Documentación del propio sitio
├── src/
│   ├── components/                     # Componentes propios del sitio
│   ├── theme/MDXComponents.tsx         # Registro global de componentes MDX
│   └── pages/
│       └── componentes-demo.mdx        # Demo en /componentes-demo
├── static/
└── docusaurus.config.ts
```

## Estado de las secciones

El estado que se indica a continuación corresponde a los índices actuales de cada pilar:

- **Theory**: Nube es la sección desarrollada y actualmente se centra en AWS. Fundamentos, Diseño y arquitectura y Libros describen sus áreas, pero aún no tienen subsecciones con material desarrollado. Tecnologías tiene índice, aunque todavía no incluye documentos de Go u otras tecnologías.
- **POCs**: por ahora la sección contiene únicamente su índice; todavía no hay fichas de POCs.
- **Templates**: por ahora la sección contiene únicamente su índice; aún no hay páginas de templates individuales.
- **Libraries**: todavía no hay páginas de librerías; la sección queda pendiente hasta que existan las primeras.
- **Projects**: actualmente incluye la documentación de Paideia Code Site en `docs/projects/paideia-code-site`.

Los repositorios de código pueden conservarse y evolucionar de forma independiente; sus directorios locales no sustituyen la documentación canónica de este sitio.

## Componentes MDX globales

Los componentes se registran globalmente vía `src/theme/MDXComponents.tsx`, por lo que pueden usarse en cualquier `.mdx` sin imports. El inventario global actual es:

- `<ConceptCard>`: destaca conceptos. Props: `title` (string, requerido), `type` (`definicion` | `principio` | `patron` | `advertencia`, por defecto `definicion`) y children.
- `<Quiz>`: cuestionario interactivo. Recibe `question`, `options` y, opcionalmente, `explanation`.
- `<DrawioIframe>`: embebe un diagrama de draw.io. Recibe `src`, `title` y `height`.
- `<AwsMeta>` y `<AwsChecklist>`: componentes auxiliares para el contenido de AWS.

`src/components` también contiene `HomepageFeatures`, utilizado por la página de inicio; no es un componente global de MDX. La demo de componentes está en la ruta `/componentes-demo`.

## Rutas principales

- `/theory`
- `/pocs`
- `/templates`
- `/libraries`
- `/projects`
- `/projects/paideia-code-site`
- `/componentes-demo`
