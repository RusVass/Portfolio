export interface OpenGraphMedia {
  url: string;
  width: number;
  height: number;
  alt?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    url: string;
    images?: OpenGraphMedia[];
  };
}

export const siteBaseUrl = "https://vassrus.dev";

export const siteMetadata = {
  title: "Ruslan Vasiliev — Front-End Developer",
  description:
    "Портфолио фронтенд и мобильного разработчика: проекты на React, React Native, интеграции с Firebase и Node.js.",
  keywords: [
    "Frontend",
    "React",
    "React Native",
    "TypeScript",
    "Ruslan Vasiliev",
    "Portfolio",
  ],
} satisfies PageMetadata;
