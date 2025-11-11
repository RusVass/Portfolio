import type { PageMetadata } from "../../seo/site-metadata";
import { siteBaseUrl, siteMetadata } from "../../seo/site-metadata";

export const homeMetadata: PageMetadata = {
  ...siteMetadata,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteBaseUrl,
  },
};
