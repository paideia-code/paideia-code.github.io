import type { ReactNode } from 'react';
import KnowledgeBlock from '@site/src/components/KnowledgeBlock';
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
export default function ConceptCard({ title, type = 'definicion', children, }: ConceptCardProps): ReactNode {
    const kind = type === 'advertencia' ? 'caution' : type === 'patron' ? 'model' : 'concept';
    return <KnowledgeBlock kind={kind} title={title} label={TYPE_LABELS[type]}>{children}</KnowledgeBlock>;
}
