export interface HeroContent {
  name: string;
  title: string;
  avatar: string;
}

export interface BaseSection {
  id: string;
  title: string;
}

export interface TextSection extends BaseSection {
  type: "text";
  content: string;
}

export type ListIconKey =
  | "react"
  | "redux"
  | "reactNative"
  | "formik"
  | "materialUi"
  | "bootstrap"
  | "html"
  | "css"
  | "gulp"
  | "node"
  | "express"
  | "mongodb"
  | "cicd"
  | "git"
  | "yup"
  | "webstorm"
  | "androidStudio"
  | "xcode"
  | "vscode"
  | "chrome"
  | "postman"
  | "github"
  | "gitlab"
  | "jira"
  | "jenkins"
  | "firebase"
  | "testflight"
  | "vercel"
  | "framer"
  | "figma";

export interface ListItem {
  label: string;
  icon?: ListIconKey;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ListSection extends BaseSection {
  type: "list";
  items: readonly ListItem[];
}

export type KeyValueIcon = "phone" | "email" | "location" | "telegram";

export interface KeyValueItem {
  label: string;
  value: string;
  icon?: KeyValueIcon;
  imageSrc?: string;
  imageAlt?: string;
}

export interface KeyValueSection extends BaseSection {
  type: "keyValue";
  items: KeyValueItem[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  achievements: string[];
}

export interface ExperienceSection extends BaseSection {
  type: "experience";
  entries: ExperienceEntry[];
}

export type LinkIcon = "telegram" | "gitlab" | "github" | "linkedin" | "project";

export interface LinkItem {
  label: string;
  href: string;
  icon?: LinkIcon;
}

export interface LinksSection extends BaseSection {
  type: "links";
  links: LinkItem[];
}

export type ProfileSection =
  | TextSection
  | ListSection
  | KeyValueSection
  | ExperienceSection
  | LinksSection;

export const heroContent: HeroContent = {
  name: "Ruslan Vasiliev",
  title: "Front-End Developer",
  avatar: "/3.png",
};

export const profileSections: readonly ProfileSection[] = [
  {
    id: "summary",
    title: "Summary",
    type: "text",
    content:
      "Front-End, Mobile & Web Developer with 1+ years of experience building modern, high-performance web and cross-platform mobile applications using React, React Native CLI, Redux Toolkit, and Next.js. Proficient in Material UI, React Hook Form, and Tailwind CSS, with hands-on experience integrating Firebase Authentication and Google Sign-In. Skilled in creating reusable components, managing complex state, and connecting applications to REST APIs. Experienced in working with AI agents and automation tools. Familiar with backend development using Node.js, Express.js, and MongoDB, as well as testing with Jest.",
  },
  {
    id: "contact",
    title: "Contact",
    type: "keyValue",
    items: [
      { label: "Mobile", value: "+38 067 679 51 56", icon: "phone" },
      { label: "E-mail", value: "it.vasiliev@gmail.com", icon: "email" },
      { label: "Residence", value: "Kiev, Ukraine", icon: "location" },
      { label: "Telegram", value: "@RuslanVasiliev", icon: "telegram" },
    ],
  },
  {
    id: "tech-skills",
    title: "Tech Skills",
    type: "list",
    items: [
      { label: "React", icon: "react" },
      { label: "Redux Toolkit", icon: "redux" },
      { label: "React Native", icon: "reactNative" },
      { label: "Formik", icon: "formik" },
      { label: "Material UI", icon: "materialUi" },
      { label: "Bootstrap", icon: "bootstrap" },
      { label: "HTML", icon: "html" },
      { label: "CSS/SCSS", icon: "css" },
      { label: "Gulp", icon: "gulp" },
      { label: "Node.js", icon: "node" },
      { label: "Express.js", icon: "express" },
      { label: "MongoDB", icon: "mongodb" },
      { label: "CI/CD", icon: "cicd" },
      { label: "Git", icon: "git" },
      { label: "Yup", icon: "yup" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    type: "list",
    items: [
      { label: "JetBrains WebStorm", icon: "webstorm" },
      { label: "Android Studio", icon: "androidStudio" },
      { label: "Xcode", icon: "xcode" },
      { label: "VS Code", icon: "vscode" },
      { label: "Chrome DevTools", icon: "chrome" },
      { label: "Postman", icon: "postman" },
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "GitLab", icon: "gitlab" },
      { label: "Jira", icon: "jira" },
      { label: "Jenkins", icon: "jenkins" },
      { label: "Firebase Console", icon: "firebase" },
      { label: "TestFlight", icon: "testflight" },
      { label: "CI/CD", icon: "cicd" },
      { label: "Vercel", icon: "vercel" },
      { label: "Framer", icon: "framer" },
      { label: "Figma", icon: "figma" },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    type: "keyValue",
    items: [
      {
        label: "Ukrainian",
        value: "Native",
        imageSrc: "/flags/ua.svg",
        imageAlt: "Flag of Ukraine",
      },
      {
        label: "English",
        value: "Upper-Intermediate",
        imageSrc: "/flags/gb.svg",
        imageAlt: "Flag of United Kingdom",
      },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    type: "list",
    items: [
      {
        label: "2025 – English (Cambridge Assessment)",
        imageSrc: "/cambridge-logo.svg",
        imageAlt: "Cambridge Assessment logo",
      },
      {
        label: "2024 – Front-End (DAN.IT)",
        imageSrc: "/danit-logo.svg",
        imageAlt: "DAN.IT Education logo",
      },
      {
        label: "2024 – TypeScript (Hillel IT School)",
        imageSrc: "/hillel-logo.svg",
        imageAlt: "Hillel IT School logo",
      },
      {
        label: "2023 – JavaScript Automation (Hillel IT School)",
        imageSrc: "/hillel-logo.svg",
        imageAlt: "Hillel IT School logo",
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    type: "experience",
    entries: [
      {
        company: "TechWave Solutions",
        role: "Front-End, Mobile & Web Developer (React / React Native)",
        achievements: [
          "Delivered modern React and TypeScript web applications with emphasis on performance and reusable architecture.",
          "Built production-ready interfaces using Tailwind CSS and shadcn/ui while maintaining design-system fidelity.",
          "Implemented Next.js App Router server components, routing, metadata configuration, and SEO-first structures.",
          "Shipped advanced UI workflows including forms, validation, modals, dynamic components, and interactive layouts.",
          "Integrated REST APIs via Axios and Fetch with resilient error handling and asynchronous control flows.",
          "Ensured responsive experiences across mobile and desktop browsers with precise layout tuning.",
          "Applied Redux Toolkit and Zustand for predictable global state and business logic orchestration.",
          "Developed React Native CLI applications for iOS and Android focused on performance and native UX parity.",
          "Implemented authentication, theming, modals, forms, and navigation patterns with React Navigation v6.",
          "Integrated Firebase Authentication and Google Sign-In while securing sessions through AsyncStorage.",
          "Crafted adaptive React Native interfaces using the StyleSheet API and platform-aware styling.",
          "Connected mobile clients to REST APIs and optimized asynchronous data handling performance.",
          "Contributed to Node.js and Express backend endpoints, shaping API structure and data logic.",
          "Authored Jest unit tests covering web and mobile features to safeguard stability.",
        ],
      },
    ],
  },
  {
    id: "links",
    title: "Links",
    type: "links",
    links: [
      {
        label: "GitLab",
        href: "https://gitlab.com/VassRus/portfolio",
        icon: "gitlab",
      },
      {
        label: "Telegram",
        href: "https://t.me/RuslanVasiliev",
        icon: "telegram",
      },
      {
        label: "GitHub",
        href: "https://github.com/RusVass/Portfolio",
        icon: "github",
      },
      {
        label: "Project",
        href: "https://snapgram-app-mu.vercel.app/",
        icon: "project",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ruslan-vasiliev-334a5419a/",
        icon: "linkedin",
      },
    ],
  },
] as const;

