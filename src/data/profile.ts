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

export interface ListSection extends BaseSection {
  type: "list";
  items: string[];
}

export interface KeyValueItem {
  label: string;
  value: string;
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

export interface LinkItem {
  label: string;
  href: string;
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
      { label: "Mobile", value: "+38 067 679 51 56" },
      { label: "E-mail", value: "it.vasiliv@gmail.com" },
      { label: "Residence", value: "Kiev, Ukraine" },
      { label: "Telegram", value: "@RuslanVasiliev" },
    ],
  },
  {
    id: "tech-skills",
    title: "Tech Skills",
    type: "list",
    items: [
      "React",
      "Redux Toolkit",
      "React Native",
      "Formik",
      "Material UI",
      "Bootstrap",
      "HTML",
      "CSS/SCSS",
      "Gulp",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CI/CD",
      "Git",
      "Yup",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    type: "list",
    items: [
      "WebStorm",
      "Jira",
      "Git",
      "Postman",
      "DevTools",
      "Jenkins",
      "Axios",
      "Figma",
      "Vercel",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    type: "keyValue",
    items: [
      { label: "Ukrainian", value: "Native" },
      { label: "English", value: "Upper-Intermediate" },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    type: "list",
    items: [
      "2025 – English (Cambridge Assessment)",
      "2024 – Front-End (DAN.IT)",
      "2024 – TypeScript (Hillel IT School)",
      "2023 – JavaScript Automation (Hillel IT School)",
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
          "Developed cross-platform mobile applications using React Native CLI for both iOS and Android with native UX fidelity.",
          "Implemented responsive web interfaces in React with Material UI v5 and modular SCSS.",
          "Integrated Firebase Authentication and Google Sign-In with secure session storage and guarded navigation flows.",
          "Built flexible navigation stacks with React Navigation v6 (stack, tab, drawer) and Redux Toolkit for state orchestration.",
          "Connected REST APIs via Axios and Fetch, adding resilient error handling and loading states.",
          "Collaborated on backend design with Node.js/Express, contributing to RESTful API endpoints.",
          "Established Jest-based unit coverage to ensure cross-platform stability.",
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
        label: "GitLab Portfolio",
        href: "https://gitlab.com/VassRus/portfolio",
      },
    ],
  },
] as const;

