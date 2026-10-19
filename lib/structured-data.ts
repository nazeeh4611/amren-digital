import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

// The licensed office. The team works remotely; Dubai is the market served,
// so it goes in areaServed rather than being claimed as an address.
const registeredAddress = {
  "@type": "PostalAddress",
  streetAddress: site.location.street,
  addressLocality: site.location.city,
  addressRegion: site.location.region,
  addressCountry: site.location.countryCode,
};

const areaServed = [
  { "@type": "City", name: site.serviceArea.primaryCity },
  { "@type": "Country", name: site.location.country },
];

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    // Google requires a logo of at least 112x112px; /icon is only 32x32.
    logo: absoluteUrl("/apple-icon"),
    image: absoluteUrl("/opengraph-image"),
    telephone: site.contact.phone,
    address: registeredAddress,
    sameAs: [site.social.instagram],
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      legalName: site.parent.legalName,
      url: site.parent.url,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}

/**
 * Only used where the underlying information (service area, telephone,
 * registered address) is genuinely accurate. No geo coordinates, opening
 * hours, ratings or review counts are fabricated.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.contact.phone,
    areaServed,
    address: registeredAddress,
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      legalName: site.parent.legalName,
      url: site.parent.url,
    },
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed,
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.publishedAt,
    dateModified: input.updatedAt || input.publishedAt,
    author: { "@type": "Organization", name: input.author },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: absoluteUrl(input.path),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
