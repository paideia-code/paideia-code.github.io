import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import ContentMeta from '@site/src/components/ContentMeta';
import type { LearningStage } from '@site/src/lib/learning/types';
import styles from './styles.module.css';
type Card = {
    title: string;
    description: string;
    href?: string;
    tags?: string[];
};
export function ContentCards({ items }: {
    items: Card[];
}): ReactNode { return <div className={styles.cards}>{items.map(item => <article key={item.title} className={styles.card}><h3>{item.href ? <Link to={item.href}>{item.title}<span aria-hidden="true"> ↗</span></Link> : item.title}</h3><p>{item.description}</p>{item.tags && <ContentMeta topics={item.tags}/>}</article>)}</div>; }
export function LearningPath({ stages, overview = false, start = 1 }: {
    stages: LearningStage[];
    overview?: boolean;
    start?: number;
}): ReactNode { return <ol start={start} className={`${styles.path} ${overview ? styles.overview : ''}`}>{stages.map((stage, index) => <li key={stage.id} id={`etapa-${stage.id}`} className={styles.stage}><span className={styles.number} aria-hidden="true">{String(index + start).padStart(2, '0')}</span><div><h3>{stage.title}</h3><p>{stage.description}</p><ContentMeta topics={stage.topics}/>{stage.href ? <Link to={stage.href}>{overview ? 'Explorar esta etapa' : 'Ir a la primera lección disponible'} →</Link> : <span className={styles.planned}>Planificado · se incorporará al desarrollar el tema</span>}</div></li>)}</ol>; }
