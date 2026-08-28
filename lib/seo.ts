import type { Metadata } from "next";
import { site } from "@/content/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string; // e.g. "/services/google-ads"
  noindex?: boolean;
  ogImage?: string;
};

/**
 * Every indexable page calls this with its own unique title/description.
 * Canonical host is always the AMREN Digital subdomain — never the
 * parent (amren.ae).
 */
export function buildMetadata({ title, description, path, noindex, ogImage }: BuildMetadataInput): Metadata {
  const url = `${site.url}${path}`;
  const image = ogImage || `${site.url}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function absoluteUrl(path: string) {
  return `${site.url}${path}`;
}
