import type { ReactNode } from 'react';
import Checklist from '@site/src/components/Checklist';
type AwsChecklistProps = {
    title?: string;
    items: string[];
};
export default function AwsChecklist({ title = 'Checklist', items }: AwsChecklistProps): ReactNode {
    return <Checklist title={title} items={items.map((text, index) => ({ id: String(index), text }))}/>;
}
