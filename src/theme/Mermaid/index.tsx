import React, { useEffect, useRef, useState, type ReactNode } from "react";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { ErrorBoundaryErrorMessageFallback } from "@docusaurus/theme-common";
import {
  MermaidContainerClassName,
  useMermaidRenderResult,
} from "@docusaurus/theme-mermaid/client";
import type { Props } from "@theme/Mermaid";
import type { RenderResult } from "mermaid";
import styles from "./styles.module.css";

function MermaidRenderResult({
  renderResult,
}: {
  renderResult: RenderResult;
}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const div = ref.current!;
    renderResult.bindFunctions?.(div);
  }, [renderResult]);

  function openInNewTab(): void {
    // Mermaid emits HTML-style <br> tags inside foreignObject nodes. Browsers
    // accept them in the page, but an SVG opened as XML requires self-closing
    // tags.
    const standaloneSvg = renderResult.svg.replace(/<br\s*\/?>/g, "<br />");
    const blob = new Blob([standaloneSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar} aria-label="Controles del diagrama">
        <button
          type="button"
          onClick={() => setScale((current) => Math.min(current + 0.2, 5))}
          aria-label="Ampliar diagrama"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => setScale((current) => Math.max(current - 0.2, 0.6))}
          aria-label="Reducir diagrama"
        >
          −
        </button>
        <button type="button" onClick={() => setScale(1)}>
          Restablecer
        </button>
        <button type="button" onClick={openInNewTab}>
          Abrir en otra pestaña ↗
        </button>
      </div>
      <div className={styles.diagramViewport}>
        <div
          ref={ref}
          className={`${MermaidContainerClassName} ${styles.diagram}`}
          style={{ zoom: scale }}
          dangerouslySetInnerHTML={{ __html: renderResult.svg }}
        />
      </div>
    </div>
  );
}

function MermaidRenderer({ value }: Props): ReactNode {
  const renderResult = useMermaidRenderResult({ text: value });
  if (renderResult === null) {
    return null;
  }
  return <MermaidRenderResult renderResult={renderResult} />;
}

export default function Mermaid(props: Props): ReactNode {
  return (
    <ErrorBoundary
      fallback={(params) => <ErrorBoundaryErrorMessageFallback {...params} />}
    >
      <MermaidRenderer {...props} />
    </ErrorBoundary>
  );
}
