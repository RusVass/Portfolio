import type { PageMetadata } from "../../seo/site-metadata";
import { siteBaseUrl } from "../../seo/site-metadata";

export const aboutMetadata: PageMetadata = {
  title: "Skills & Tech Stack — Ruslan Vasiliev",
  description: "Front-end, mobile, and backend toolkit: React, React Native, Node.js, DevTools, CI/CD.",
  keywords: [
    "frontend stack",
    "react",
    "node.js",
    "devtools",
    "skills",
  ],
  openGraph: {
    title: "Skills & Tech Stack — Ruslan Vasiliev",
    description: "Daily ecosystem of tools and technologies used across web and mobile projects.",
    url: `${siteBaseUrl}/about`,
  },
};
