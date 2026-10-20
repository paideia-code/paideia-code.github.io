import type {ReactNode} from 'react';
import styles from './styles.module.css';

type DrawioIframeProps = {
  src: string;
  title?: string;
  height?: number;
};

export default function DrawioIframe({
  src,
  title = 'Diagrama',
  height = 600,
}: DrawioIframeProps): ReactNode {
  return (
    <figure className={styles.wrapper}>
      <div className={styles.container}>
        <iframe
          src={src}
          title={title}
          height={height}
          loading="lazy"
          className={styles.iframe}
        />
      </div>
      <figcaption className={styles.caption}>
        <a href={src} target="_blank" rel="noopener noreferrer">
          Abrir en draw.io
        </a>
      </figcaption>
    </figure>
  );
}
