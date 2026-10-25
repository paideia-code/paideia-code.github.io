import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Paideia Code",
  tagline: "Conocimiento, experimentación y software con fundamento",
  favicon: "brand/logo/favicon-v2.svg",
  url: "https://paideia-code.github.io",
  baseUrl: "/",
  organizationName: "paideia-code",
  projectName: "paideia-code.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  markdown: {
    format: "detect",
    mermaid: true,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs/theory",
          routeBasePath: "theory",
          sidebarPath: "./sidebarsTheory.ts",
          numberPrefixParser: false,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "templates",
        path: "docs/templates",
        routeBasePath: "templates",
        sidebarPath: "./sidebarsTemplates.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "libraries",
        path: "docs/libraries",
        routeBasePath: "libraries",
        sidebarPath: "./sidebarsLibraries.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "pocs",
        path: "docs/pocs",
        routeBasePath: "pocs",
        sidebarPath: "./sidebarsPocs.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "projects",
        path: "docs/projects",
        routeBasePath: "projects",
        sidebarPath: "./sidebarsProjects.ts",
      },
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: [
          "/theory",
          "/templates",
          "/libraries",
          "/pocs",
          "/projects",
        ],
        language: "es",
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: { light: "neutral", dark: "neutral" },
    },
    navbar: {
      logo: {
        alt: "Paideia Code",
        src: "brand/logo/paideia-logo-horizontal-light.svg",
        srcDark: "brand/logo/paideia-logo-horizontal-dark.svg",
        width: 170,
        height: 40,
      },
      items: [
        {
          to: "/",
          position: "left",
          label: "Home",
        },
        {
          to: "/theory",
          position: "left",
          className: "navbar-pillar-link navbar-pillar-theory",
          html: '<img class="navbar-pillar-icon" src="/brand/icons/icon-theory.svg" alt="" aria-hidden="true" /><span class="navbar-pillar-label">Theory</span>',
        },
        {
          to: "/pocs",
          position: "left",
          className: "navbar-pillar-link navbar-pillar-pocs",
          html: '<img class="navbar-pillar-icon" src="/brand/icons/icon-pocs.svg" alt="" aria-hidden="true" /><span class="navbar-pillar-label">POCs</span>',
        },
        {
          to: "/templates",
          position: "left",
          className: "navbar-pillar-link navbar-pillar-templates",
          html: '<img class="navbar-pillar-icon" src="/brand/icons/icon-templates.svg" alt="" aria-hidden="true" /><span class="navbar-pillar-label">Templates</span>',
        },
        {
          to: "/libraries",
          position: "left",
          className: "navbar-pillar-link navbar-pillar-libraries",
          html: '<img class="navbar-pillar-icon" src="/brand/icons/icon-libraries.svg" alt="" aria-hidden="true" /><span class="navbar-pillar-label">Libraries</span>',
        },
        {
          to: "/projects",
          position: "left",
          className: "navbar-pillar-link navbar-pillar-projects",
          html: '<img class="navbar-pillar-icon" src="/brand/icons/icon-projects.svg" alt="" aria-hidden="true" /><span class="navbar-pillar-label">Projects</span>',
        },
        {
          href: "https://github.com/paideia-code",
          label: "GitHub",
          className: "navbar-github-link",
          "aria-label": "Paideia Code en GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentación",
          items: [
            { label: "Theory", to: "/theory" },
            { label: "POCs", to: "/pocs" },
            { label: "Templates", to: "/templates" },
            { label: "Libraries", to: "/libraries" },
            { label: "Projects", to: "/projects" },
          ],
        },
        {
          title: "GitHub",
          items: [
            { label: "Organización", href: "https://github.com/paideia-code" },
            {
              label: "POC Microservices Spring",
              href: "https://github.com/paideia-code/paideia-poc-microservices-spring",
            },
            {
              label: "Template Nest REST",
              href: "https://github.com/paideia-code/paideia-template-nest-rest",
            },
            {
              label: "POC Hexagonal Nest",
              href: "https://github.com/paideia-code/paideia-poc-hexagonal-nest",
            },
          ],
        },
        {
          title: "Licencias",
          items: [
            {
              label: "Código — AGPL-3.0-or-later",
              href: "https://github.com/paideia-code/paideia-code.github.io/blob/main/LICENSE",
            },
            {
              label: "Documentación — CC BY-SA 4.0",
              href: "https://github.com/paideia-code/paideia-code.github.io/blob/main/legal/LICENSE-DOCS.md",
            },
            {
              label: "Política de licencias",
              href: "https://github.com/paideia-code/paideia-code.github.io/blob/main/legal/LICENSING.md",
            },
            {
              label: "Aviso de terceros",
              href: "https://github.com/paideia-code/paideia-code.github.io/blob/main/legal/THIRD-PARTY-NOTICES.md",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paideia Code. Código bajo AGPL-3.0-or-later. Documentación bajo CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
