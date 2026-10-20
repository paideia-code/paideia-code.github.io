import React from "react";
import {
  useCurrentSidebarSiblings,
  useDocsVersion,
} from "@docusaurus/plugin-content-docs/client";
import type {
  PropSidebarItem,
  PropVersionDoc,
} from "@docusaurus/plugin-content-docs";
import DocCardList from "@theme/DocCardList";
import styles from "./styles.module.css";

function getLastPathSegment(href: string): string | undefined {
  const path = href.split(/[?#]/, 1)[0].replace(/\/+$/, "");
  const segment = path.slice(path.lastIndexOf("/") + 1);

  return segment ? decodeURIComponent(segment) : undefined;
}

function getIndexDescription(
  docs: Record<string, PropVersionDoc>,
  href: string,
): string | undefined {
  const segment = getLastPathSegment(href);
  if (!segment) {
    return undefined;
  }

  const indexId = `${segment}/index`;
  const indexDoc = Object.values(docs).find(
    (doc) => doc.id === indexId || doc.id.endsWith(`/${indexId}`),
  );

  return indexDoc?.description;
}

export default function SidebarCards(): React.ReactElement | null {
  const { docs } = useDocsVersion();
  const items = useCurrentSidebarSiblings().filter(
    (item): item is Extract<PropSidebarItem, { type: "category" | "link" }> =>
      (item.type === "category" && Boolean(item.href)) ||
      (item.type === "link" && item.docId !== "index" && Boolean(item.href)),
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
