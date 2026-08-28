import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { landingPages } from "@/content/landingPages";
import { projects } from "@/content/projects";
import { articles } from "@/content/insights";
import { industries } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/work",
    "/insights",
    "/free-digital-audit",
    "/contact",
    "/waitlist",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ];

  const now = new Date();

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const service of services) {
    entries.push({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const lp of landingPages) {
    entries.push({
      url: `${site.url}/lp/${lp.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const industry of industries) {
    entries.push({
      url: `${site.url}/industries/${industry.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const project of projects) {
    entries.push({
      url: `${site.url}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
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
