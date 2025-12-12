import type { PageMetadata } from "../seo/site-metadata";
import { aboutMetadata } from "../routes/about/metadata";
import { homeMetadata } from "../routes/home/metadata";
import { notFoundMetadata } from "../routes/not-found/metadata";

export interface AppRoute {
  path: string;
  label: string;
  end?: boolean;
  metadata?: PageMetadata;
}

export const appRoutes = {
  home: {
    path: "/",
    label: "Profile",
    end: true,
    metadata: homeMetadata,
  },
  about: {
    path: "/about",
    label: "Tech Stack",
    metadata: aboutMetadata,
  },
  notFound: {
    path: "*",
    label: "Not Found",
    metadata: notFoundMetadata,
  },
} as const satisfies Record<string, AppRoute>;

export const navigationRoutes: readonly AppRoute[] = [appRoutes.about] as const;

