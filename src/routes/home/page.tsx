import "@fontsource/roboto/400.css";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import {
  heroContent,
  profileSections,
  type ExperienceSection,
  type ListSection,
  type ProfileSection,
} from "../../data/profile";
import { usePageMetadata } from "../../hooks/use-page-metadata";
import { homeMetadata } from "./metadata";

interface SectionProps {
  section: ProfileSection;
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
          {section.items.map((item) => (
            <li key={item} className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-2 text-sm text-muted-foreground">
              {item}
            </li>
          ))}
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
            {section.items.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-lg border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-muted-foreground"
              >
                <dt className="font-semibold text-foreground">{label}</dt>
                <dd>
                  {(() => {
                    const lowerLabel = label.toLowerCase();
                    const trimmedValue = value.trim();
                    const isPhone =
                      lowerLabel.includes("phone") || lowerLabel.includes("mobile") || trimmedValue.startsWith("+");
                    const isEmail = lowerLabel.includes("mail") || trimmedValue.includes("@");
                    const isTelegram = lowerLabel.includes("telegram") || trimmedValue.startsWith("@");

                    if (isPhone) {
                      const phoneHref = trimmedValue.replace(/[^+\d]/g, "");
                      return (
                        <a
                          href={`tel:${phoneHref}`}
                          className="text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                        >
                          {value}
                        </a>
                      );
                    }

                    if (isEmail) {
                      return (
                        <a
                          href={`mailto:${trimmedValue}`}
                          className="text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                        >
                          {value}
                        </a>
                      );
                    }

                    if (isTelegram) {
                      const username = trimmedValue.startsWith("@") ? trimmedValue.slice(1) : trimmedValue;
                      return (
                        <a
                          href={`https://t.me/${username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                        >
                          {value}
                        </a>
                      );
                    }

                    return value;
                  })()}
                </dd>
              </div>
            ))}
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
          {section.links.map(({ label, href }) => (
            <Button key={href} asChild variant="outline">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </Button>
          ))}
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
          <div className="group relative rounded-full bg-secondary/40 p-3 shadow-xl animate-hero-float">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-60"
            />
            <img
              src={heroContent.avatar}
              alt={`${heroContent.name} avatar`}
              className="relative h-48 w-48 rounded-full object-cover shadow-2xl ring-2 ring-primary/20 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
            />
          </div>
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
