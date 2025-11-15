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
    "Portfolio of a front-end and mobile developer: React and React Native projects, Firebase Auth integrations, and Node.js experience.",
  keywords: [
    "Frontend",
    "React",
    "React Native",
    "TypeScript",
    "Ruslan Vasiliev",
    "Portfolio",
  ],
} satisfies PageMetadata;
