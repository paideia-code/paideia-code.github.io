import type { ReactNode } from 'react';
import type { Level } from '@site/src/lib/learning/types';
import styles from './styles.module.css';

type TagRole = 'area' | 'level' | 'type' | 'topic' | 'responses' | 'extra';

type ContentMetaProps = {
  area?: string;
  level?: Level;
  type?: string;
  topics?: string[];
  extra?: string[];
  responseCount?: number;
};

type Tag = {
  role: TagRole;
  value: string;
  text: string;
};

const roles: Record<TagRole, string> = {
  area: 'Área o tema',
  level: 'Nivel',
  type: 'Tipo de contenido o razonamiento',
  topic: 'Subtema',
  responses: 'Respuestas que debes seleccionar',
  extra: 'Contexto adicional',
};

export default function ContentMeta({
  area,
  level,
  type,
  topics = [],
  extra = [],
  responseCount,
}: ContentMetaProps): ReactNode {
  const tags: Tag[] = [];

  function add(role: TagRole, value: string | undefined, text = value) {
    if (value?.trim() && text) {
      tags.push({ role, value, text });
    }
  }

  add('area', area);
  add('level', level, level ? `Nivel: ${level}` : undefined);
  add('type', type, type ? `Tipo: ${type}` : undefined);
  topics.forEach(topic => add('topic', topic));

  if (typeof responseCount === 'number' && Number.isInteger(responseCount) && responseCount > 0) {
    const text = responseCount === 1 ? 'Una respuesta' : `Selecciona ${responseCount}`;
    add('responses', text);
  }

  extra.forEach(value => add('extra', value));

  const seen = new Set<string>();
  const uniqueTags = tags.filter(tag => {
    if (seen.has(tag.value)) return false;
    seen.add(tag.value);
    return true;
  });

  if (!uniqueTags.length) return null;

  return (
    <div className={styles.tags} aria-label="Etiquetas del contenido">
      {uniqueTags.map(tag => (
        <span
          key={`${tag.role}-${tag.value}`}
          className={[
            styles.tag,
            tag.role === 'area' ? styles.area : '',
            tag.role === 'type' ? styles.type : '',
          ].filter(Boolean).join(' ')}
          data-meta-role={tag.role}
          title={`${roles[tag.role]}: ${tag.value}`}
        >
          {tag.text}
        </span>
      ))}
    </div>
  );
}
