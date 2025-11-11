import type { PropsWithChildren } from "react";
import { SiteHeader } from "../components/site-header";

function RootLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pb-24 pt-16">{children}</main>
    </div>
  );
}

export { RootLayout };
