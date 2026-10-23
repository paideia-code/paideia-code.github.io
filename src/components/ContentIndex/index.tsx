import React, {useId, useMemo, useState} from "react";
import {
  useDocsSidebar,
  useDocsVersion,
} from "@docusaurus/plugin-content-docs/client";
import type {
  PropSidebarItem,
  PropSidebarItemCategory,
  PropVersionDoc,
} from "@docusaurus/plugin-content-docs";
import styles from "./styles.module.css";

type ContentIndexProps = {
  rootId: string;
};

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0];
  return `/${pathname.replace(/^\/+|\/+$/g, "")}`.replace(/\/$/, "") || "/";
}

function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === "category";
}

function itemHref(item: PropSidebarItem): string | undefined {
  return item.type === "category" || item.type === "link"
    ? item.href
    : undefined;
}

function itemDescription(
  item: PropSidebarItem,
  docs: Record<string, PropVersionDoc>,
): string | undefined {
  if (item.type === "category" || item.type === "link") {
    if (item.description) return item.description;
  }

  const docId = item.type === "link" ? item.docId : undefined;
  return docId ? docs[docId]?.description : undefined;
}

function findRoot(
  items: PropSidebarItem[],
  rootId: string,
  currentPath: string,
): PropSidebarItemCategory | undefined {
  const expectedPath = normalizePath(rootId.replace(/\/index$/, ""));

  for (const item of items) {
    if (!isCategory(item)) continue;

    const href = item.href ? normalizePath(item.href) : undefined;
    if (
      href === expectedPath ||
      href?.endsWith(expectedPath) ||
      href === currentPath
    ) {
      return item;
    }

    const nested = findRoot(item.items, rootId, currentPath);
    if (nested) return nested;
  }

  return undefined;
}

function categoryKey(item: PropSidebarItemCategory, path: string): string {
  return `${path}/${item.href ?? item.label}`;
}

export default function ContentIndex({rootId}: ContentIndexProps): React.ReactElement {
  const sidebar = useDocsSidebar();
  const {docs} = useDocsVersion();
  const instanceId = useId();
  const currentPath = typeof window === "undefined"
    ? ""
    : normalizePath(window.location.pathname);
  const root = useMemo(
    () => findRoot(sidebar?.items ?? [], rootId, currentPath),
    [currentPath, rootId, sidebar],
  );
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  if (!root) {
    return (
      <p className={styles.empty} role="status">
        No se encontró el índice de contenidos.
      </p>
    );
  }

  const toggle = (key: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const renderLink = (item: PropSidebarItem, key: string, depth: number) => {
    const href = itemHref(item);
    if (!href) return null;
    return (
      <li className={styles.leaf} key={key}>
        <span className={styles.dot} aria-hidden="true" />
        <a href={href}>
          <span>{item.type === "html" ? item.value : item.label}</span>
          {itemDescription(item, docs) && (
            <small>{itemDescription(item, docs)}</small>
          )}
        </a>
      </li>
    );
  };

  const renderCategory = (
    item: PropSidebarItemCategory,
    path: string,
    depth: number,
  ): React.ReactElement => {
    const key = categoryKey(item, path);
    const panelId = `${instanceId}-${path.replace(/[^a-z\d]/gi, "-")}`;
    const open = expanded.has(key);
    const description = itemDescription(item, docs);
    const children = item.items.map((child, index) => {
      if (isCategory(child)) {
        return renderCategory(child, `${path}.${index}`, depth + 1);
      }
      return renderLink(child, `${path}.${index}`, depth + 1);
    });

    return (
      <li className={depth === 0 ? styles.section : styles.category} key={key}>
        <div className={styles.categoryHeader}>
          <a className={styles.categoryLink} href={item.href}>
            {depth === 0 && <span className={styles.sectionNumber} aria-hidden="true" />}
            <span>
              <strong>{item.label}</strong>
              {description && <small>{description}</small>}
            </span>
          </a>
          {item.items.length > 0 && (
            <button
              type="button"
              className={styles.toggle}
              aria-controls={panelId}
              aria-expanded={open}
              aria-label={`${open ? "Colapsar" : "Expandir"} ${item.label}`}
              onClick={() => toggle(key)}
            >
              <span className={styles.chevron} aria-hidden="true" />
            </button>
          )}
        </div>
        {item.items.length > 0 && (
          <ul id={panelId} className={styles.children} hidden={!open}>
            {children}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className={styles.index} aria-label="Índice de contenidos">
      <ul className={styles.sections}>
        {root.items.map((item, index) =>
          isCategory(item)
            ? renderCategory(item, `root.${index}`, 0)
            : renderLink(item, `section.${index}`, 0),
        )}
      </ul>
    </nav>
  );
}
