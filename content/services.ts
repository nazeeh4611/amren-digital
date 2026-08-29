export type ServiceFaq = { q: string; a: string };
export type ProcessStep = { title: string; description: string };

export type Service = {
  slug: string;
  category: string;
  number: string;
  title: string;
  eyebrow: string;
  h1: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  process: ProcessStep[];
  deliverables: string[];
  faqs: ServiceFaq[];
  seoTopic: string;
  relatedSlugs: string[];
  aspectRatio: "4/5" | "16/9" | "1/1" | "3/4";
  assetLabel: string;
  recommendedAsset: string;
};

export type ServiceCategory = {
  key: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  serviceSlugs: string[];
  image: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    key: "performance",
    number: "01",
    title: "Performance",
    headline: "Ads that pay for themselves.",
    description:
      "Paid search and paid social campaigns built around intent, audience and measurable return — not vanity impressions.",
    serviceSlugs: ["google-ads", "meta-ads"],
    image: "/perfomance.webp",
  },
  {
    key: "social",
    number: "02",
    title: "Social",
    headline: "Content people actually stop scrolling for.",
    description:
      "Content strategy, creative campaigns and day-to-day management that keep a brand present, consistent and worth following.",
    serviceSlugs: ["social-media-marketing"],
    image: "/socialhero.webp",
  },
  {
    key: "search",
    number: "03",
    title: "Search",
    headline: "Show up first when it matters most.",
    description:
      "Technical, on-page and local SEO that builds organic visibility on Google — where most buying decisions now start.",
    serviceSlugs: ["seo", "local-seo"],
    image: "/seohero.webp",
  },
  {
    key: "digital-experiences",
    number: "04",
    title: "Digital Experiences",
    headline: "A website built to convert, not just impress.",
    description:
      "Conversion-focused websites and landing pages engineered to turn traffic from every channel into enquiries.",
    serviceSlugs: ["web-design-development"],
    image: "/webhero.webp",
  },
  {
    key: "content",
    number: "05",
    title: "Content",
    headline: "Photo and video worth stopping for.",
    description:
      "Photography, video and creative direction that give every campaign, page and profile something worth stopping for.",
    serviceSlugs: ["content-creation", "video-production"],
    image: "/contenthero.webp",
  },
  {
    key: "systems",
    number: "06",
    title: "Systems",
    headline: "Never lose a lead to bad follow-up again.",
    description:
      "CRM, WhatsApp automation and workflow tooling that make sure a lead is never followed up late, or not at all.",
    serviceSlugs: ["marketing-automation"],
    image: "/crmauto.webp",
  },
];

export const services: Service[] = [
  {
    slug: "google-ads",
    category: "performance",
    number: "01",
    title: "Google Ads",
    eyebrow: "Performance / Paid Search",
    h1: "Google Ads Management for UAE Businesses",
    headline: "Show up when someone is already looking for you.",
    metaTitle: "Google Ads Agency in Dubai | AMREN Digital",
    metaDescription:
      "Google Ads management for UAE businesses — search campaigns, keyword strategy, retargeting and ongoing optimization from AMREN Digital, Dubai.",
    intro:
      "Search is where intent lives. A well-built Google Ads account puts your business in front of people actively searching for what you sell, in the moment they're ready to act. AMREN plans, builds and manages campaigns around real search intent rather than broad keyword lists.",
    benefits: [
      "Reach people actively searching for your product or service, not just people who might be interested",
      "Full transparency on spend, placements and performance",
      "Campaigns structured around intent, not just keyword volume",
      "Retargeting to bring back visitors who didn't convert the first time",
    ],
    process: [
      { title: "Research", description: "Business, competitor and keyword-intent review to understand where demand actually exists." },
      { title: "Build", description: "Campaign structure, ad copy and audience targeting built around your specific offer." },
      { title: "Launch", description: "Campaigns go live with conversion tracking connected from day one." },
      { title: "Optimize", description: "Ongoing bid, budget and creative optimization based on real performance data." },
    ],
    deliverables: [
      "Campaign setup & search management",
      "Keyword research & intent targeting",
      "Ad copywriting",
      "Retargeting, where applicable",
      "Ongoing monitoring & optimization",
      "Monthly performance reporting",
    ],
    faqs: [
      {
        q: "How much should I budget for Google Ads?",
        a: "Ad spend is separate from AMREN's management fee and is paid directly to Google. The right budget depends on your industry, competition and goals — we'll recommend a realistic starting point after reviewing your business.",
      },
      {
        q: "How soon will I see results?",
        a: "Search campaigns can generate clicks and enquiries quickly, but meaningful optimization takes time as the account gathers data. We report on performance monthly so you can see the trend, not just a single snapshot.",
      },
      {
        q: "Do you guarantee a number of leads or a cost per lead?",
        a: "No. Advertising results depend on budget, competition, offer and landing page quality, so specific outcomes can't be guaranteed. We focus on continuous, measurable optimization instead.",
      },
    ],
    seoTopic: "Google Ads / PPC / paid search / Dubai",
    relatedSlugs: ["meta-ads", "seo", "web-design-development"],
    aspectRatio: "4/5",
    assetLabel: "Google Ads",
    recommendedAsset:
      "Real Google Ads campaign visual, search advertising interface, campaign dashboard screenshot, or branded paid-search creative.",
  },
  {
    slug: "meta-ads",
    category: "performance",
    number: "02",
    title: "Meta Ads",
    eyebrow: "Performance / Social Advertising",
    h1: "Meta Ads Management — Facebook & Instagram",
    headline: "Reach the audience that actually looks like your customer.",
    metaTitle: "Meta Ads Agency in Dubai | Facebook & Instagram Ads | AMREN Digital",
    metaDescription:
      "Facebook and Instagram advertising for UAE businesses — audience research, creative campaigns and performance-driven management from AMREN Digital.",
    intro:
      "Meta's targeting can put your brand in front of exactly the audience that matches your customer profile — but only if the campaign, creative and audience are built to work together. AMREN manages Meta Ads as part of a connected system, not an isolated boost-post budget.",
    benefits: [
      "Reach precisely defined audiences on Facebook and Instagram",
      "Creative built specifically for the placement, not repurposed from other channels",
      "Retargeting for people who engaged but didn't convert",
      "Clear monthly reporting on spend and performance",
    ],
    process: [
      { title: "Audience research", description: "Defining who your best customer actually is, not just who's easiest to target." },
      { title: "Creative & campaign build", description: "Ad creative, copy and campaign structure built around that audience." },
      { title: "Launch", description: "Campaigns go live across the right placements — feed, stories, reels." },
      { title: "Optimize", description: "Ongoing testing and optimization of audiences, creative and budget allocation." },
    ],
    deliverables: [
      "Campaign setup & management",
      "Audience research & targeting",
      "Retargeting, where applicable",
      "Ongoing monitoring & optimization",
      "Monthly performance reporting",
    ],
    faqs: [
      {
        q: "What's the difference between Meta Ads and boosting a post?",
        a: "Boosting a post optimizes for engagement on that single post. Meta Ads campaigns are built around a specific business objective — traffic, leads or enquiries — with audiences, creative and budget structured to support that goal.",
      },
      {
        q: "Do I need a large following before running Meta Ads?",
        a: "No. Meta Ads reach people based on targeting criteria, not your existing follower count, so campaigns can perform well even for newer accounts.",
      },
      {
        q: "Can Meta Ads work alongside Google Ads?",
        a: "Yes — the two platforms serve different intent. Google captures people already searching; Meta reaches people who match your audience profile before they've started searching. AMREN typically runs both as part of one connected strategy.",
      },
    ],
    seoTopic: "Meta Ads / Facebook Ads / Instagram advertising / Dubai",
    relatedSlugs: ["google-ads", "social-media-marketing", "content-creation"],
    aspectRatio: "4/5",
    assetLabel: "Meta Ads",
    recommendedAsset: "Real Instagram or Facebook advertising creative, campaign visual, or a phone mockup of a live ad placement.",
  },
  {
    slug: "seo",
    category: "search",
    number: "03",
    title: "SEO",
    eyebrow: "Search / Organic Visibility",
    h1: "SEO Services for UAE Businesses",
    headline: "Be found before they find someone else.",
    metaTitle: "SEO Agency in Dubai | Search Engine Optimization | AMREN Digital",
    metaDescription:
      "SEO services for UAE businesses — technical SEO, on-page optimization and keyword strategy built for sustainable organic growth, from AMREN Digital, Dubai.",
    intro:
      "SEO is the part of a digital system that keeps working after the ad budget is spent. AMREN builds organic visibility through technical health, on-page structure and content strategy aligned to how your customers actually search.",
    benefits: [
      "Reduces long-term dependence on paid advertising alone",
      "Builds visibility that compounds over time rather than resetting each month",
      "Improves the technical foundation your other channels rely on",
      "Aligns content and structure to genuine search intent",
    ],
    process: [
      { title: "Technical audit", description: "Reviewing site health, indexing, speed and structure for issues holding back visibility." },
      { title: "Keyword & intent strategy", description: "Identifying the searches that matter most to your business, not just the highest-volume terms." },
      { title: "On-page optimization", description: "Titles, meta descriptions, headings and internal linking aligned to strategy." },
      { title: "Reporting", description: "Monthly Search Console reporting to track visibility and indexing over time." },
    ],
    deliverables: [
      "Keyword research & SEO strategy",
      "On-page SEO, meta titles & descriptions",
      "Basic technical SEO & indexing",
      "Google Search Console setup & monthly reporting",
      "Internal linking strategy",
    ],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term strategy. Rankings, traffic and enquiries depend on competition, search demand, website authority, content and market conditions, and cannot be guaranteed on a fixed timeline.",
      },
      {
        q: "Is SEO better than paid advertising?",
        a: "They serve different purposes. Paid advertising creates immediate visibility; SEO builds visibility that compounds over time. AMREN typically recommends both working together as part of one system.",
      },
      {
        q: "Do you work on technical SEO as well as content?",
        a: "Yes — sustainable SEO requires both a technically sound website and content aligned to real search intent. We address the technical foundation alongside on-page strategy.",
      },
    ],
    seoTopic: "SEO / search visibility / Dubai / UAE",
    relatedSlugs: ["local-seo", "web-design-development", "google-ads"],
    aspectRatio: "4/5",
    assetLabel: "SEO",
    recommendedAsset: "Search results screenshot, ranking visualization, organic traffic chart, or a Search Console dashboard view.",
  },
  {
    slug: "local-seo",
    category: "search",
    number: "04",
    title: "Local SEO",
    eyebrow: "Search / Local Visibility",
    h1: "Local SEO & Google Business Profile Management",
    headline: "Win the search that happens right before someone walks in.",
    metaTitle: "Local SEO Dubai | Google Business Profile Management | AMREN Digital",
    metaDescription:
      "Local SEO and Google Business Profile optimization for UAE businesses with a physical location or service area, from AMREN Digital, Dubai.",
    intro:
      "For businesses with a physical location or a defined service area, local search is often the moment closest to a decision. AMREN optimizes Google Business Profiles and local search signals so your business shows up where — and when — it matters.",
    benefits: [
      "Improves visibility in Google's local map results",
      "Strengthens trust through a complete, accurate business profile",
      "Supports businesses with one or multiple locations",
      "Complements broader SEO and paid campaigns",
    ],
    process: [
      { title: "Profile setup", description: "Creating or auditing your Google Business Profile — category, description, contact details." },
      { title: "Local optimization", description: "Location-based keyword targeting and profile optimization." },
      { title: "Consistency check", description: "Aligning business information across your website and profile." },
      { title: "Ongoing management", description: "Monitoring visibility and updating the profile as the business evolves." },
    ],
    deliverables: [
      "Google Business Profile creation, setup & category configuration",
      "Business description & contact information",
      "Local search strategy & location-based keyword targeting",
      "Basic local visibility improvements",
      "Support for multiple locations, where applicable",
    ],
    faqs: [
      {
        q: "Do I need a physical location for Local SEO?",
        a: "A physical or service-area location strengthens local SEO, but service-area businesses without a public storefront can also benefit from an optimized Google Business Profile, subject to Google's eligibility requirements.",
      },
      {
        q: "Can you manage more than one location?",
        a: "Yes — AMREN supports multiple Google Business Profiles. Scope and pricing for additional locations are confirmed based on your specific requirements.",
      },
      {
        q: "Is Google Business Profile verification guaranteed?",
        a: "Verification is subject to Google's own policies and requirements, which are outside AMREN's control. We manage the setup and optimization within those requirements.",
      },
    ],
    seoTopic: "Local SEO / Google Business Profile / Dubai",
    relatedSlugs: ["seo", "google-ads", "social-media-marketing"],
    aspectRatio: "4/5",
    assetLabel: "Local SEO",
    recommendedAsset: "Google Business Profile screenshot, local map pack result, or a real storefront/location photograph.",
  },
  {
    slug: "social-media-marketing",
    category: "social",
    number: "05",
    title: "Social Media Marketing",
    eyebrow: "Social / Content & Management",
    h1: "Social Media Marketing & Management",
    headline: "Turn attention into desire.",
    metaTitle: "Social Media Marketing Agency in Dubai | AMREN Digital",
    metaDescription:
      "Social media management, content strategy and creative campaigns for UAE businesses on Instagram and Facebook, from AMREN Digital, Dubai.",
    intro:
      "A consistent, well-designed social presence builds the trust that makes advertising and search traffic convert. AMREN handles content strategy, creative production and day-to-day management so your brand shows up with intention, not just frequency.",
    benefits: [
      "Consistent brand presence across Instagram and Facebook",
      "Creative built for how people actually use each platform",
      "Content that supports paid campaigns rather than working in isolation",
      "Clear monthly content and creative output",
    ],
    process: [
      { title: "Strategy", description: "Content pillars and platform strategy aligned to your brand and audience." },
      { title: "Creative production", description: "Static creatives, carousels and short-form video produced to plan." },
      { title: "Scheduling & management", description: "Consistent publishing and community management." },
      { title: "Review", description: "Monthly review of what content is resonating, and why." },
    ],
    deliverables: [
      "Social media / content posts, per agreed monthly scope",
      "Professionally designed static & digital creatives",
      "Advertising & promotional creatives",
      "Platform-specific adaptations",
      "Facebook & Instagram Business setup and optimization",
    ],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "AMREN primarily focuses on Instagram and Facebook, as these platforms serve most UAE businesses well. Other platforms can be evaluated based on your industry and audience.",
      },
      {
        q: "Do you also run paid social advertising?",
        a: "Yes — social media management and Meta Ads are complementary. Many clients combine organic content with paid campaigns as part of one connected strategy.",
      },
      {
        q: "How many posts are included per month?",
        a: "Content volume is defined in your agreed scope. We'll confirm exact numbers as part of your proposal rather than a fixed figure here.",
      },
    ],
    seoTopic: "social media marketing / social media management / Dubai",
    relatedSlugs: ["content-creation", "video-production", "meta-ads"],
    aspectRatio: "3/4",
    assetLabel: "Social Media",
    recommendedAsset: "Instagram feed grid, content tile mockup, reel cover frame, or a phone mockup showing a real social profile.",
  },
  {
    slug: "web-design-development",
    category: "digital-experiences",
    number: "06",
    title: "Web Design & Development",
    eyebrow: "Digital Experiences",
    h1: "Website Design & Development in Dubai",
    headline: "Websites that do more than look good.",
    metaTitle: "Web Design & Development Agency in Dubai | AMREN Digital",
    metaDescription:
      "Conversion-focused website design and development for UAE businesses — responsive, SEO-friendly and built to turn visitors into enquiries. AMREN Digital, Dubai.",
    intro:
      "Every other channel in your digital system eventually sends someone to your website. If it doesn't load fast, explain clearly and make enquiring easy, the rest of the system is working against itself. AMREN builds websites around that single job.",
    benefits: [
      "Responsive, mobile-friendly, modern interface",
      "Lead-focused, SEO-friendly structure from the first page",
      "WhatsApp and enquiry-form integration built in",
      "Analytics and Search Console connected from launch",
    ],
    process: [
      { title: "Discovery", description: "Understanding your business, offer and the audience the site needs to convert." },
      { title: "Structure & content", description: "Sitemap, page structure and SEO-friendly content planning." },
      { title: "Design & build", description: "Responsive design and development across your core pages." },
      { title: "Launch & connect", description: "Deployment with analytics, Search Console and lead capture connected." },
    ],
    deliverables: [
      "Responsive, mobile-friendly, modern UI/UX",
      "Core business pages (Home, About, Services, Contact and more)",
      "Enquiry form & WhatsApp integration",
      "Analytics & Search Console setup",
      "Landing pages for campaigns, where required",
      "E-commerce and custom development, where scoped",
    ],
    faqs: [
      {
        q: "What platform do you build on?",
        a: "The right platform — WordPress, Shopify, WooCommerce, custom development or another suitable option — is selected based on your requirements and agreed scope.",
      },
      {
        q: "Is hosting and a domain included?",
        a: "A standard domain may be provided free for the first year, subject to availability; renewals are charged separately. Hosting is only included where specifically stated in your agreement.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes. Redesigns, new features and e-commerce builds beyond a standard scope are quoted separately based on requirements.",
      },
    ],
    seoTopic: "web design / website development / Dubai",
    relatedSlugs: ["seo", "marketing-automation", "content-creation"],
    aspectRatio: "16/9",
    assetLabel: "Websites",
    recommendedAsset: "Browser mockup of a real website, responsive multi-device screens, or an actual project screenshot.",
  },
  {
    slug: "content-creation",
    category: "content",
    number: "07",
    title: "Content Creation",
    eyebrow: "Content / Creative",
    h1: "Content Creation & Creative Design",
    headline: "Make your brand worth watching.",
    metaTitle: "Content Creation & Creative Design Agency in Dubai | AMREN Digital",
    metaDescription:
      "Creative content, graphic design and advertising creatives for UAE brands — designed to perform across social, search and paid campaigns. AMREN Digital, Dubai.",
    intro:
      "Every channel in your digital system depends on creative that actually stops someone mid-scroll. AMREN produces graphic design, advertising creative and campaign visuals built for the platform they're going to run on.",
    benefits: [
      "Creative built specifically for each platform and placement",
      "Consistent visual identity across ads, social and web",
      "Faster campaign turnaround with a dedicated creative process",
      "Design that supports performance, not just aesthetics",
    ],
    process: [
      { title: "Creative brief", description: "Defining the message, audience and platform for each asset." },
      { title: "Design", description: "Static creatives, carousels and campaign visuals produced to brief." },
      { title: "Review", description: "Feedback rounds to refine before assets go live." },
      { title: "Delivery", description: "Final assets delivered in the formats each platform requires." },
    ],
    deliverables: [
      "Advertising & promotional creatives",
      "Graphic design for social and campaigns",
      "Creative campaign concepts",
      "Company profiles, brochures & presentations, where scoped",
      "Product photography, where scoped",
    ],
    faqs: [
      {
        q: "Do you design ad creative as well as social content?",
        a: "Yes — advertising creatives and organic social content are both part of AMREN's content and creative capability, produced with the platform and objective in mind.",
      },
      {
        q: "Can you work from our existing brand guidelines?",
        a: "Yes. If brand guidelines exist, we design within them. If not, we can also support logo design and brand identity as a separate scope.",
      },
    ],
    seoTopic: "content creation / creative design / advertising creatives / Dubai",
    relatedSlugs: ["video-production", "social-media-marketing", "meta-ads"],
    aspectRatio: "1/1",
    assetLabel: "Content",
    recommendedAsset: "Real advertising creative, campaign design mockup, or a graphic design portfolio piece.",
  },
  {
    slug: "video-production",
    category: "content",
    number: "08",
    title: "Video Production",
    eyebrow: "Content / Video",
    h1: "Video Production for Brands & Campaigns",
    headline: "Give your brand something worth stopping for.",
    metaTitle: "Video Production Agency in Dubai | Reels & Promotional Video | AMREN Digital",
    metaDescription:
      "Reels, short-form video and promotional video production for UAE brands, from concept to delivery. AMREN Digital, Dubai.",
    intro:
      "Video consistently outperforms static content for attention and engagement — but only when it's produced with a clear purpose. AMREN plans, shoots and edits reels, promotional video and corporate content built for how each platform is actually watched.",
    benefits: [
      "Content built for short-form platforms and paid placements",
      "Studio and on-location production capability",
      "Editing built around retention, not just aesthetics",
      "Content that feeds both organic and paid channels",
    ],
    process: [
      { title: "Concept", description: "Defining the message and format before a single frame is shot." },
      { title: "Production", description: "Studio or on-location filming based on the brief." },
      { title: "Edit", description: "Editing, sound and motion graphics for the final cut." },
      { title: "Delivery", description: "Platform-specific exports for social, ads and web." },
    ],
    deliverables: [
      "Reels & short-form video",
      "Promotional videos",
      "Studio & outdoor video production",
      "Business & corporate content",
    ],
    faqs: [
      {
        q: "Do you handle on-location filming?",
        a: "Yes. On-location and site-visit production is available and is scoped separately based on location, travel and production requirements.",
      },
      {
        q: "What formats do you deliver?",
        a: "Videos are delivered in the aspect ratios and formats required for the intended platform — vertical for reels and stories, horizontal for web and YouTube, and any specific ad-placement formats needed.",
      },
    ],
    seoTopic: "video production / content creation / Dubai",
    relatedSlugs: ["content-creation", "social-media-marketing", "meta-ads"],
    aspectRatio: "3/4",
    assetLabel: "Video",
    recommendedAsset: "Production still, camera/behind-the-scenes photograph, or a real promotional video frame.",
  },
  {
    slug: "marketing-automation",
    category: "systems",
    number: "09",
    title: "Marketing Automation",
    eyebrow: "Systems / Automation",
    h1: "Marketing Automation, CRM & WhatsApp Integration",
    headline: "Connect the work behind the work.",
    metaTitle: "Marketing Automation & CRM Agency in Dubai | AMREN Digital",
    metaDescription:
      "CRM, WhatsApp automation and workflow tooling for UAE businesses — built so every lead is captured, tracked and followed up. AMREN Digital, Dubai.",
    intro:
      "Attracting attention and generating leads is wasted effort if a lead goes unanswered. AMREN builds the automation, CRM and integration layer that connects your ads, website and WhatsApp so every enquiry is captured and tracked.",
    benefits: [
      "Fewer leads lost to slow or missed follow-up",
      "A single, connected view of enquiries across channels",
      "Automation that removes repetitive manual work",
      "A foundation that scales as the business grows",
    ],
    process: [
      { title: "Audit", description: "Reviewing how leads currently move from channel to follow-up." },
      { title: "Design", description: "Mapping the CRM, automation and integration workflow needed to close the gaps." },
      { title: "Build", description: "Implementing WhatsApp automation, CRM setup and API integrations." },
      { title: "Refine", description: "Adjusting workflows as real usage reveals what needs improvement." },
    ],
    deliverables: [
      "WhatsApp automation",
      "CRM setup & marketing automation",
      "Workflow automation",
      "Custom API integrations",
      "Custom dashboards, where scoped",
    ],
    faqs: [
      {
        q: "Do we need an existing CRM for this to work?",
        a: "No — AMREN can help select and set up a CRM suited to your business, or integrate with a system you already use.",
      },
      {
        q: "Is WhatsApp automation compliant with WhatsApp's own policies?",
        a: "Automation is implemented using approved WhatsApp Business tooling and APIs, within the platform's own terms and policies.",
      },
    ],
    seoTopic: "marketing automation / CRM / WhatsApp automation / Dubai",
    relatedSlugs: ["web-design-development", "seo", "google-ads"],
    aspectRatio: "4/5",
    assetLabel: "Automation",
    recommendedAsset: "CRM interface screenshot, WhatsApp Business automation flow, or a workflow/automation diagram.",
  },
];

export const categoryMotif: Record<string, "search" | "social" | "chart" | "browser" | "play" | "nodes"> = {
  performance: "search",
  social: "social",
  search: "chart",
  "digital-experiences": "browser",
  content: "play",
  systems: "nodes",
};

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(categoryKey: string) {
  return services.filter((s) => s.category === categoryKey);
}
