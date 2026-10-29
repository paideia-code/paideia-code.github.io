import type { ReactNode } from 'react';
import styles from './styles.module.css';
export type KnowledgeKind = 'concept' | 'model' | 'example' | 'decision' | 'caution' | 'error' | 'check';
const kinds: Record<KnowledgeKind, {
    label: string;
    icon: string;
}> = { concept: { label: 'Concepto', icon: '◈' }, model: { label: 'Modelo y relaciones', icon: '↔' }, example: { label: 'Ejemplo', icon: '⌘' }, decision: { label: 'Decisión', icon: '⇄' }, caution: { label: 'Precaución', icon: '⚠' }, error: { label: 'Error o contraejemplo', icon: '×' }, check: { label: 'Comprobación', icon: '✓' } };
export default function KnowledgeBlock({ kind = 'concept', title, label, children }: {
    kind?: KnowledgeKind;
    title: string;
    label?: string;
    children: ReactNode;
}): ReactNode { const definition = kinds[kind]; return <aside className={`${styles.block} ${styles[kind]}`} aria-label={`${label ?? definition.label}: ${title}`}><div className={styles.header}><span className={styles.label}><span aria-hidden="true">{definition.icon}</span> {label ?? definition.label}</span><strong>{title}</strong></div><div className={styles.body}>{children}</div></aside>; }
