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
  href?: string;
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
  href?: string;
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
  title: "Full Stack Developer",
  avatar: "/3.png",
};

export const profileSections: readonly ProfileSection[] = [
  {
    id: "summary",
    title: "Summary",
    type: "text",
    content:
      "Full Stack Developer with 1+ years of experience building web and mobile applications using React, TypeScript, and Next.js. Actively use AI-assisted development tools like Cursor and GitHub Copilot to accelerate delivery and improve code quality. Focus on clean, maintainable, and scalable code. Experienced in backend integration with Supabase and Firebase, including authentication and API development. Skilled in building responsive UI components with Material UI and Tailwind CSS. Comfortable in startup environments and collaborating with English-speaking clients.",
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
      { label: "React", icon: "react", href: "https://react.dev/" },
      { label: "Redux Toolkit", icon: "redux", href: "https://redux-toolkit.js.org/" },
      { label: "React Native", icon: "reactNative", href: "https://reactnative.dev/" },
      { label: "Formik", icon: "formik", href: "https://formik.org/" },
      { label: "Material UI", icon: "materialUi", href: "https://mui.com/" },
      { label: "Bootstrap", icon: "bootstrap", href: "https://getbootstrap.com/" },
      { label: "HTML", icon: "html", href: "https://developer.mozilla.org/docs/Web/HTML" },
      { label: "CSS/SCSS", icon: "css", href: "https://developer.mozilla.org/docs/Web/CSS" },
      { label: "Gulp", icon: "gulp", href: "https://gulpjs.com/" },
      { label: "Node.js", icon: "node", href: "https://nodejs.org/" },
      { label: "Express.js", icon: "express", href: "https://expressjs.com/" },
      { label: "MongoDB", icon: "mongodb", href: "https://www.mongodb.com/" },
      { label: "CI/CD", icon: "cicd", href: "https://circleci.com/" },
      { label: "Git", icon: "git", href: "https://git-scm.com/" },
      { label: "Yup", icon: "yup", href: "https://github.com/jquense/yup" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    type: "list",
    items: [
      { label: "JetBrains WebStorm", icon: "webstorm", href: "https://www.jetbrains.com/webstorm/" },
      { label: "Android Studio", icon: "androidStudio", href: "https://developer.android.com/studio" },
      { label: "Xcode", icon: "xcode", href: "https://developer.apple.com/xcode/" },
      { label: "VS Code", icon: "vscode", href: "https://code.visualstudio.com/" },
      { label: "Chrome DevTools", icon: "chrome", href: "https://developer.chrome.com/docs/devtools" },
      { label: "Postman", icon: "postman", href: "https://www.postman.com/" },
      { label: "Git", icon: "git", href: "https://git-scm.com/" },
      { label: "GitHub", icon: "github", href: "https://github.com/" },
      { label: "GitLab", icon: "gitlab", href: "https://about.gitlab.com/" },
      { label: "Jira", icon: "jira", href: "https://www.atlassian.com/software/jira" },
      { label: "Jenkins", icon: "jenkins", href: "https://www.jenkins.io/" },
      { label: "Firebase Console", icon: "firebase", href: "https://firebase.google.com/" },
      { label: "TestFlight", icon: "testflight", href: "https://developer.apple.com/testflight/" },
      { label: "CI/CD", icon: "cicd", href: "https://circleci.com/" },
      { label: "Vercel", icon: "vercel", href: "https://vercel.com/" },
      { label: "Framer", icon: "framer", href: "https://www.framer.com/" },
      { label: "Figma", icon: "figma", href: "https://www.figma.com/" },
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
        href: "https://uk.wikipedia.org/wiki/Україна",
      },
      {
        label: "English",
        value: "Upper-Intermediate",
        imageSrc: "/flags/gb.svg",
        imageAlt: "Flag of United Kingdom",
        href: "https://en.wikipedia.org/wiki/United_Kingdom",
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
        href: "https://cambridge.ua/",
      },
      {
        label: "2024 – Front-End (DAN.IT)",
        imageSrc: "/danit-logo.svg",
        imageAlt: "DAN.IT Education logo",
        href: "https://dan-it.com.ua/",
      },
      {
        label: "2024 – TypeScript (Hillel IT School)",
        imageSrc: "/hillel-logo.svg",
        imageAlt: "Hillel IT School logo",
        href: "https://ithillel.ua/",
      },
      {
        label: "2023 – JavaScript Automation (Hillel IT School)",
        imageSrc: "/hillel-logo.svg",
        imageAlt: "Hillel IT School logo",
        href: "https://ithillel.ua/",
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
          "Develop and maintain production web applications using React and TypeScript",
          "Build reusable UI components with Tailwind CSS and shadcn/ui, ensuring responsive layouts",
          "Implement Next.js App Router with server components, metadata, and SEO optimization",
          "Integrate REST APIs with Axios/Fetch, managing authentication and error handling",
          "Develop cross-platform mobile applications using React Native CLI with Firebase auth",
          "Collaborate on backend features using Node.js, Express.js, and database integrations",
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

