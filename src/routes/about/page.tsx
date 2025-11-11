import type { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiAppstore,
  SiAxios,
  SiBootstrap,
  SiCheckmarx,
  SiCircleci,
  SiCloudflare,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFormik,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGoogle,
  SiGooglechrome,
  SiGraphql,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostman,
  SiReact,
  SiReacthookform,
  SiStrapi,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
  SiWebstorm,
  SiWordpress,
  SiXcode,
  SiZulip,
} from "react-icons/si";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { cn } from "../../lib/utils";
import { skillCategories, type IconName, type SkillLogo } from "./data";
import { usePageMetadata } from "../../hooks/use-page-metadata";
import { aboutMetadata } from "./metadata";

const iconRegistry: Partial<Record<IconName, IconType>> = {
  bootstrap: SiBootstrap,
  node: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  jira: SiJira,
  postman: SiPostman,
  figma: SiFigma,
  jenkins: SiJenkins,
  vercel: SiVercel,
  axios: SiAxios,
  react: SiReact,
  reactNative: SiReact,
  nextjs: SiNextdotjs,
  flutter: SiFlutter,
  formik: SiFormik,
  reactHookForm: SiReacthookform,
  zustand: SiZulip,
  tailwind: SiTailwindcss,
  yup: SiCheckmarx,
  fetch: SiCloudflare,
  rest: SiSwagger,
  graphql: SiGraphql,
  strapi: SiStrapi,
  wordpress: SiWordpress,
  firebase: SiFirebase,
  google: SiGoogle,
  openai: SiOpenai,
  webstorm: SiWebstorm,
  androidstudio: SiAndroidstudio,
  xcode: SiXcode,
  chrome: SiGooglechrome,
  git: SiGit,
  github: SiGithub,
  gitlab: SiGitlab,
  testflight: SiAppstore,
  cicd: SiCircleci,
};

interface LogoProps {
  logo: SkillLogo;
  label: string;
}

function Logo({ logo, label }: LogoProps): JSX.Element {
  if (logo.kind === "asset") {
    return <img src={logo.src} alt={logo.alt} className="h-12 w-12" loading="lazy" />;
  }

  const IconComponent = iconRegistry[logo.name];

  if (!IconComponent) {
    const initials = label
      .split(/\s+/)
      .map((word) => word.slice(0, 1))
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div
        aria-hidden
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/60 text-sm font-semibold text-foreground"
      >
        {initials}
      </div>
    );
  }

  return <IconComponent aria-hidden className="h-12 w-12" title={label} />;
}

function About(): JSX.Element {
  usePageMetadata(aboutMetadata);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_20%,#1e293b_0%,transparent_60%)]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <section className="container flex flex-col gap-14 py-20">
        <header className="flex flex-col items-center gap-3 text-center">
          <Badge variant="outline" className="rounded-full px-4 py-1 text-xs uppercase tracking-[0.4em]">
            Stack
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">My knowledge</h1>
          <p className="max-w-2xl text-sm text-muted-foreground">
          Tools, technologies, and ecosystem I work with every day — from front-end and mobile development to supporting services and DevTools.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map(({ id, title, items }) => (
            <Card key={id} className="border-border/50 bg-secondary/20">
              <CardHeader>
                <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                {items.map(({ label, logo }) => (
                  <article
                    key={label}
                    className={cn(
                      "flex items-center gap-4 rounded-xl border border-border/40 bg-background/60 p-4 transition-transform",
                      "hover:-translate-y-1 hover:shadow-lg",
                    )}
                  >
                    <Logo logo={logo} label={label} />
                    <p className="text-sm font-medium text-foreground">{label}</p>
                  </article>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
