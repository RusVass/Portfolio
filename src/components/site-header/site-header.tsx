import { NavLink } from "react-router-dom";
import { navigationRoutes } from "../../config/routes";
import { cn } from "../../lib/utils";

function SiteHeader(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold tracking-wide text-primary">
          Portfolio
        </NavLink>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {navigationRoutes.map(({ path, label, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground",
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export { SiteHeader };
