import type {ReactNode} from 'react';
import styles from './styles.module.css';

type UnderConstructionProps = {
  title?: string;
  children?: ReactNode;
};

export default function UnderConstruction({
  title = 'Sección en construcción',
  children,
}: UnderConstructionProps): ReactNode {
  return (
    <aside className={styles.notice} aria-label={title}>
      <div className={styles.icon} aria-hidden="true">
        🚧
      </div>
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          {children ?? (
            <p>
              Esta sección está en construcción. Su contenido todavía no está completo.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
