import { cn } from "../../lib/utils";

interface PageLoaderProps {
  className?: string;
}

function PageLoader({ className }: PageLoaderProps): JSX.Element {
  return (
    <section className={cn("flex flex-col items-center justify-center gap-3 py-10 text-muted-foreground", className)}>
      <span className="inline-flex h-9 w-9 animate-spin rounded-full border-2 border-primary border-t-transparent" aria-hidden />
      <p className="text-xs uppercase tracking-[0.3em]">Loading content</p>
    </section>
  );
}

export default PageLoader;
