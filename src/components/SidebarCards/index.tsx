import React from "react";
import {
  useCurrentSidebarSiblings,
  useDocsVersion,
  useDocsSidebar,
} from "@docusaurus/plugin-content-docs/client";
import type {
  PropSidebarItem,
  PropVersionDoc,
} from "@docusaurus/plugin-content-docs";
import { useLocation } from "@docusaurus/router";
import DocCardList from "@theme/DocCardList";
import styles from "./styles.module.css";

function normalizePath(path: string): string {
  const withoutQuery = path.split(/[?#]/, 1)[0];
  const pathname = withoutQuery.match(/^[a-z][a-z\d+.-]*:\/\/[^/]*(\/.*)?$/i)?.[1] ?? withoutQuery;
  const normalized = `/${pathname.replace(/^\/+|\/+$/g, "")}`;

  return normalized === "/" ? normalized : normalized.replace(/\/+$/, "");
}

function getIndexDescription(
  docs: Record<string, PropVersionDoc>,
  href: string,
): string | undefined {
  const normalizedHref = normalizePath(href);
  const indexDoc = Object.values(docs).find(
    (doc) => {
      const docPath = normalizePath(doc.id.replace(/\/index$/, ""));

      // The doc permalink includes the route base path and, when deployed,
      // the site's base path. Matching the complete doc path as a suffix keeps
      // both prefixes intact and avoids collisions such as three `resiliencia`
      // indexes in different taxonomies.
      return (
        normalizedHref === docPath ||
        normalizedHref.endsWith(docPath)
      );
    },
  );

  return indexDoc?.description;
}

type SidebarCardsProps = {
  root?: boolean;
};

export default function SidebarCards({ root = false }: SidebarCardsProps): React.ReactElement | null {
  const { docs } = useDocsVersion();
  const siblings = useCurrentSidebarSiblings();
  const sidebar = useDocsSidebar();
  const { pathname } = useLocation();
  const candidates = root ? sidebar?.items ?? [] : siblings;
  const items = candidates.filter(
    (item): item is Extract<PropSidebarItem, { type: "category" | "link" }> =>
      ((item.type === "category" && Boolean(item.href) && item.items.length > 0) ||
        (item.type === "link" && item.docId !== "index" && Boolean(item.href))) &&
      normalizePath(item.href ?? "") !== normalizePath(pathname),
  );
  const itemsWithDescriptions = items.map((item) => {
    if (item.type !== "category" || item.description) {
      return item;
    }
    const categoryHref = item.href;
    if (!categoryHref) {
      return item;
    }

    const description = getIndexDescription(docs, categoryHref);
    return description ? { ...item, description } : item;
  });

  return itemsWithDescriptions.length > 0 ? (
    <DocCardList items={itemsWithDescriptions} className={styles.list} />
  ) : null;
}
