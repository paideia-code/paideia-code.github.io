import type { ReactNode } from "react";
import styles from "./styles.module.css";

type RepositoryLinkProps = {
  href: string;
  children?: ReactNode;
};

export default function RepositoryLink({
  href,
  children = "Ver repositorio en GitHub",
}: RepositoryLinkProps): ReactNode {
  return (
    <div className={styles.container}>
      <a
        className={styles.link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/brand/icons/github.svg" alt="" aria-hidden="true" />
        <span>{children}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </a>
    </div>
  );
}
