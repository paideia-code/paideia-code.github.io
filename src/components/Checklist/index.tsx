import { useEffect, useId, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';
type Item = {
    id: string;
    text: string;
};
export default function Checklist({ title = 'Comprobación', items, storageKey }: {
    title?: string;
    items: Item[];
    storageKey?: string;
}): ReactNode {
    const id = useId();
    const [selected, setSelected] = useState<string[]>([]);
    const [ready, setReady] = useState(false);
    const [saved, setSaved] = useState(true);
    useEffect(() => {
        try {
            const raw: unknown = storageKey ? JSON.parse(localStorage.getItem(`paideia.checklist.${storageKey}`) ?? '[]') : [];
            setSelected(Array.isArray(raw) ? raw.filter((v): v is string => typeof v === 'string' && items.some(i => i.id === v)) : []);
        }
        catch {
            setSelected([]);
            setSaved(false);
        }
        setReady(true);
    }, [storageKey]);
    function toggle(itemId: string) {
        const next = selected.includes(itemId) ? selected.filter(v => v !== itemId) : [...selected, itemId];
        setSelected(next);
        if (storageKey) {
            try {
                localStorage.setItem(`paideia.checklist.${storageKey}`, JSON.stringify(next));
                setSaved(true);
            }
            catch {
                setSaved(false);
            }
        }
    }
    return <section className={styles.checklist} aria-labelledby={id}><div className={styles.header}><h3 id={id}>{title}</h3><span aria-live="polite">{selected.filter(v => items.some(i => i.id === v)).length}/{items.length}</span></div><ul>{items.map(item => <li key={item.id}><label><input type="checkbox" checked={selected.includes(item.id)} disabled={!ready} onChange={() => toggle(item.id)}/><span>{item.text}</span></label></li>)}</ul><small>{storageKey && saved ? 'Marcas personales guardadas en este navegador.' : 'Marcas personales de esta sesión.'} Marcar una casilla no constituye una evaluación.</small></section>;
}
