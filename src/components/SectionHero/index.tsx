import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
type SectionHeroProps = {
    eyebrow: string;
    title: string;
    description: string;
    children?: ReactNode;
};
export default function SectionHero({ eyebrow, title, description, children, }: SectionHeroProps): ReactNode {
    return (<section className={styles.hero}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <Heading as="h1">
        {title}
      </Heading>
      <p className={styles.description}>{description}</p>
      {children}
    </section>);
}
