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
 * Six placeholder project slots. No client names, industries beyond a
 * generic category, or results are invented — everything here is
 * clearly marked for replacement with real project content and assets.
 */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["Google Ads", "Meta Ads"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "project-two",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["SEO", "Web Design & Development"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "project-three",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["Social Media Marketing", "Content Creation"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "project-four",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["Video Production", "Meta Ads"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "project-five",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["Local SEO", "Google Ads"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
  {
    slug: "project-six",
    title: "Real Project Title To Be Added",
    industry: "[Industry to be added]",
    servicesUsed: ["Marketing Automation", "Web Design & Development"],
    summary: "[REAL PROJECT SUMMARY TO BE ADDED]",
    overview: "[Project overview to be added once this engagement is confirmed for the portfolio.]",
    challenge: "[Challenge to be added.]",
    strategy: "[Strategy to be added.]",
    execution: "[Execution details to be added.]",
    resultsAvailable: false,
    testimonialId: null,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
