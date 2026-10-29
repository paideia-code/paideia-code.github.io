import type { Level, Question, QuestionBank } from './types';
export function shuffle<T>(values: readonly T[], random = Math.random): T[] {
    const result = [...values];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
export function selectQuestions(bank: QuestionBank, options: {
    level?: Level;
    topic?: string;
    count: number;
    random?: () => number;
}): Question[] { const pool = bank.questions.filter(q => (!options.level || q.level === options.level) && (!options.topic || q.topic === options.topic)); const count = Number.isFinite(options.count) ? Math.max(0, Math.floor(options.count)) : 0; return shuffle(pool, options.random).slice(0, count); }
export function isCorrect(q: Question, ids: string[]): boolean { const selected = new Set(ids); return selected.size === q.correctIds.length && q.correctIds.every(id => selected.has(id)); }
export function validateBank(bank: QuestionBank): string[] {
    const errors: string[] = [];
    const ids = new Set<string>();
    for (const q of bank.questions) {
        if (ids.has(q.id))
            errors.push(`Pregunta duplicada: ${q.id}`);
        ids.add(q.id);
        const options = new Set(q.options.map(o => o.id));
        if (q.contentId !== bank.contentId || q.revision < 1 || options.size !== q.options.length || q.options.length < 2)
            errors.push(`Pregunta inválida: ${q.id}`);
        if (!q.correctIds.length || new Set(q.correctIds).size !== q.correctIds.length || q.correctIds.some(id => !options.has(id)))
            errors.push(`Solución inválida: ${q.id}`);
        if (!q.explanation || !q.source.startsWith('https://') || q.options.some(o => !o.explanation))
            errors.push(`Explicación o fuente ausente: ${q.id}`);
    }
    const presets = new Set<string>();
    for (const p of bank.presets) {
        if (presets.has(p.id) || !p.questionIds.length || new Set(p.questionIds).size !== p.questionIds.length || p.questionIds.some(id => !ids.has(id)))
            errors.push(`Quiz inválido: ${p.id}`);
        presets.add(p.id);
    }
    return errors;
}
export type Session = {
    bankRevision: number;
    quizId: string;
    title: string;
    feedback: 'practice' | 'evaluation';
    questionIds: string[];
    optionOrder: Record<string, string[]>;
    answers: Record<string, string[]>;
    checked: string[];
    index: number;
};
export type Attempt = {
    id: string;
    bankRevision: number;
    quizId: string;
    title: string;
    score: number;
    total: number;
    date: string;
    questionRevisions: Record<string, number>;
};
export type Progress = {
    session: Session | null;
    attempts: Attempt[];
};
export function readProgress(raw: string | null, bank: QuestionBank): Progress {
    const empty: Progress = { session: null, attempts: [] };
    if (!raw)
        return empty;
    try {
        const value = JSON.parse(raw);
        const attempts: Attempt[] = Array.isArray(value.attempts) ? value.attempts.filter((a: Attempt) => a && typeof a.id === 'string' && typeof a.quizId === 'string' && typeof a.title === 'string' && Number.isInteger(a.bankRevision) && Number.isInteger(a.total) && a.total > 0 && Number.isInteger(a.score) && a.score >= 0 && a.score <= a.total && typeof a.date === 'string' && a.questionRevisions && typeof a.questionRevisions === 'object').slice(-30) : [];
        const s = value.session as Session | null;
        const byId = new Map(bank.questions.map(q => [q.id, q]));
        const valid = s && s.bankRevision === bank.revision && typeof s.quizId === 'string' && typeof s.title === 'string' && ['practice', 'evaluation'].includes(s.feedback) && Array.isArray(s.questionIds) && s.questionIds.length > 0 && new Set(s.questionIds).size === s.questionIds.length && Number.isInteger(s.index) && s.index >= 0 && s.index < s.questionIds.length && Array.isArray(s.checked) && s.checked.every(id => s.questionIds.includes(id)) && s.answers && s.optionOrder && s.questionIds.every(id => {
            const q = byId.get(id);
            if (!q)
                return false;
            const order = s.optionOrder[id], answers = s.answers[id] ?? [];
            return Array.isArray(order) && order.length === q.options.length && new Set(order).size === order.length && order.every(o => q.options.some(option => option.id === o)) && Array.isArray(answers) && new Set(answers).size === answers.length && answers.every(o => q.options.some(option => option.id === o)) && (q.correctIds.length > 1 || answers.length <= 1) && (!s.checked.includes(id) || answers.length > 0);
        });
        return { attempts, session: valid ? s : null };
    }
    catch {
        return empty;
    }
}
