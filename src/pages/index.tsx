import type { CSSProperties, ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const features = [
  {
    title: "Theory",
    description: "Conocimiento teórico: diseño, arquitectura, estructuras de datos, algoritmos, etc. Funciona como cuaderno técnico compartido, pensado para consulta, reflexión y evolución constante.",
    route: "/theory",
    icon: "theory",
  },
  {
    title: "POCs",
    description: "Proyectos pequeños creados para validar decisiones técnicas antes de integrarlas en soluciones reales. Aquí exploramos cualquier idea y escenarios específicos (tecnología, arquitectura, patrón, etc).",
    route: "/pocs",
    icon: "pocs",
  },
  {
    title: "Templates",
    description: "Plantillas listas para iniciar nuevos proyectos de forma rápida, manteniendo buenas prácticas de arquitectura, estructura y estándares de calidad.",
    route: "/templates",
    icon: "templates",
  },
  {
    title: "Libraries",
    description: "Librerías que concentran lógica transversal y patrones recurrentes, permitiendo reutilizar soluciones probadas y reducir duplicación, complejidad y acoplamiento en los proyectos.",
    route: "/libraries",
    icon: "libraries",
  },
  {
    title: "Projects",
    description: "Proyectos completos que materializan el conocimiento desarrollado en los pilares anteriores, integrando fundamentos, decisiones técnicas validadas y buenas prácticas en soluciones reales, coherentes y mantenibles.",
    route: "/projects",
    icon: "projects",
  },
] as const;

const featuredRepositories = [
  {
    category: "POCs",
    name: "paideia-poc-microservices-spring",
    description: "Laboratorio de microservicios con Spring.",
    documentationPath: "/pocs/microservices-spring",
    documentationLabel: "Documentación",
    githubUrl: "https://github.com/paideia-code/paideia-poc-microservices-spring",
  },
  {
    category: "Templates",
    name: "paideia-template-nest-rest",
    description: "Base para microservicios REST con NestJS.",
    documentationPath: "/templates/nest-rest",
    documentationLabel: "Documentación",
    githubUrl: "https://github.com/paideia-code/paideia-template-nest-rest",
  },
] as const;

function HomepageHeader(): ReactNode {
  const heroLightUrl = useBaseUrl("brand/banners/hero-light.svg");
  const heroDarkUrl = useBaseUrl("brand/banners/hero-dark.svg");
  const heroStyle = {
    "--hero-image-light": `url("${heroLightUrl}")`,
    "--hero-image-dark": `url("${heroDarkUrl}")`,
  } as CSSProperties;

  return (
    <header className={`hero ${styles.heroBanner}`} style={heroStyle}>
      <div className={`container ${styles.heroContent}`}>
        <div>
          <p className={styles.eyebrow}>PAIDEIA CODE / ECOSISTEMA</p>
          <Heading as="h1" className={styles.title}>
            Software de alta calidad.
          </Heading>
          <p className={styles.subtitle}>
            Un ecosistema abierto para aprender, experimentar y construir.
          </p>
        </div>
        <div className={styles.heroVisual} aria-hidden="true" />
        <p className={styles.topics}>
          TEORÍA <span>·</span> PRÁCTICA <span>·</span> INGENIERÍA
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const githubIconUrl = useBaseUrl("brand/icons/github.svg");
  const iconsBaseUrl = useBaseUrl("brand/icons");

  return (
    <Layout
      title="Paideia Code"
      description="Sitio general y ecosistema abierto de Paideia Code"
    >
      <HomepageHeader />
      <main>
        <section className={styles.intro}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>01 / EL CONTEXTO</p>
              <Heading as="h2">Qué es Paideia Code</Heading>
            </div>
            <div className={styles.introContent}>
              <p>
                Paideia Code es una organización de ingeniería de software enfocada en el desarrollo del conocimiento teórico-práctico y en la construcción de soluciones con fundamento.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.featureKicker}>02 / LOS CINCO PILARES</p>
              <Heading as="h2">
                Un sistema para recorrer el conocimiento.
              </Heading>
            </div>
            <div className={styles.featureGrid}>
              {features.map(({ title, description, route, icon }, index) => (
                <Link className={styles.feature} to={route} key={title}>
                  <p className={styles.featureIndex}>0{index + 1}</p>
                  <img
                    className={styles.icon}
                    src={`${iconsBaseUrl}/icon-${icon}.svg`}
                    alt=""
                  />
                  <Heading as="h3">{title}</Heading>
                  <p>{description}</p>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.repositories}>
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>03 / CÓDIGO ABIERTO</p>
              <Heading as="h2">Repositorios de código destacados</Heading>
            </div>
            <div className={styles.repositoryGrid}>
              {featuredRepositories.map((repository) => (
                <article className={styles.repository} key={repository.name}>
                  <span>{repository.category}</span>
                  <strong>{repository.name}</strong>
                  <small>{repository.description}</small>
                  <div className={styles.repositoryActions}>
                    <Link
                      className={styles.documentationLink}
                      to={repository.documentationPath}
                    >
                      {repository.documentationLabel}
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      className={styles.githubLink}
                      href={repository.githubUrl}
                      aria-label={`Repositorio ${repository.name} en GitHub`}
                    >
                      <img src={githubIconUrl} alt="" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
