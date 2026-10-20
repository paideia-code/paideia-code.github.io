import {useState} from 'react';
import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type QuizOption = {
  text: string;
  correct?: boolean;
};

type QuizProps = {
  question: string;
  options: QuizOption[];
  explanation?: string;
};

export default function Quiz({
  question,
  options,
  explanation,
}: QuizProps): ReactNode {
  // Estado inicial nulo: el primer render (incluido SSR) no toca APIs del navegador.
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);

  const isCorrectAnswer =
    checked && selected !== null && Boolean(options[selected]?.correct);

  const handleSelect = (index: number) => {
    if (!checked) {
      setSelected(index);
    }
  };

  const handleCheck = () => {
    if (selected !== null) {
      setChecked(true);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className={styles.quiz}>
      <p className={styles.question}>{question}</p>
      <ul className={styles.options}>
        {options.map((option, index) => {
          const isSelected = selected === index;
          const showCorrect = checked && Boolean(option.correct);
          const showWrong = checked && isSelected && !option.correct;
          return (
            <li key={index} className={styles.optionItem}>
              <button
                type="button"
                className={clsx(
                  styles.option,
                  isSelected && styles.selected,
                  showCorrect && styles.correct,
                  showWrong && styles.wrong,
                )}
                onClick={() => handleSelect(index)}
                disabled={checked}
                aria-pressed={isSelected}>
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.actions}>
        {checked ? (
          <button
            type="button"
            className="button button--secondary"
            onClick={handleReset}>
            Reintentar
          </button>
        ) : (
          <button
            type="button"
            className="button button--primary"
            onClick={handleCheck}
            disabled={selected === null}>
            Comprobar
          </button>
        )}
      </div>
      {checked && (
        <p
          className={clsx(
            styles.feedback,
            isCorrectAnswer ? styles.feedbackOk : styles.feedbackKo,
          )}
          role="status">
          {isCorrectAnswer
            ? '¡Correcto!'
             : 'Incorrecto. Revisa la opción marcada.'}
        </p>
      )}
      {checked && explanation && (
        <div className={styles.explanation}>
          <strong>Explicación:</strong> {explanation}
        </div>
      )}
    </div>
  );
}
