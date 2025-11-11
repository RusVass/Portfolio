import { useEffect } from "react";
import type { PageMetadata } from "../seo/site-metadata";

export function usePageMetadata(metadata: PageMetadata | undefined): void {
  useEffect(() => {
    if (!metadata) {
      return;
    }

    if (metadata.title) {
      document.title = metadata.title;
    }

    if (metadata.description) {
      updateTag("meta[name='description']", "name", "description", metadata.description);
    }

    if (metadata.keywords?.length) {
      updateTag("meta[name='keywords']", "name", "keywords", metadata.keywords.join(", "));
    }
  }, [metadata]);
}

function updateTag(selector: string, attribute: string, value: string, content: string): void {
  const tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (tag) {
    tag.content = content;
    return;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, value);
  meta.content = content;
  document.head.appendChild(meta);
}
