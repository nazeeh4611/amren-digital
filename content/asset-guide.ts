/**
 * Internal content/SEO planning reference for future real assets.
 *
 * IMPORTANT: `seoTopic` here informs page strategy, headings and content
 * planning ONLY. It is never used as image alt text — see AssetPlaceholder
 * and README-ASSETS.md for the alt-text rules that apply when a real image
 * replaces a placeholder.
 */

export type AssetGuideEntry = {
  recommended: string;
  aspectRatio: string;
  priority: "high" | "medium" | "low";
  seoTopic: string;
};

export const assetGuide: Record<string, AssetGuideEntry> = {
  heroMain: {
    recommended:
      "Premium UAE business environment, founder/business owner, creative agency environment, or a cinematic campaign/collage visual. Avoid generic handshake stock imagery.",
    aspectRatio: "16:9 or 4:5",
    priority: "high",
    seoTopic: "digital marketing agency / digital growth / Dubai / UAE",
  },
  floatingGoogleAds: {
    recommended: "Search result, Google Ads campaign screenshot, or paid search dashboard.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "Google Ads / paid search",
  },
  floatingMetaAds: {
    recommended: "Instagram or Facebook campaign visual, or a phone mockup of a live ad.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "Meta Ads / social advertising",
  },
  floatingWebsite: {
    recommended: "Responsive website / browser mockup of a real project.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "website design / web development",
  },
  floatingAnalytics: {
    recommended: "Analytics dashboard, campaign reporting screen, or growth chart visualization.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "digital marketing analytics / campaign tracking",
  },
  attractVisual: {
    recommended: "Google search, Meta ads, social content, SEO or local search visual.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "digital marketing / advertising / SEO / social media",
  },
  generateVisual: {
    recommended: "Website, landing page, WhatsApp conversation, enquiry form or phone-call visual.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "lead generation / website conversion / WhatsApp leads",
  },
  growVisual: {
    recommended: "Analytics, CRM, automation, reporting or retargeting workflow visual.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "digital growth / CRM / marketing automation",
  },
  "service-google-ads": {
    recommended: "Real Google Ads campaign, search advertising screenshot, search result, or branded campaign visual.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "Google Ads / PPC / paid search / Dubai",
  },
  "service-meta-ads": {
    recommended: "Real Instagram/Facebook advertising creative or campaign visual.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "Meta Ads / Facebook Ads / Instagram advertising / Dubai",
  },
  "service-seo": {
    recommended: "Search result, ranking visualization, organic traffic chart, or SEO dashboard.",
    aspectRatio: "4:5",
    priority: "high",
    seoTopic: "SEO / local SEO / search visibility / Dubai",
  },
  "service-local-seo": {
    recommended: "Google Business Profile screenshot, local map pack result, or storefront photograph.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "Local SEO / Google Business Profile / Dubai",
  },
  "service-social-media-marketing": {
    recommended: "Instagram feed, content grid, reel cover, or phone mockup.",
    aspectRatio: "3:4",
    priority: "high",
    seoTopic: "social media marketing / social media management / Dubai",
  },
  "service-web-design-development": {
    recommended: "Real website screenshot, responsive mockup, browser interface or mobile UI.",
    aspectRatio: "16:9",
    priority: "high",
    seoTopic: "web design / website development / Dubai",
  },
  "service-content-creation": {
    recommended: "Real advertising creative, campaign design, or graphic design portfolio piece.",
    aspectRatio: "1:1",
    priority: "medium",
    seoTopic: "content creation / creative design / advertising creatives / Dubai",
  },
  "service-video-production": {
    recommended: "Production still, camera setup, reel cover, or promotional video frame.",
    aspectRatio: "3:4",
    priority: "medium",
    seoTopic: "video production / content creation / Dubai",
  },
  "service-marketing-automation": {
    recommended: "CRM interface, WhatsApp automation flow, or workflow/automation diagram.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "marketing automation / CRM / WhatsApp automation",
  },
  portfolioProject: {
    recommended: "Real project visual — website, campaign, social creative, branding, video still or advertising asset.",
    aspectRatio: "4:3",
    priority: "high",
    seoTopic: "client work / case study / project-specific — set per project",
  },
  testimonialPhoto: {
    recommended: "Real client portrait, supplied by the client.",
    aspectRatio: "1:1",
    priority: "low",
    seoTopic: "n/a — not used for SEO targeting",
  },
  clientLogo: {
    recommended: "Real client logo, SVG preferred, supplied by the client with permission to display.",
    aspectRatio: "n/a",
    priority: "low",
    seoTopic: "n/a — not used for SEO targeting",
  },
  teamPhoto: {
    recommended: "Real team member photograph.",
    aspectRatio: "4:5",
    priority: "low",
    seoTopic: "AMREN Digital team / Dubai",
  },
  aboutHero: {
    recommended: "AMREN team, founder, creative workspace, or Dubai business environment.",
    aspectRatio: "16:9",
    priority: "high",
    seoTopic: "AMREN Digital / digital marketing agency Dubai",
  },
  aboutStory: {
    recommended: "Strategy meeting, creative work session, or campaign planning photograph.",
    aspectRatio: "4:5",
    priority: "medium",
    seoTopic: "AMREN Digital approach / digital growth system",
  },
  aboutVentures: {
    recommended: "AMREN Ventures branding or an ecosystem graphic — no invented business detail.",
    aspectRatio: "4:5",
    priority: "low",
    seoTopic: "AMREN Ventures / parent company",
  },
  contactVisual: {
    recommended: "Dubai skyline, UAE business environment, or premium AMREN-branded workspace visual.",
    aspectRatio: "4/5",
    priority: "medium",
    seoTopic: "digital marketing agency Dubai / UAE",
  },
  blogFeatured: {
    recommended: "Editorial photography or a topic-specific visual relevant to the article.",
    aspectRatio: "16:9",
    priority: "medium",
    seoTopic: "set per article",
  },
};
