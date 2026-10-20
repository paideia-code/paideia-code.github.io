import type {ReactNode} from 'react';
import styles from './styles.module.css';

type AwsMetaProps = {
  certs?: string[];
  level?: 'básico' | 'intermedio' | 'avanzado';
  type?: 'concepto' | 'laboratorio' | 'referencia';
  service?: string;
};

export default function AwsMeta({certs = [], level, type, service}: AwsMetaProps): ReactNode {
  const chips = [
    ...certs.map((cert) => ({label: `Certificación ${cert}`, value: cert, kind: 'cert'})),
    level && {label: `Nivel ${level}`, value: level, kind: 'level'},
    type && {label: `Tipo ${type}`, value: type, kind: 'type'},
    service && {label: `Servicio ${service}`, value: service, kind: 'service'},
  ].filter(Boolean) as {label: string; value: string; kind: string}[];

  return (
    <div className={styles.meta} aria-label="Metadatos de la guía AWS">
      {chips.map((chip) => (
        <span key={`${chip.kind}-${chip.value}`} className={`${styles.chip} ${styles[chip.kind]}`}>
          <span className={styles.srOnly}>{chip.label}: </span>
          {chip.value}
        </span>
      ))}
    </div>
  );
}
