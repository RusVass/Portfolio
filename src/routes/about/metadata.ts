import type { PageMetadata } from "../../seo/site-metadata";
import { siteBaseUrl } from "../../seo/site-metadata";

export const aboutMetadata: PageMetadata = {
  title: "Навыки и стек — Ruslan Vasiliev",
  description: "Стек фронтенд, мобильной и серверной разработки: React, React Native, Node.js, DevTools, CI/CD.",
  keywords: [
    "frontend stack",
    "react",
    "node.js",
    "devtools",
    "skills",
  ],
  openGraph: {
    title: "Навыки и стек — Ruslan Vasiliev",
    description: "Экосистема инструментов и технологий разработчика.",
    url: `${siteBaseUrl}/about`,
  },
};
