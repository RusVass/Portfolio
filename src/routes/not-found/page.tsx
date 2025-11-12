import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { appRoutes } from "../../config/routes";
import { usePageMetadata } from "../../hooks/use-page-metadata";
import { notFoundMetadata } from "./metadata";

function NotFoundPage(): JSX.Element {
  usePageMetadata(notFoundMetadata);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-center">
      <span className="text-7xl font-black tracking-[0.6em] text-primary">404</span>
      <h1 className="text-2xl font-semibold text-foreground sm:text-3xl">Page not found</h1>
      <p className="max-w-xl text-sm text-muted-foreground">
        Looks like you reached a missing route. Check the address or return to the homepage to continue exploring the
        portfolio.
      </p>
      <Button asChild>
        <Link to={appRoutes.home.path}>Back to home</Link>
      </Button>
    </section>
  );
}

export default NotFoundPage;
