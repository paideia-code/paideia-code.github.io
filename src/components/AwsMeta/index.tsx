import type { ReactNode } from 'react';
import ContentMeta from '@site/src/components/ContentMeta';
type AwsMetaProps = {
    certs?: string[];
    level?: 'básico' | 'intermedio' | 'avanzado';
    type?: 'concepto' | 'laboratorio' | 'referencia';
    service?: string;
};
export default function AwsMeta({ certs = [], level, type, service }: AwsMetaProps): ReactNode {
    return <ContentMeta area="AWS" level={level} type={type} topics={service ? [service] : []} extra={certs}/>;
}
