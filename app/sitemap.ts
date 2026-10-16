import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { articles } from "@/content/insights";
import { industries } from "@/content/industries";

// Bump when page content changes. A lastModified of "now" on every build
// tells Google every page changed every deploy, so it learns to ignore it.
const CONTENT_UPDATED = new Date("2026-10-16");

// /lp/* (noindex ad landing pages), legal pages and thank-you pages are left
// out on purpose: the sitemap lists only the pages we want ranking.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/industries", "/insights", "/free-digital-audit", "/contact"];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const service of services.filter((s) => !s.hidden)) {
    entries.push({
      url: `${site.url}/services/${service.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const industry of industries) {
    entries.push({
      url: `${site.url}/industries/${industry.slug}`,
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const article of articles) {
    entries.push({
      url: `${site.url}/insights/${article.slug}`,
      lastModified: new Date(article.updatedAt || article.publishedAt),
      changeFrequency: "yearly",
      priority: 0.6,
    });
  }

  return entries;
}
