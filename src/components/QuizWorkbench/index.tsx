import { useEffect, useId, useMemo, useState } from "react";
import type { ReactNode } from "react";
import ContentMeta from "@site/src/components/ContentMeta";
import {
  isCorrect,
  readProgress,
  selectQuestions,
  shuffle,
} from "@site/src/lib/learning/quiz";
import type { Attempt, Progress, Session } from "@site/src/lib/learning/quiz";
import type {
  Level,
  Question,
  QuestionBank,
} from "@site/src/lib/learning/types";
import styles from "./styles.module.css";
function Explanation({
  question,
  answers,
}: {
  question: Question;
  answers: string[];
}): ReactNode {
  return (
    <div className={styles.explanation}>
      <strong>
        {isCorrect(question, answers) ? "Respuesta correcta" : "Para repasar"}
      </strong>
      <p>{question.explanation}</p>
      <ul>
        {question.options.map((option) => (
          <li key={option.id}>
            <strong>
              {question.correctIds.includes(option.id)
                ? "✓ Correcta"
                : "Alternativa"}
              : {option.text}
            </strong>
            {answers.includes(option.id) && " · Tu selección"}
            <br />
            {option.explanation}
          </li>
        ))}
      </ul>
      <a href={question.source} target="_blank" rel="noopener noreferrer">
        Referencia oficial
      </a>
    </div>
  );
}
export default function QuizWorkbench({
  bank,
}: {
  bank: QuestionBank;
}): ReactNode {
  const formId = useId();
  const storageKey = `paideia.quiz.${bank.id}.v1`;
  const [progress, setProgress] = useState<Progress>({
    session: null,
    attempts: [],
  });
  const [ready, setReady] = useState(false);
  const [saved, setSaved] = useState(true);
  const [selection, setSelection] = useState(bank.presets[0]?.id ?? "custom");
  const [level, setLevel] = useState<Level | "">("");
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(5);
  const [feedback, setFeedback] = useState<"practice" | "evaluation">(
    "practice",
  );
  const [review, setReview] = useState<Session | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    try {
      const loaded = readProgress(localStorage.getItem(storageKey), bank);
      setProgress(loaded);
      if (loaded.session) {
        setSelection(loaded.session.quizId);
        setFeedback(loaded.session.feedback);
      }
    } catch {
      setSaved(false);
    }
    setReady(true);
  }, [bank, storageKey]);
  const byId = useMemo(
    () => new Map(bank.questions.map((q) => [q.id, q])),
    [bank],
  );
  const pool = bank.questions.filter(
    (q) => (!level || q.level === level) && (!topic || q.topic === topic),
  );
  const topics = [...new Set(bank.questions.map((q) => q.topic))];
  const preset = bank.presets.find((p) => p.id === selection);
  function persist(next: Progress) {
    setProgress(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }
  function latest(quizId: string) {
    return [...progress.attempts]
      .reverse()
      .find(
        (a) =>
          a.quizId === quizId &&
          a.bankRevision === bank.revision &&
          Object.entries(a.questionRevisions).every(
            ([id, revision]) => byId.get(id)?.revision === revision,
          ),
      );
  }
  function start() {
    const questions = preset
      ? preset.questionIds.map((id) => byId.get(id)!)
      : selectQuestions(bank, {
          level: level || undefined,
          topic: topic || undefined,
          count: Math.min(count, pool.length),
        });
    if (!questions.length) return;
    const session: Session = {
      bankRevision: bank.revision,
      quizId: preset?.id ?? "custom",
      title: preset?.title ?? "Quiz personalizado",
      feedback,
      questionIds: questions.map((q) => q.id),
      optionOrder: Object.fromEntries(
        questions.map((q) => [q.id, shuffle(q.options.map((o) => o.id))]),
      ),
      answers: {},
      checked: [],
      index: 0,
    };
    setReview(null);
    setShowSettings(false);
    persist({ ...progress, session });
  }
  function answer(question: Question, optionId: string) {
    const s = progress.session;
    if (!s || s.checked.includes(question.id)) return;
    const old = s.answers[question.id] ?? [];
    const answerIds =
      question.correctIds.length === 1
        ? [optionId]
        : old.includes(optionId)
          ? old.filter((id) => id !== optionId)
          : [...old, optionId];
    persist({
      ...progress,
      session: { ...s, answers: { ...s.answers, [question.id]: answerIds } },
    });
  }
  function check() {
    const s = progress.session;
    if (
      s &&
      !s.checked.includes(s.questionIds[s.index]) &&
      (s.answers[s.questionIds[s.index]] ?? []).length
    )
      persist({
        ...progress,
        session: { ...s, checked: [...s.checked, s.questionIds[s.index]] },
      });
  }
  function move(offset: number) {
    const s = progress.session;
    if (s)
      persist({
        ...progress,
        session: {
          ...s,
          index: Math.max(
            0,
            Math.min(s.questionIds.length - 1, s.index + offset),
          ),
        },
      });
  }
  function moveTo(index: number) {
    const s = progress.session;
    if (s && index >= 0 && index < s.questionIds.length) {
      persist({ ...progress, session: { ...s, index } });
    }
  }
  function finish() {
    const s = progress.session;
    if (!s || s.questionIds.some((id) => !s.answers[id]?.length)) return;
    const score = s.questionIds.filter((id) =>
      isCorrect(byId.get(id)!, s.answers[id]),
    ).length;
    const attempt: Attempt = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      bankRevision: bank.revision,
      quizId: s.quizId,
      title: s.title,
      score,
      total: s.questionIds.length,
      date: new Date().toISOString(),
      questionRevisions: Object.fromEntries(
        s.questionIds.map((id) => [id, byId.get(id)!.revision]),
      ),
    };
    setReview(s);
    persist({
      session: null,
      attempts: [...progress.attempts, attempt].slice(-30),
    });
  }
  const session = progress.session;
  const question = session
    ? byId.get(session.questionIds[session.index])
    : undefined;
  const answers =
    question && session ? (session.answers[question.id] ?? []) : [];
  const checked = Boolean(question && session?.checked.includes(question.id));
  const answeredCount = session
    ? session.questionIds.filter(id => (session.answers[id] ?? []).length > 0).length
    : 0;
  return (
    <section className={styles.workbench} aria-label={`Quizzes: ${bank.title}`}>
      <header className={styles.header}>
        <span className={styles.kicker}>PRACTICA Y COMPRUEBA</span>
        <h2>{bank.title}</h2>
        <p>
          {bank.questions.length} preguntas · {bank.presets.length} quizzes
          preparados · un banco común
        </p>
      </header>
      {!session && <details className={styles.catalog}>
        <summary>Recorrido recomendado y resultados</summary>
        <ol>
          {bank.presets.map((p) => {
            const result = latest(p.id);
            return (
              <li key={p.id}>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.description}</p>
                  <small>
                    {p.questionIds.length} preguntas ·{" "}
                    {result
                      ? `Realizado: ${result.score}/${result.total}`
                      : "Sin intento terminado"}
                  </small>
                </div>
                <button
                  type="button"
                  className="button button--secondary button--sm"
                  onClick={() => setSelection(p.id)}
                >
                  Seleccionar
                </button>
              </li>
            );
          })}
        </ol>
      </details>}
      <details
        className={styles.configuration}
        open={!session || showSettings}
        onToggle={event => setShowSettings(event.currentTarget.open)}
      >
        {session && <summary>Configuración del intento</summary>}
        <div className={styles.settings}>
        <div className={styles.field}>
          <label htmlFor={`${formId}-quiz`}>Quiz</label>
          <select
            id={`${formId}-quiz`}
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
          >
            {bank.presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
            <option value="custom">Personalizado</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor={`${formId}-feedback`}>Corrección</label>
          <select
            id={`${formId}-feedback`}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value as typeof feedback)}
          >
            <option value="practice">
              Práctica · después de cada respuesta
            </option>
            <option value="evaluation">Evaluación · al terminar</option>
          </select>
        </div>
        {!preset && (
          <>
            <div className={styles.field}>
              <label htmlFor={`${formId}-level`}>Nivel</label>
              <select
                id={`${formId}-level`}
                value={level}
                onChange={(e) => setLevel(e.target.value as Level | "")}
              >
                <option value="">Todos los niveles</option>
                {(["básico", "intermedio", "avanzado"] as const).map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-topic`}>Subtema</label>
              <select
                id={`${formId}-topic`}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Todos los subtemas</option>
                {topics.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor={`${formId}-count`}>Cantidad</label>
              <input
                id={`${formId}-count`}
                type="number"
                min="1"
                max={Math.max(1, pool.length)}
                value={Math.min(count, Math.max(1, pool.length))}
                onChange={(e) =>
                  setCount(Math.max(1, Math.floor(Number(e.target.value)) || 1))
                }
              />
            </div>
          </>
        )}
        </div>
        <div className={styles.actions}>
        <button
          type="button"
          className="button button--primary"
          onClick={start}
          disabled={!ready || (!preset && !pool.length)}
        >
          {session ? "Empezar otro intento" : "Empezar quiz"}
        </button>
        <span>
          {preset
            ? `${preset.questionIds.length} preguntas en orden preparado`
            : `${pool.length} disponibles · selección aleatoria sin repetición`}
        </span>
        </div>
      </details>
      {session && (
        <p className={styles.storage}>
          Empezar otro intento sustituye el intento en curso; conserva los
          resultados ya terminados.
        </p>
      )}
      {session && question && (
        <div className={styles.question}>
          <div className={styles.questionHeading}>
            <strong>{session.title}</strong>
            <span>
              Pregunta {session.index + 1} de {session.questionIds.length}
            </span>
          </div>
          <ContentMeta
            area={bank.title}
            level={question.level}
            type={question.skill}
            topics={[question.topic]}
            responseCount={question.correctIds.length}
          />
          <fieldset>
            <legend>{question.prompt}</legend>
            <div className={styles.options}>
              {session.optionOrder[question.id].map((optionId) => {
                const option = question.options.find((o) => o.id === optionId)!;
                return (
                  <label
                    key={option.id}
                    className={`${styles.option} ${answers.includes(option.id) ? styles.selected : ""}`}
                  >
                    <input
                      type={
                        question.correctIds.length === 1 ? "radio" : "checkbox"
                      }
                      name={`${formId}-${question.id}`}
                      checked={answers.includes(option.id)}
                      disabled={checked}
                      onChange={() => answer(question, option.id)}
                    />
                    <span>{option.text}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          {checked && (
            <div role="status" aria-live="polite">
              <Explanation question={question} answers={answers} />
            </div>
          )}
          <div className={styles.progressHeader}>
            <div className={styles.progressText}>
              <strong>Progreso</strong>
              <span>{answeredCount} de {session.questionIds.length} respondidas</span>
            </div>
            <nav className={styles.questionNav} aria-label="Navegación de preguntas">
              {session.questionIds.map((id, index) => {
                const answered = (session.answers[id] ?? []).length > 0;
                return (
                  <button
                    key={id}
                    type="button"
                    className={`${styles.questionJump} ${index === session.index ? styles.questionJumpCurrent : ""} ${answered ? styles.questionJumpAnswered : ""}`}
                    aria-current={index === session.index ? "step" : undefined}
                    aria-label={`Ir a la pregunta ${index + 1}${answered ? ", respondida" : ""}`}
                    onClick={() => moveTo(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </nav>
            <progress max={session.questionIds.length} value={answeredCount} aria-label="Progreso del quiz" />
          </div>
          <div className={styles.actions}>
            <button
              type="button"
              className="button button--secondary"
              disabled={session.index === 0}
              onClick={() => move(-1)}
            >
              Anterior
            </button>
            {session.feedback === "practice" && !checked && (
              <button
                type="button"
                className="button button--primary"
                onClick={check}
                disabled={!answers.length}
              >
                Comprobar
              </button>
            )}
            <button
              type="button"
              className="button button--primary"
              disabled={
                !answers.length || (session.feedback === "practice" && !checked)
              }
              onClick={() =>
                session.index === session.questionIds.length - 1
                  ? finish()
                  : move(1)
              }
            >
              {session.index === session.questionIds.length - 1
                ? "Terminar y ver resultados"
                : "Siguiente"}
            </button>
          </div>
        </div>
      )}
      {review && (
        <div className={styles.results}>
          <h3 tabIndex={-1}>Resultado de {review.title}</h3>
          <p role="status" aria-live="polite">
            <strong>
              {
                review.questionIds.filter((id) =>
                  isCorrect(byId.get(id)!, review.answers[id] ?? []),
                ).length
              }{" "}
              de {review.questionIds.length} respuestas correctas.
            </strong>{" "}
            Revisa las explicaciones y vuelve al apartado que necesites
            reforzar.
          </p>
          {review.questionIds.map((id, index) => {
            const q = byId.get(id)!;
            return (
              <details key={id}>
                <summary>
                  {isCorrect(q, review.answers[id] ?? []) ? "✓" : "↻"}{" "}
                  {index + 1}. {q.prompt}
                </summary>
                <ContentMeta
                  area={bank.title}
                  level={q.level}
                  type={q.skill}
                  topics={[q.topic]}
                  responseCount={q.correctIds.length}
                />
                <Explanation question={q} answers={review.answers[id] ?? []} />
              </details>
            );
          })}
        </div>
      )}
      <p className={styles.storage}>
        {saved
          ? "Los intentos en curso y los últimos resultados se guardan en este navegador. No se sincronizan entre dispositivos."
          : "El almacenamiento del navegador no está disponible: el progreso se conserva durante esta sesión."}{" "}
        Una puntuación no acredita por sí sola dominio del tema.
      </p>
    </section>
  );
}
