import CSSLogo from "./assets/CSS.svg";
import HTMLLogo from "./assets/HTML.svg";
import JSLogo from "./assets/JS.svg";
import MUILogo from "./assets/MUI.svg";
import REACTLogo from "./assets/REACT.svg";
import REDUXLogo from "./assets/REDUX.svg";
import SCSSLogo from "./assets/SCSS.svg";

export type IconName =
  | "bootstrap"
  | "node"
  | "express"
  | "mongodb"
  | "jira"
  | "postman"
  | "figma"
  | "jenkins"
  | "vercel"
  | "axios"
  | "react"
  | "reactNative"
  | "nextjs"
  | "flutter"
  | "formik"
  | "reactHookForm"
  | "zustand"
  | "tailwind"
  | "yup"
  | "fetch"
  | "rest"
  | "graphql"
  | "strapi"
  | "wordpress"
  | "firebase"
  | "google"
  | "openai"
  | "webstorm"
  | "androidstudio"
  | "xcode"
  | "vscode"
  | "chrome"
  | "git"
  | "github"
  | "gitlab"
  | "testflight"
  | "cicd";

export interface SkillLogoAsset {
  kind: "asset";
  src: string;
  alt: string;
}

export interface SkillLogoIcon {
  kind: "icon";
  name: IconName;
  color?: string;
}

export type SkillLogo = SkillLogoAsset | SkillLogoIcon;

export interface SkillItem {
  label: string;
  logo: SkillLogo;
}

export interface SkillCategory {
  id: string;
  title: string;
  items: SkillItem[];
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "frameworks",
    title: "Frameworks & Platforms",
    items: [
      { label: "React", logo: { kind: "asset", src: REACTLogo, alt: "React" } },
      { label: "JavaScript", logo: { kind: "asset", src: JSLogo, alt: "JavaScript" } },
      { label: "React Native CLI", logo: { kind: "icon", name: "reactNative" } },
      { label: "Next.js", logo: { kind: "icon", name: "nextjs" } },
      { label: "Flutter", logo: { kind: "icon", name: "flutter" } },
      { label: "Node.js", logo: { kind: "icon", name: "node" } },
      { label: "Express.js", logo: { kind: "icon", name: "express" } },
    ],
  },
  {
    id: "state-forms",
    title: "State & Forms",
    items: [
      { label: "Redux Toolkit", logo: { kind: "asset", src: REDUXLogo, alt: "Redux Toolkit" } },
      { label: "Zustand", logo: { kind: "icon", name: "zustand" } },
      { label: "Formik", logo: { kind: "icon", name: "formik" } },
      { label: "React Hook Form", logo: { kind: "icon", name: "reactHookForm" } },
      { label: "React Hooks", logo: { kind: "icon", name: "react" } },
    ],
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    items: [
      { label: "Material UI", logo: { kind: "asset", src: MUILogo, alt: "Material UI" } },
      { label: "Tailwind CSS", logo: { kind: "icon", name: "tailwind" } },
      { label: "Bootstrap", logo: { kind: "icon", name: "bootstrap" } },
      { label: "HTML", logo: { kind: "asset", src: HTMLLogo, alt: "HTML" } },
      { label: "CSS", logo: { kind: "asset", src: CSSLogo, alt: "CSS" } },
      { label: "SCSS", logo: { kind: "asset", src: SCSSLogo, alt: "SCSS" } },
      { label: "Yup", logo: { kind: "icon", name: "yup" } },
    ],
  },
  {
    id: "data-platforms",
    title: "Data & Platforms",
    items: [
      { label: "Axios", logo: { kind: "icon", name: "axios" } },
      { label: "Fetch", logo: { kind: "icon", name: "fetch" } },
      { label: "REST API", logo: { kind: "icon", name: "rest" } },
      { label: "GraphQL", logo: { kind: "icon", name: "graphql" } },
      { label: "MongoDB", logo: { kind: "icon", name: "mongodb" } },
      { label: "Strapi CMS", logo: { kind: "icon", name: "strapi" } },
      { label: "WordPress", logo: { kind: "icon", name: "wordpress" } },
      { label: "Firebase Authentication", logo: { kind: "icon", name: "firebase" } },
      { label: "Google Sign-In", logo: { kind: "icon", name: "google" } },
      { label: "AI agents", logo: { kind: "icon", name: "openai" } },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    items: [
      { label: "JetBrains WebStorm", logo: { kind: "icon", name: "webstorm" } },
      { label: "Android Studio", logo: { kind: "icon", name: "androidstudio" } },
      { label: "Xcode", logo: { kind: "icon", name: "xcode" } },
      { label: "VS Code", logo: { kind: "icon", name: "vscode" } },
      { label: "Chrome DevTools", logo: { kind: "icon", name: "chrome" } },
      { label: "Postman", logo: { kind: "icon", name: "postman" } },
      { label: "Git", logo: { kind: "icon", name: "git" } },
      { label: "GitHub", logo: { kind: "icon", name: "github" } },
      { label: "GitLab", logo: { kind: "icon", name: "gitlab" } },
      { label: "Jira", logo: { kind: "icon", name: "jira" } },
      { label: "Jenkins", logo: { kind: "icon", name: "jenkins" } },
      { label: "Firebase Console", logo: { kind: "icon", name: "firebase" } },
      { label: "TestFlight", logo: { kind: "icon", name: "testflight" } },
      { label: "CI/CD", logo: { kind: "icon", name: "cicd" } },
      { label: "Vercel", logo: { kind: "icon", name: "vercel" } },
      { label: "Figma", logo: { kind: "icon", name: "figma" } },
    ],
  },
] as const;

