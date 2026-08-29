export type Project = {
  slug: string;
  title: string;
  industry: string;
  servicesUsed: string[];
  summary: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  resultsAvailable: boolean;
  testimonialId: string | null;
};

/**
 * Real completed work only — no invented client names or fabricated
 * results. As a young studio, AMREN's finished deliverables so far are
 * this website itself, plus video, poster/print and branding work; each
 * entry below is honestly one of those, not a generic ad-campaign case
 * study. Individual client project write-ups get added here once
 * approved for public display — until then the narrative fields say so
 * plainly instead of inventing detail.
 */
export const projects: Project[] = [
  {
    slug: "amren-digital-website",
    title: "The AMREN Digital Website",
    industry: "Digital Marketing Agency",
    servicesUsed: ["Web Design & Development"],
    summary: "AMREN Digital's own website — a connected marketing system built to demonstrate exactly what we build for clients.",
    overview:
      "This site: a Next.js marketing website with a service page for every offer, a landing-page system for paid campaigns, and a connected lead-capture flow — designed and built in-house.",
    challenge:
      "AMREN needed a website that didn't just describe the agency's services, but actually demonstrated the same connected-system thinking sold to clients — fast, conversion-focused, and built to extend as the business grows.",
    strategy: "A component-driven build on one connected content and lead-capture system, rather than a static brochure site.",
    execution: "Every service page, landing page and lead form runs through the same tracked system — the site you're looking at right now.",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "video-production",
    title: "Video Production",
    industry: "Video & Motion",
    servicesUsed: ["Video Production"],
    summary: "Completed video production work for AMREN clients — individual project write-ups and footage to be added here.",
    overview: "[Individual video projects to be added once approved for public display.]",
    challenge: "[Project detail to be added.]",
    strategy: "[Project detail to be added.]",
    execution: "[Project detail to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "posters",
    title: "Poster & Print Design",
    industry: "Graphic Design",
    servicesUsed: ["Content Creation"],
    summary: "Completed poster and print creative for AMREN clients — individual pieces to be added here.",
    overview: "[Individual poster/print work to be added once approved for public display.]",
    challenge: "[Project detail to be added.]",
    strategy: "[Project detail to be added.]",
    execution: "[Project detail to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "branding",
    title: "Branding",
    industry: "Brand Identity",
    servicesUsed: ["Content Creation"],
    summary: "Completed brand identity work for AMREN clients — individual projects to be added here.",
    overview: "[Individual branding projects to be added once approved for public display.]",
    challenge: "[Project detail to be added.]",
    strategy: "[Project detail to be added.]",
    execution: "[Project detail to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
