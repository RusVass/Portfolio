import "@fontsource/roboto/400.css";
import { type IconType } from "react-icons";
import { FaExternalLinkAlt, FaGithub, FaGitlab, FaLinkedin, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiAppstore,
  SiBootstrap,
  SiCheckmarx,
  SiCircleci,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGmail,
  SiFirebase,
  SiFormik,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGooglechrome,
  SiGulp,
  SiHtml5,
  SiJenkins,
  SiJira,
  SiMongodb,
  SiMui,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedux,
  SiVercel,
  SiWebstorm,
  SiXcode,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { AnimatedFlag } from "../../components/animated-flag";
import { HoverSwitchImage } from "../../components/hover-switch-image";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import {
  heroContent,
  profileSections,
  type ExperienceSection,
  type ListSection,
  type ProfileSection,
  type LinkIcon,
  type KeyValueIcon,
  type ListIconKey,
} from "../../data/profile";
import { usePageMetadata } from "../../hooks/use-page-metadata";
import { homeMetadata } from "./metadata";

interface LinkIconConfig {
  icon: IconType;
  color: string;
}

const linkIconMap: Record<LinkIcon, LinkIconConfig> = {
  telegram: { icon: FaTelegramPlane, color: "#229ED9" },
  gitlab: { icon: FaGitlab, color: "#E24329" },
  github: { icon: FaGithub, color: "#FFFFFF" },
  linkedin: { icon: FaLinkedin, color: "#0A66C2" },
  project: { icon: FaExternalLinkAlt, color: "#7C3AED" },
};

interface KeyValueIconConfig {
  icon: IconType;
  color: string;
}

const keyValueIconMap: Record<KeyValueIcon, KeyValueIconConfig> = {
  phone: { icon: FiPhone, color: "#34A853" },
  email: { icon: SiGmail, color: "#EA4335" },
  location: { icon: FaMapMarkerAlt, color: "#DD2E44" },
  telegram: { icon: FaTelegramPlane, color: "#229ED9" },
};

interface ListIconConfig {
  icon: IconType;
  color: string;
}

const listIconMap: Record<ListIconKey, ListIconConfig> = {
  react: { icon: SiReact, color: "#61DAFB" },
  redux: { icon: SiRedux, color: "#764ABC" },
  reactNative: { icon: SiReact, color: "#61DAFB" },
  formik: { icon: SiFormik, color: "#02569B" },
  materialUi: { icon: SiMui, color: "#007FFF" },
  bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss3, color: "#1572B6" },
  gulp: { icon: SiGulp, color: "#CF4647" },
  node: { icon: SiNodedotjs, color: "#539E43" },
  express: { icon: SiExpress, color: "#E8E8E8" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  cicd: { icon: SiCircleci, color: "#53B8A2" },
  git: { icon: SiGit, color: "#F05032" },
  yup: { icon: SiCheckmarx, color: "#2F9688" },
  webstorm: { icon: SiWebstorm, color: "#41D1FF" },
  androidStudio: { icon: SiAndroidstudio, color: "#3DDC84" },
  xcode: { icon: SiXcode, color: "#0A84FF" },
  vscode: { icon: TbBrandVscode, color: "#007ACC" },
  chrome: { icon: SiGooglechrome, color: "#4285F4" },
  postman: { icon: SiPostman, color: "#FF6C37" },
  github: { icon: SiGithub, color: "#F4F4F4" },
  gitlab: { icon: SiGitlab, color: "#E24329" },
  jira: { icon: SiJira, color: "#0052CC" },
  jenkins: { icon: SiJenkins, color: "#D33833" },
  firebase: { icon: SiFirebase, color: "#FFCA28" },
  testflight: { icon: SiAppstore, color: "#0A84FF" },
  vercel: { icon: SiVercel, color: "#00DC82" },
  framer: { icon: SiFramer, color: "#0055FF" },
  figma: { icon: SiFigma, color: "#F24E1E" },
};

interface SectionProps {
  section: ProfileSection;
}

interface ContactLink {
  href: string;
  external: boolean;
}

function getContactLink(label: string, value: string): ContactLink | null {
  const lowerLabel = label.toLowerCase();
  const trimmedValue = value.trim();
  const isPhone = lowerLabel.includes("phone") || lowerLabel.includes("mobile") || trimmedValue.startsWith("+");
  const isTelegram = lowerLabel.includes("telegram") || trimmedValue.startsWith("@");
  const isEmail =
    lowerLabel.includes("mail") || (trimmedValue.includes("@") && !isTelegram && !lowerLabel.includes("telegram"));
  const isLocation = lowerLabel.includes("residence") || lowerLabel.includes("location") || lowerLabel.includes("city");

  if (isPhone) {
    const phoneHref = trimmedValue.replace(/[^+\d]/g, "");
    return { href: `tel:${phoneHref}`, external: false };
  }

  if (isTelegram) {
    const username = trimmedValue.startsWith("@") ? trimmedValue.slice(1) : trimmedValue;
    return { href: `https://t.me/${username}`, external: true };
  }

  if (isEmail) {
    return { href: `mailto:${trimmedValue}`, external: false };
  }

  if (isLocation) {
    const query = encodeURIComponent(trimmedValue);
    return { href: `https://www.google.com/maps/search/?api=1&query=${query}`, external: true };
  }

  return null;
}

function ExperienceSectionView({ section }: { section: ExperienceSection }): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {section.entries.map((entry) => (
          <article key={entry.company} className="space-y-3 rounded-lg border border-border/50 bg-secondary/20 p-5">
            <header>
              <h3 className="text-lg font-semibold text-foreground">{entry.company}</h3>
              <p className="text-sm text-muted-foreground">{entry.role}</p>
            </header>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {entry.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
                  <p>{achievement}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

function ListSectionView({ section }: { section: ListSection }): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {section.title}
        </CardTitle>
        <CardDescription className="sr-only">{section.title} list</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid gap-3 sm:grid-cols-2">
          {section.items.map(({ label, icon, imageSrc, imageAlt, href }) => {
            const iconConfig = icon ? listIconMap[icon] : undefined;
            const Icon = iconConfig?.icon;
            const iconColor = iconConfig?.color;
            const hasImage = Boolean(imageSrc);
            const anchorTarget = href ? "_blank" : undefined;
            const anchorRel = href ? "noopener noreferrer" : undefined;

            const visual = hasImage ? (
              <img
                src={imageSrc}
                alt={imageAlt ?? `${label} logo`}
                className="h-8 w-16 flex-shrink-0 self-start object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : Icon ? (
              <Icon className="h-4 w-4" aria-hidden style={{ color: iconColor }} />
            ) : (
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" aria-hidden />
            );

            if (href) {
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={anchorTarget}
                    rel={anchorRel}
                    aria-label={`${label} official site`}
                    className="flex items-start gap-2 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2 text-left text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    {visual}
                    <span>{label}</span>
                  </a>
                </li>
              );
            }

            return (
              <li
                key={label}
                className="flex items-start gap-2 rounded-lg border border-border/50 bg-secondary/30 px-4 py-2 text-left text-sm text-muted-foreground"
              >
                {visual}
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

function Section({ section }: SectionProps): JSX.Element {
  if (section.type === "experience") {
    return <ExperienceSectionView section={section} />;
  }

  if (section.type === "list") {
    return <ListSectionView section={section} />;
  }

  if (section.type === "keyValue") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-3 sm:grid-cols-2">
            {section.items.map(({ label, value, icon, imageSrc, imageAlt, href }) => {
              const iconConfig = icon ? keyValueIconMap[icon] : undefined;
              const Icon = iconConfig?.icon;
              const iconColor = iconConfig?.color;
              const hasImage = Boolean(imageSrc);
              const contactLink = href ? null : getContactLink(label, value);
              const linkHref = href ?? contactLink?.href ?? null;
              const isExternalLink = href ? true : contactLink?.external ?? false;
              const anchorTarget = isExternalLink ? "_blank" : undefined;
              const anchorRel = anchorTarget ? "noopener noreferrer" : undefined;

              return (
                <div
                  key={label}
                  className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-muted-foreground"
                >
                  <dt className="flex items-center gap-2 font-semibold text-foreground">
                    {hasImage ? (
                      <img
                        src={imageSrc}
                        alt={imageAlt ?? `${label} symbol`}
                        className="h-5 w-8 flex-shrink-0 rounded-sm object-cover"
                      />
                    ) : Icon ? (
                      linkHref ? (
                        <a
                          href={linkHref}
                          target={anchorTarget}
                          rel={anchorRel}
                          aria-label={label}
                          className="transition-colors hover:opacity-80"
                          style={{ color: iconColor }}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </a>
                      ) : (
                        <Icon className="h-4 w-4" aria-hidden style={{ color: iconColor }} />
                      )
                    ) : null}
                    {linkHref ? (
                      <a
                        href={linkHref}
                        target={anchorTarget}
                        rel={anchorRel}
                        className="no-underline transition-colors hover:text-primary/80"
                      >
                        {label}
                      </a>
                    ) : (
                      <span>{label}</span>
                    )}
                  </dt>
                  <dd>
                    {linkHref ? (
                      <a
                        href={linkHref}
                        target={anchorTarget}
                        rel={anchorRel}
                        className="text-primary no-underline transition-colors hover:text-primary/80"
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </CardContent>
      </Card>
    );
  }

  if (section.type === "links") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {section.links.map(({ label, href, icon }) => {
            const iconConfig = icon ? linkIconMap[icon] : undefined;
            const Icon = iconConfig?.icon;
            const iconColor = iconConfig?.color;
            return (
              <Button key={href} asChild variant="outline" className={Icon ? "gap-2" : undefined}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={Icon ? label : undefined}>
                  {Icon ? <Icon className="h-4 w-4" aria-hidden style={{ color: iconColor }} /> : null}
                  <span className={Icon ? "sr-only sm:not-sr-only" : undefined}>{label}</span>
                </a>
              </Button>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">{section.content}</p>
      </CardContent>
    </Card>
  );
}

function Home(): JSX.Element {
  usePageMetadata(homeMetadata);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#1e293b_0%,transparent_55%)]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <section className="container flex flex-col gap-16 py-20 md:flex-row">
        <aside className="mx-auto flex max-w-xs flex-col items-center gap-6 text-center md:mx-0">
          <div className="flex flex-col items-center gap-2">
            <AnimatedFlag className="h-14 w-28 drop-shadow-[0_6px_20px_rgba(15,23,42,0.6)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Ukraine</p>
          </div>
          <HoverSwitchImage
            wrapperClassName="group relative h-48 w-48 rounded-full bg-secondary/40 p-3 shadow-xl animate-hero-float"
            overlay={
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
              />
            }
            alt={`${heroContent.name} avatar`}
            className="rounded-full filter brightness-[0.55] contrast-110 !object-contain !ring-2 !ring-primary/20 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2 md:!object-cover"
            transitionMs={8000}
            transitionEasing="cubic-bezier(0.1, 0.35, 0, 1)"
            effect="zoomFade"
          />
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.35em] text-primary">{heroContent.title}</p>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {heroContent.name}
            </h1>
          </div>
        </aside>
        <div className="flex w-full flex-col gap-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {profileSections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
