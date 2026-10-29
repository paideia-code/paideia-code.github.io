import { useId, useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import type { LearningChapter, LearningLesson } from '@site/src/lib/learning/types';
import styles from './styles.module.css';

export function LessonList({ lessons }: { lessons: LearningLesson[] }): ReactNode {
  return (
    <ol className={styles.lessons}>
      {lessons.map(lesson => (
        <li key={lesson.id}>
          {lesson.href ? (
            <Link to={lesson.href}>{lesson.title}</Link>
          ) : (
            <span className={styles.planned}>{lesson.title}</span>
          )}
        </li>
      ))}
    </ol>
  );
}

type Props = {
  chapters: LearningChapter[];
  label?: string;
};

export default function CourseProgram({
  chapters,
  label = 'Programa de estudio',
}: Props): ReactNode {
  const groupName = useId();
  const [openChapter, setOpenChapter] = useState<string | null>(chapters[0]?.id ?? null);

  return (
    <section className={styles.program} aria-label={label} data-course-program>
      <div>
        {chapters.map((chapter, index) => (
          <details
            key={chapter.id}
            name={groupName}
            className={styles.chapter}
            open={openChapter === chapter.id}
          >
            <summary
              className={styles.summary}
              onClick={event => {
                event.preventDefault();
                setOpenChapter(current => current === chapter.id ? null : chapter.id);
              }}
            >
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={styles.title}>{chapter.title}</span>
              <span className={styles.toggle} aria-hidden="true" />
            </summary>
            <div className={styles.body}>
              {chapter.children?.length ? (
                <div className={styles.subchapters}>
                  {chapter.children.map(child => (
                    <section className={styles.subchapter} key={child.id}>
                      <h3>{child.title}</h3>
                      <p>{child.description}</p>
                      {child.lessons?.length ? <LessonList lessons={child.lessons} /> : null}
                    </section>
                  ))}
                </div>
              ) : null}
              {chapter.lessons?.length ? <LessonList lessons={chapter.lessons} /> : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
