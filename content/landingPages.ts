export type LandingPain = { title: string; description: string };
export type LandingObjection = { q: string; a: string };

export type LandingPage = {
  slug: string; // matches Service.slug in content/services.ts
  heroKicker: string;
  heroHeadline: string;
  heroSubheadline: string;
  painKicker: string;
  painHeadline: string;
  painPoints: LandingPain[];
  solutionKicker: string;
  solutionHeadline: string;
  solutionStatement: string;
  trustBullets: string[];
  objections: LandingObjection[];
  leadMagnetLabel: string;
  leadMagnetDescription: string;
  formGoalOptions: string[];
  finalCtaHeadline: string;
  finalCtaBody: string;
};

const funnelSteps = ["Traffic", "Landing Page", "Tracking", "Lead", "WhatsApp / CRM", "Follow-up", "Customer"];

export const landingFunnel = funnelSteps;

export const landingPages: LandingPage[] = [
  {
    slug: "google-ads",
    heroKicker: "Google Ads Management / Dubai & UAE",
    heroHeadline: "Turn Google Searches Into Qualified Customers.",
    heroSubheadline:
      "Performance-focused Google Ads campaigns for UAE businesses that want more relevant traffic, clearer conversion tracking and an obvious path from click to customer.",
    painKicker: "Sound familiar?",
    painHeadline: "Getting clicks but not enough customers?",
    painPoints: [
      { title: "Clicks without enquiries", description: "Ad spend is generating traffic, but the phone isn't ringing and the form isn't filling up." },
      { title: "Rising cost per lead", description: "Cost per click keeps climbing while the quality of who's actually enquiring stays flat." },
      { title: "Unclear tracking", description: "It's hard to say which campaign, keyword or ad is actually producing a real enquiry." },
      { title: "Competitors outbidding you", description: "Competitors show up first for the searches that matter most to your business." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "We connect the entire growth system — not just the ad account.",
    solutionStatement:
      "AMREN doesn't stop at campaign setup. We plan Google Ads around real search intent, connect it to a landing page built to convert, wire up conversion tracking from day one, and route every enquiry into WhatsApp or your CRM so it gets followed up — not lost.",
    trustBullets: [
      "UAE-focused campaign strategy, built around how Dubai's market actually searches",
      "Tracking-first setup — conversion tracking connected before campaigns go live",
      "Full transparency on spend, placements and performance",
      "Campaigns structured around search intent, not just keyword volume",
      "Part of a full-funnel system — ads, landing pages, tracking and follow-up working together",
    ],
    objections: [
      { q: "Do I need a large advertising budget to start?", a: "Budget should match your industry, competition and goals — not a fixed minimum. We'll recommend a realistic starting point after reviewing your business, and ad spend is always paid directly to Google, separate from AMREN's management fee." },
      { q: "Can you work with my existing website?", a: "Yes, where it's technically and strategically suitable. If your current site isn't built to convert paid traffic, we can also build a dedicated landing page for the campaign instead of rebuilding the whole site." },
      { q: "Do you only manage the ad account, or more?", a: "More. AMREN can support the wider funnel — landing pages, conversion tracking, WhatsApp and CRM follow-up — so the ad account isn't working in isolation." },
      { q: "How quickly can a campaign launch?", a: "Once we understand your business, offer and goals, campaigns are typically built and launched within days — timelines depend on account access, creative approval and tracking setup." },
      { q: "Will I be able to see where leads come from?", a: "Yes. Conversion tracking is connected from day one so you can see which campaigns are actually generating enquiries, not just clicks." },
    ],
    leadMagnetLabel: "Free Google Ads Audit",
    leadMagnetDescription:
      "Tell us about your business and we'll review what's publicly visible about your current Google Ads activity, landing pages and tracking setup — and share what we find.",
    formGoalOptions: ["More leads", "Lower cost per lead", "Better tracking / reporting", "Launching Google Ads for the first time", "Not sure yet"],
    finalCtaHeadline: "Ready to turn more searches into customers?",
    finalCtaBody: "Let's identify what's stopping your Google Ads from converting and build a clearer path from click to customer.",
  },
  {
    slug: "meta-ads",
    heroKicker: "Meta Ads / Facebook & Instagram",
    heroHeadline: "Stop Paying for Attention. Start Generating Demand.",
    heroSubheadline:
      "Meta campaigns designed around audience strategy, creative built for the placement, and measurable conversions — not boosted posts.",
    painKicker: "Sound familiar?",
    painHeadline: "Good engagement, but not enough enquiries?",
    painPoints: [
      { title: "Boosted posts, no strategy", description: "Ad spend goes into 'boost post' clicks and likes that don't turn into real enquiries." },
      { title: "Generic creative", description: "The same creative is reused across every placement instead of built for how each one is actually used." },
      { title: "Untargeted audiences", description: "Campaigns reach a broad audience instead of the specific profile that matches your best customer." },
      { title: "No retargeting", description: "People who engaged with your brand never see a follow-up ad, and the interest goes cold." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "Meta Ads as part of a connected system, not an isolated budget.",
    solutionStatement:
      "AMREN builds Meta campaigns around a defined audience and a specific business objective — traffic, leads or enquiries — with creative made for the placement, retargeting for people who didn't convert the first time, and a landing page or WhatsApp journey built to close the loop.",
    trustBullets: [
      "Audience research built around your actual customer profile, not the easiest one to target",
      "Creative produced specifically for feed, stories and reels — not repurposed from other channels",
      "Retargeting for people who engaged but didn't convert",
      "Clear monthly reporting on spend and performance",
      "Works alongside Google Ads as part of one connected strategy",
    ],
    objections: [
      { q: "Do I need a large following before running Meta Ads?", a: "No. Meta Ads reach people based on targeting criteria, not your existing follower count, so campaigns can perform well even for newer accounts." },
      { q: "What's the difference between this and boosting a post?", a: "Boosting optimizes for engagement on a single post. Meta Ads campaigns are built around a specific business objective — traffic, leads or enquiries — with audiences, creative and budget structured to support that goal." },
      { q: "Can Meta Ads work alongside Google Ads?", a: "Yes — the two platforms serve different intent. Google captures people already searching; Meta reaches people who match your audience profile before they've started searching. AMREN typically runs both as part of one connected strategy." },
      { q: "Do you also produce the ad creative?", a: "Yes, creative production is part of the campaign — built for the specific placement rather than repurposed static images." },
      { q: "How is lead quality controlled?", a: "Through audience definition, creative targeting and, where relevant, qualifying questions in the lead form itself — the goal is enquiries that match your actual customer profile." },
    ],
    leadMagnetLabel: "Free Meta Ads Audit",
    leadMagnetDescription:
      "Tell us about your business and we'll review your visible Facebook and Instagram ad activity, creative approach and audience targeting — and share what we find.",
    formGoalOptions: ["More leads", "Better-quality followers/engagement", "Lower cost per lead", "Launching Meta Ads for the first time", "Not sure yet"],
    finalCtaHeadline: "Ready to turn attention into real demand?",
    finalCtaBody: "Let's build Meta campaigns around the audience that actually looks like your customer.",
  },
  {
    slug: "seo",
    heroKicker: "SEO / Organic Search / UAE",
    heroHeadline: "Get Found When Your Customers Are Searching.",
    heroSubheadline:
      "Build sustainable search visibility with an SEO strategy designed around relevant traffic, commercial intent and measurable growth — not just rankings for their own sake.",
    painKicker: "Sound familiar?",
    painHeadline: "Invisible on the searches that actually matter?",
    painPoints: [
      { title: "Buried past page one", description: "Your business doesn't show up for the exact searches your customers are already making." },
      { title: "Fully dependent on ads", description: "Every enquiry costs a click — visibility disappears the moment the ad budget pauses." },
      { title: "Technical issues holding you back", description: "Site speed, indexing or structure problems are quietly capping how visible you can be." },
      { title: "Content that doesn't match intent", description: "Pages exist, but they're not built around what people are actually typing into Google." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "SEO built on a technically sound foundation, not just keywords.",
    solutionStatement:
      "AMREN builds organic visibility through technical health, on-page structure and content strategy aligned to how your customers actually search — so visibility compounds over time instead of resetting every month the ad budget pauses.",
    trustBullets: [
      "Technical and on-page SEO addressed together, not in isolation",
      "Keyword and intent strategy aligned to genuine search demand",
      "Google Search Console setup and monthly visibility reporting",
      "Builds a foundation that other channels — ads, social — also benefit from",
      "Reduces long-term dependence on paid advertising alone",
    ],
    objections: [
      { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. Rankings, traffic and enquiries depend on competition, search demand, website authority and content, and can't be guaranteed on a fixed timeline." },
      { q: "Is SEO better than paid advertising?", a: "They serve different purposes. Paid advertising creates immediate visibility; SEO builds visibility that compounds over time. AMREN typically recommends both working together." },
      { q: "Do you work on technical SEO as well as content?", a: "Yes — sustainable SEO requires both a technically sound website and content aligned to real search intent. We address the technical foundation alongside on-page strategy." },
      { q: "Can you improve rankings for an existing website?", a: "Yes. Most SEO engagements start with a technical and content audit of the existing site before building the ongoing strategy." },
      { q: "Do you guarantee first-page rankings?", a: "No. No agency can honestly guarantee a specific ranking — search results depend on factors outside anyone's direct control. We focus on measurable, ongoing improvement instead." },
    ],
    leadMagnetLabel: "Free SEO Opportunity Audit",
    leadMagnetDescription:
      "Tell us about your business and we'll review your organic visibility, technical health signals and on-page structure — and share what we find.",
    formGoalOptions: ["More organic traffic", "Better rankings for specific searches", "Fix technical/site issues", "Reduce reliance on paid ads", "Not sure yet"],
    finalCtaHeadline: "Ready to be found before someone finds a competitor instead?",
    finalCtaBody: "Let's identify where your search visibility is leaking and build a strategy to close the gap.",
  },
  {
    slug: "local-seo",
    heroKicker: "Local SEO / Google Business Profile / Dubai",
    heroHeadline: "Win the Search That Happens Right Before Someone Walks In.",
    heroSubheadline:
      "Google Business Profile and local search optimization for UAE businesses with a physical location or service area — built for the moment closest to a decision.",
    painKicker: "Sound familiar?",
    painHeadline: "Invisible in the map results that matter most?",
    painPoints: [
      { title: "Missing from the map pack", description: "Nearby customers searching 'near me' find competitors before they find you." },
      { title: "Incomplete profile", description: "Your Google Business Profile is unclaimed, outdated or missing key information that builds trust." },
      { title: "Inconsistent business info", description: "Your address, phone number or hours don't match across your website and profile — and Google notices." },
      { title: "No review or visibility strategy", description: "There's no ongoing plan for staying visible as the local search landscape shifts." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "Local visibility managed as an ongoing system, not a one-time setup.",
    solutionStatement:
      "AMREN sets up or audits your Google Business Profile, aligns local search signals across your website and profile, and manages it on an ongoing basis — so your business shows up where, and when, a nearby decision is being made.",
    trustBullets: [
      "Google Business Profile setup, category configuration and ongoing management",
      "Location-based keyword targeting aligned to how nearby customers actually search",
      "Support for businesses with one or multiple locations",
      "Consistency checks across your website and profile information",
      "Complements broader SEO and paid campaigns rather than working in isolation",
    ],
    objections: [
      { q: "Do I need a physical location for Local SEO?", a: "A physical or service-area location strengthens local SEO, but service-area businesses without a public storefront can also benefit, subject to Google's own eligibility requirements." },
      { q: "Can you manage more than one location?", a: "Yes — AMREN supports multiple Google Business Profiles. Scope and pricing for additional locations are confirmed based on your specific requirements." },
      { q: "Is Google Business Profile verification guaranteed?", a: "Verification is subject to Google's own policies and requirements, which are outside AMREN's control. We manage the setup and optimization within those requirements." },
      { q: "How is this different from regular SEO?", a: "Local SEO focuses specifically on map-pack visibility and location-based searches, while broader SEO covers organic rankings site-wide. The two work well together." },
      { q: "Can you help if my profile was already set up incorrectly?", a: "Yes — auditing and correcting an existing profile (category, information, consistency) is a common starting point." },
    ],
    leadMagnetLabel: "Free Local SEO Review",
    leadMagnetDescription:
      "Tell us about your business and we'll review your Google Business Profile, local visibility and information consistency — and share what we find.",
    formGoalOptions: ["Show up in local map results", "Set up / fix Google Business Profile", "Manage multiple locations", "Not sure yet"],
    finalCtaHeadline: "Ready to win the search right before someone walks in?",
    finalCtaBody: "Let's get your Google Business Profile working as hard as the rest of your marketing.",
  },
  {
    slug: "social-media-marketing",
    heroKicker: "Social Media Marketing / Instagram & Facebook",
    heroHeadline: "Build a Social Presence Worth Following — and Trusting.",
    heroSubheadline:
      "Content strategy, creative production and day-to-day management that keep your brand present, consistent and worth following on Instagram and Facebook.",
    painKicker: "Sound familiar?",
    painHeadline: "Posting, but it isn't building momentum?",
    painPoints: [
      { title: "Inconsistent posting", description: "Content goes out in bursts, then stops for weeks — momentum never builds." },
      { title: "No clear content direction", description: "Posts don't connect to a strategy, so it's unclear what's actually working." },
      { title: "Feed doesn't match the brand", description: "The page doesn't reflect the quality of the actual business behind it." },
      { title: "Social and ads working in isolation", description: "Organic content and paid campaigns aren't reinforcing each other." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "Social media as part of a connected brand system.",
    solutionStatement:
      "AMREN handles content strategy, creative production and day-to-day management so your brand shows up with intention — and so organic content actively supports paid campaigns instead of running in isolation.",
    trustBullets: [
      "Consistent brand presence across Instagram and Facebook",
      "Creative built for how people actually use each platform",
      "Content that supports paid campaigns rather than working in isolation",
      "Clear, agreed monthly content and creative output",
      "Facebook & Instagram Business setup and optimization included",
    ],
    objections: [
      { q: "Which platforms do you manage?", a: "AMREN primarily focuses on Instagram and Facebook, as these platforms serve most UAE businesses well. Other platforms can be evaluated based on your industry and audience." },
      { q: "Do you also run paid social advertising?", a: "Yes — social media management and Meta Ads are complementary. Many clients combine organic content with paid campaigns as part of one connected strategy." },
      { q: "How many posts are included per month?", a: "Content volume is defined in your agreed scope, confirmed as part of your proposal rather than a fixed figure here." },
      { q: "Do you handle community management too?", a: "Day-to-day scheduling and management are included; the specific scope of community/comment management is confirmed in your proposal." },
      { q: "Can you work with our existing brand guidelines?", a: "Yes. If brand guidelines exist, we design within them; if not, this can be scoped separately." },
    ],
    leadMagnetLabel: "Free Social Media Review",
    leadMagnetDescription:
      "Tell us about your business and we'll review your current Instagram and Facebook presence — content, consistency and brand fit — and share what we find.",
    formGoalOptions: ["More consistent content", "Better-looking feed / creative", "Grow following & engagement", "Connect social with paid ads", "Not sure yet"],
    finalCtaHeadline: "Ready for a social presence that actually builds trust?",
    finalCtaBody: "Let's build a content system that shows up consistently — and supports the rest of your marketing.",
  },
  {
    slug: "web-design-development",
    heroKicker: "Website Design & Development / Dubai",
    heroHeadline: "Your Website Should Generate Business — Not Just Look Good.",
    heroSubheadline:
      "High-performance websites designed around user experience, conversion and measurable business outcomes for UAE businesses.",
    painKicker: "Sound familiar?",
    painHeadline: "Traffic arrives, but visitors don't convert?",
    painPoints: [
      { title: "Slow to load", description: "Visitors leave before the page even finishes loading, especially on mobile." },
      { title: "Unclear path to enquire", description: "It takes too many clicks to find a phone number, WhatsApp link or contact form." },
      { title: "Outdated design", description: "The site doesn't reflect the quality or credibility of the business behind it." },
      { title: "Not built for campaigns", description: "Every channel — ads, social, search — sends traffic to a site that wasn't built to convert it." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "A website built around one job: turning visitors into enquiries.",
    solutionStatement:
      "AMREN builds responsive, SEO-friendly websites with WhatsApp and enquiry-form integration from day one, analytics and Search Console connected at launch, and — where needed — dedicated landing pages for individual campaigns so paid traffic isn't sent to a generic page.",
    trustBullets: [
      "Responsive, mobile-friendly, modern interface as standard",
      "Lead-focused, SEO-friendly structure from the first page",
      "WhatsApp and enquiry-form integration built in",
      "Analytics and Search Console connected from launch",
      "Landing pages for individual campaigns, where required",
    ],
    objections: [
      { q: "What platform do you build on?", a: "The right platform — WordPress, Shopify, WooCommerce, custom development or another suitable option — is selected based on your requirements and agreed scope." },
      { q: "Is hosting and a domain included?", a: "A standard domain may be provided free for the first year, subject to availability; renewals are charged separately. Hosting is only included where specifically stated in your agreement." },
      { q: "Can you redesign an existing website?", a: "Yes. Redesigns, new features and e-commerce builds beyond a standard scope are quoted separately based on requirements." },
      { q: "How long does a website take to build?", a: "Timelines depend on scope — number of pages, custom features and content readiness. This is confirmed once requirements are understood." },
      { q: "Will the site be ready for paid traffic (Google/Meta Ads)?", a: "Yes — analytics, conversion tracking and enquiry capture are considered part of the build, not an afterthought." },
    ],
    leadMagnetLabel: "Free Website Conversion Audit",
    leadMagnetDescription:
      "Tell us about your business and we'll review your current website's speed, clarity, mobile experience and how easy it actually is to enquire — and share what we find.",
    formGoalOptions: ["New website", "Redesign existing website", "Landing page for a campaign", "E-commerce", "Not sure yet"],
    finalCtaHeadline: "Ready for a website that does more than look good?",
    finalCtaBody: "Let's find out what's stopping your current site from converting — and build the version that does.",
  },
  {
    slug: "content-creation",
    heroKicker: "Content & Creative Design / Dubai",
    heroHeadline: "Make Your Brand Worth Stopping For.",
    heroSubheadline:
      "Creative content, graphic design and advertising creatives designed to perform across social, search and paid campaigns — not just look good in isolation.",
    painKicker: "Sound familiar?",
    painHeadline: "Campaigns underperforming because the creative isn't working?",
    painPoints: [
      { title: "Creative that blends in", description: "Ads and posts don't stop the scroll — they look like everything else in the feed." },
      { title: "Inconsistent visual identity", description: "Ads, social and web content don't feel like they belong to the same brand." },
      { title: "Slow turnaround", description: "New creative takes too long to produce, slowing down campaign testing and launches." },
      { title: "Design without a performance goal", description: "Creative is made to look nice, without being built around what it's actually meant to achieve." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "Creative built for the platform it's going to run on.",
    solutionStatement:
      "AMREN produces graphic design, advertising creative and campaign visuals built specifically for the platform and placement they're going to run on — supporting ads, social and web as one consistent visual system instead of disconnected assets.",
    trustBullets: [
      "Creative built specifically for each platform and placement",
      "Consistent visual identity across ads, social and web",
      "Faster campaign turnaround with a dedicated creative process",
      "Design that supports performance, not just aesthetics",
      "Works directly alongside AMREN's ads and social management",
    ],
    objections: [
      { q: "Do you design ad creative as well as social content?", a: "Yes — advertising creatives and organic social content are both part of AMREN's content and creative capability, produced with the platform and objective in mind." },
      { q: "Can you work from our existing brand guidelines?", a: "Yes. If brand guidelines exist, we design within them. If not, we can also support logo design and brand identity as a separate scope." },
      { q: "Do you handle photography as well as design?", a: "Product photography is available where scoped — this is confirmed as part of your proposal." },
      { q: "How fast is turnaround on new creative?", a: "Turnaround depends on scope and revision rounds; a dedicated creative process is used to keep campaign testing moving without long delays." },
      { q: "Can you produce creative for a campaign we're already running?", a: "Yes — creative can be produced to slot into an existing Google Ads, Meta Ads or social campaign." },
    ],
    leadMagnetLabel: "Free Creative Review",
    leadMagnetDescription:
      "Tell us about your business and we'll review your current ad and social creative — consistency, platform fit and performance potential — and share what we find.",
    formGoalOptions: ["Ad creative for campaigns", "Social content design", "Brand consistency", "Faster creative turnaround", "Not sure yet"],
    finalCtaHeadline: "Ready for creative that actually earns attention?",
    finalCtaBody: "Let's build a creative system that gives every campaign, page and profile something worth stopping for.",
  },
  {
    slug: "video-production",
    heroKicker: "Video Production / Reels & Promotional Video",
    heroHeadline: "Give Your Brand Something Worth Watching.",
    heroSubheadline:
      "Reels, short-form video and promotional video production for UAE brands, from concept to delivery — built for how each platform is actually watched.",
    painKicker: "Sound familiar?",
    painHeadline: "Static content isn't cutting through anymore?",
    painPoints: [
      { title: "Low reach on static posts", description: "Photos and graphics are being consistently outperformed by video on every platform." },
      { title: "No in-house production capability", description: "There's no clear process for planning, shooting or editing video content." },
      { title: "Video that doesn't retain attention", description: "Clips exist, but viewers drop off in the first few seconds." },
      { title: "Wrong formats for the platform", description: "Content isn't cut and formatted correctly for reels, stories or paid placements." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "Video planned around a purpose, not just a shoot day.",
    solutionStatement:
      "AMREN plans, shoots and edits reels, promotional video and corporate content with the message and format defined before a single frame is shot — then delivers it in the exact formats each platform, ad placement and channel requires.",
    trustBullets: [
      "Content built for short-form platforms and paid placements",
      "Studio and on-location production capability",
      "Editing built around retention, not just aesthetics",
      "Content that feeds both organic and paid channels",
      "Platform-specific exports — vertical, horizontal and ad formats",
    ],
    objections: [
      { q: "Do you handle on-location filming?", a: "Yes. On-location and site-visit production is available and is scoped separately based on location, travel and production requirements." },
      { q: "What formats do you deliver?", a: "Videos are delivered in the aspect ratios and formats required for the intended platform — vertical for reels and stories, horizontal for web and YouTube, and any specific ad-placement formats needed." },
      { q: "Can this feed into our paid ad campaigns?", a: "Yes — video produced for organic content can often be adapted for Meta or YouTube ad placements as part of a connected strategy." },
      { q: "How long does a shoot take to plan and deliver?", a: "Timelines depend on concept complexity, location and edit scope; this is confirmed once the brief is understood." },
      { q: "Do you write the concept, or do we provide it?", a: "AMREN can lead concept development, or work from a brief you provide — either way, the message and format are agreed before production." },
    ],
    leadMagnetLabel: "Free Video Content Review",
    leadMagnetDescription:
      "Tell us about your business and we'll review your current video presence across your key platforms — and share what we find.",
    formGoalOptions: ["Reels / short-form video", "Promotional video", "Video for ad campaigns", "Corporate / business content", "Not sure yet"],
    finalCtaHeadline: "Ready to give your brand something worth stopping for?",
    finalCtaBody: "Let's plan video content built for how your audience actually watches.",
  },
  {
    slug: "marketing-automation",
    heroKicker: "Marketing Automation, CRM & WhatsApp / Dubai",
    heroHeadline: "Stop Losing Leads Between the Click and the Follow-Up.",
    heroSubheadline:
      "CRM, WhatsApp automation and workflow tooling built so every enquiry from every channel is captured, tracked and followed up — not lost in a busy inbox.",
    painKicker: "Sound familiar?",
    painHeadline: "Generating leads, but losing them after the fact?",
    painPoints: [
      { title: "Slow follow-up", description: "Leads sit unanswered for hours or days, and the enquiry goes cold — or to a competitor." },
      { title: "No single view of enquiries", description: "Leads come in through ads, WhatsApp, the website and calls, with no connected record of any of it." },
      { title: "Manual, repetitive work", description: "Team members manually copy leads between spreadsheets, inboxes and chats." },
      { title: "No visibility on what's working", description: "There's no clear picture of which channel is actually producing customers, not just enquiries." },
    ],
    solutionKicker: "How AMREN is different",
    solutionHeadline: "The connective layer between your marketing and your sales team.",
    solutionStatement:
      "AMREN builds the automation, CRM and integration layer that connects your ads, website and WhatsApp — using approved WhatsApp Business tooling — so every enquiry is captured, tracked and followed up automatically, with a single connected view across channels.",
    trustBullets: [
      "WhatsApp automation using approved WhatsApp Business tooling and APIs",
      "CRM setup and marketing automation, whether or not you already have a CRM",
      "A single, connected view of enquiries across channels",
      "Custom API integrations and workflow automation",
      "A foundation that scales as lead volume grows",
    ],
    objections: [
      { q: "Do we need an existing CRM for this to work?", a: "No — AMREN can help select and set up a CRM suited to your business, or integrate with a system you already use." },
      { q: "Is WhatsApp automation compliant with WhatsApp's own policies?", a: "Automation is implemented using approved WhatsApp Business tooling and APIs, within the platform's own terms and policies." },
      { q: "Can this connect to our Google Ads and Meta Ads leads?", a: "Yes — connecting ad-platform lead forms and website enquiries into one workflow is a core part of this service." },
      { q: "How long does setup take?", a: "Timelines depend on the number of channels, integrations and complexity of the workflow — confirmed once your current setup is understood." },
      { q: "Can dashboards be customized to what we actually want to see?", a: "Yes, custom dashboards are available where scoped as part of the automation build." },
    ],
    leadMagnetLabel: "Free Marketing Funnel Review",
    leadMagnetDescription:
      "Tell us about your business and we'll review how leads currently move from enquiry to follow-up across your channels — and share what we find.",
    formGoalOptions: ["Faster / automated lead follow-up", "WhatsApp automation", "CRM setup", "Connect ads, website & WhatsApp", "Not sure yet"],
    finalCtaHeadline: "Ready to stop losing leads after the click?",
    finalCtaBody: "Let's connect the system so every enquiry gets a fast, tracked follow-up.",
  },
];

export function getLandingPageBySlug(slug: string) {
  return landingPages.find((lp) => lp.slug === slug);
}
