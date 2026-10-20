import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ConceptCardType = 'definicion' | 'principio' | 'patron' | 'advertencia';

type ConceptCardProps = {
  title: string;
  type?: ConceptCardType;
  children: ReactNode;
};

const TYPE_LABELS: Record<ConceptCardType, string> = {
  definicion: 'Definición',
  principio: 'Principio',
  patron: 'Patrón',
  advertencia: 'Advertencia',
};

export default function ConceptCard({
  title,
  type = 'definicion',
  children,
}: ConceptCardProps): ReactNode {
  return (
    <div className={clsx(styles.card, styles[type])}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={styles.badge}>{TYPE_LABELS[type]}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
