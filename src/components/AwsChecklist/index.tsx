import {useState} from 'react';
import type {ReactNode} from 'react';
import styles from './styles.module.css';

type AwsChecklistProps = {title?: string; items: string[]};

export default function AwsChecklist({title = 'Checklist', items}: AwsChecklistProps): ReactNode {
  const [completed, setCompleted] = useState<boolean[]>(() => items.map(() => false));
  const count = completed.filter(Boolean).length;

  return (
    <section className={styles.checklist} aria-labelledby="aws-checklist-title">
      <div className={styles.header}>
        <h2 id="aws-checklist-title">{title}</h2>
        <span className={styles.progress} aria-live="polite">{count}/{items.length} completados</span>
      </div>
      <ul className={styles.items}>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            <label className={styles.item}>
              <input
                type="checkbox"
                checked={completed[index]}
                onChange={() => setCompleted((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value))}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
