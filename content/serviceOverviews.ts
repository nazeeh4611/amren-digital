import type { ServiceFaq } from "./services";

export type OverviewBlock = { heading: string; paragraphs: string[] };

export type ServiceOverview = {
  /** Long-form body rendered under the hero — the main ranking copy for the page. */
  blocks: OverviewBlock[];
  /** Appended to the service's own FAQs (page + FAQ schema). */
  faqs: ServiceFaq[];
};

/**
 * Written around the queries each page already earns impressions for in
 * Search Console, so the page answers what people are actually searching.
 */
export const serviceOverviews: Record<string, ServiceOverview> = {
  "paid-advertising": {
    blocks: [
      {
        heading: "A paid advertising agency in Dubai that runs search and social as one system",
        paragraphs: [
          "Most UAE businesses that come to AMREN have tried paid ads before — usually a Google Ads account set up once and left running, or boosted Instagram posts with no clear goal. The spend goes out, a few enquiries come in, and nobody can say which campaign produced them. Paid advertising only works when every campaign is tied to a measurable action and someone is improving it every week.",
          "As a paid media agency, AMREN plans Google Ads and Meta Ads together. Google Search captures people already looking for your service in Dubai and across the UAE. Facebook and Instagram reach people who fit your customer profile before they start searching. Retargeting connects the two, so someone who clicked a search ad and left can see your offer again on social.",
        ],
      },
      {
        heading: "Google Ads management in Dubai",
        paragraphs: [
          "We build Google Ads accounts around search intent, not broad keyword lists: tightly grouped ad groups, ad copy written for each group, location targeting set to the areas you actually serve, and negative keywords that stop your budget going to irrelevant searches. Search, Performance Max and display campaigns are used where they suit the goal — not by default.",
          "Conversion tracking is connected before launch, so bids are optimized towards calls, form submissions and WhatsApp clicks rather than raw traffic.",
        ],
      },
      {
        heading: "Meta Ads and paid social",
        paragraphs: [
          "For Facebook and Instagram advertising, creative does most of the work. We produce platform-native ad creative — vertical video for Reels and Stories, carousels and statics for feed — and test variations against defined audiences so the budget moves towards what performs.",
          "Lead-generation campaigns can send enquiries straight into WhatsApp or your CRM, so the speed of follow-up doesn't undo the cost of acquiring the lead.",
        ],
      },
      {
        heading: "What Google Ads and Meta Ads cost in Dubai",
        paragraphs: [
          "Ad spend is paid directly to Google or Meta and is separate from AMREN's management fee. What a click or lead costs depends on your industry, how competitive the keywords are, the areas you target and how strong your landing page is — clinics, real estate and legal services usually cost more per click than restaurants or retail. We recommend a realistic starting budget after reviewing your market, then scale what's proven to work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you manage Google Ads for businesses outside Dubai?",
        a: "Yes. Campaigns can target any emirate or the whole UAE — Dubai, Abu Dhabi, Sharjah, Ajman and beyond — depending on where your customers are.",
      },
      {
        q: "Will I have access to my ad accounts?",
        a: "Yes. Ad accounts are set up under your business, so you keep ownership of the accounts, data and history.",
      },
    ],
  },

  seo: {
    blocks: [
      {
        heading: "Search engine optimization services for UAE businesses",
        paragraphs: [
          "SEO is how your business gets found on Google without paying for every click. For most service businesses in Dubai, that means two kinds of search: people searching for a service in general (\"web design agency Dubai\"), and people searching nearby (\"dentist near me\"), where results come from Google Maps and the Google Business Profile.",
          "AMREN covers both. Technical SEO makes sure Google can crawl and index the site properly. On-page SEO matches each page's titles, headings and content to what people actually search. Local SEO builds the profile, reviews and location signals that decide who shows up in the map results.",
        ],
      },
      {
        heading: "Local SEO and Google Business Profile optimization in Dubai",
        paragraphs: [
          "For clinics, salons, restaurants and anyone with a location or service area, the Google Business Profile is often the first thing a customer sees. We set up or audit the profile, choose primary and secondary categories, write the description, add services and photos, and set up a steady way to collect reviews.",
          "We also keep your business name, address and phone number consistent across directories, and build location pages where you serve more than one area — Dubai, Sharjah, Ajman or across the UAE.",
        ],
      },
      {
        heading: "Technical and on-page SEO",
        paragraphs: [
          "A large share of the SEO problems we find are technical: pages Google crawls but doesn't index, duplicate pages competing with each other, slow mobile load times, broken redirects and missing structured data. We fix these first, because content can't rank if the foundation is broken.",
          "We then write or rework page copy around the searches that bring customers, link related pages together, and track progress in Google Search Console every month.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you offer a free SEO audit?",
        a: "Yes. AMREN's free digital audit covers your website's search visibility, technical health and Google Business Profile, with a clear list of what to fix first.",
      },
      {
        q: "Do you work with businesses outside Dubai?",
        a: "Yes — AMREN works with businesses across the UAE, including Sharjah and Ajman, and with businesses targeting several emirates at once.",
      },
    ],
  },

  "social-media-marketing": {
    blocks: [
      {
        heading: "Social media marketing services in Dubai",
        paragraphs: [
          "Most people check a brand's Instagram before they enquire. An inactive or inconsistent profile quietly loses customers that your ads and SEO worked to bring in. AMREN's social media management keeps your profiles active, on-brand and planned around what your business is trying to sell this month.",
          "Every month starts with a content plan built on a few clear content pillars — offers, proof, education and behind-the-scenes — so posts work towards a goal instead of filling a calendar.",
        ],
      },
      {
        heading: "Content, management and paid social together",
        paragraphs: [
          "We design, write, schedule and publish the content, and manage comments and messages within an agreed scope. Because AMREN also runs Meta Ads, your best organic posts can be turned into paid campaigns, and ad creative stays consistent with your feed.",
          "Monthly reviews look at reach, engagement, profile visits and enquiries, so you can see which content actually brings in business.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you create the content or do we need to supply it?",
        a: "AMREN designs the graphics and writes the captions. Photo and video can be produced by our content team, or we can work with footage you already have.",
      },
    ],
  },

  "web-design-development": {
    blocks: [
      {
        heading: "A web design and development agency built around enquiries",
        paragraphs: [
          "A website should do one job well: turn visitors into enquiries. That means fast loading on mobile, a clear explanation of what you do within the first screen, proof that you're trustworthy, and an easy way to call, WhatsApp or fill in a form from every page.",
          "AMREN designs and develops websites for businesses in Dubai and across the UAE with that job in mind — from a focused five-page business site to e-commerce and custom web applications.",
        ],
      },
      {
        heading: "SEO-friendly from the first line of code",
        paragraphs: [
          "Every site is built with clean page structure, unique titles and descriptions, structured data, an XML sitemap and fast Core Web Vitals, and is connected to Google Analytics and Search Console at launch. Redesigns keep your existing rankings by redirecting old URLs properly instead of letting them break.",
        ],
      },
      {
        heading: "Website redesign in Dubai",
        paragraphs: [
          "If your current website looks dated, loads slowly or brings in few enquiries, a redesign is often faster and cheaper than paying more for ads. We review what's working on the current site, keep the pages that already rank, and rebuild the rest around a clearer structure and stronger calls to action.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "Timelines depend on the number of pages, content readiness and features. A standard business website is usually faster than e-commerce or custom builds; we confirm a timeline in your proposal.",
      },
      {
        q: "Do you build Arabic or bilingual websites?",
        a: "Yes. Bilingual English and Arabic websites, including right-to-left layouts, can be included in the scope.",
      },
    ],
  },

  "content-production": {
    blocks: [
      {
        heading: "Video production and content creation for brands in Dubai",
        paragraphs: [
          "Ads, social media and websites all depend on good creative. AMREN is a content production agency that plans, shoots and edits brand video, Reels, product photography and ad creative in-house, so everything is made for the platform it will run on.",
          "Short-form vertical video is built for Instagram Reels, TikTok and Stories, with captions and a strong opening for viewers watching without sound. Brand films, corporate videos and promotional videos are made for websites, YouTube and presentations.",
        ],
      },
      {
        heading: "Social content creation built for performance",
        paragraphs: [
          "Because AMREN also runs your paid campaigns and social accounts, content is planned around what it needs to achieve — stopping the scroll, explaining an offer, or building trust — rather than just looking good. Shoots are planned to produce a batch of assets at once, which keeps cost per asset down and output consistent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you produce corporate and brand videos as well as Reels?",
        a: "Yes. AMREN produces both short-form social video and longer brand, corporate and promotional videos, scoped to your brief.",
      },
    ],
  },

  "marketing-automation": {
    blocks: [
      {
        heading: "Marketing automation for UAE businesses",
        paragraphs: [
          "Most businesses don't lose leads because of bad ads; they lose them because nobody replied fast enough. Marketing automation makes sure every enquiry from your website, ads or WhatsApp is captured in one place, answered quickly and followed up until it's resolved.",
          "AMREN sets up the workflows: instant replies, lead assignment to the right team member, reminders for follow-up, and pipeline stages that show where each lead stands.",
        ],
      },
      {
        heading: "WhatsApp CRM and automation in Dubai",
        paragraphs: [
          "In the UAE, most customer conversations happen on WhatsApp. We connect the WhatsApp Business API to your CRM so messages, contact details and lead source are recorded automatically, with automated greetings, quick replies and follow-up sequences built within WhatsApp's policies.",
          "Integrations connect your website forms, Meta lead ads and Google Ads conversions, so you can see which campaigns bring in leads that actually convert.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which CRM do you work with?",
        a: "AMREN works with common CRMs and can recommend one that fits your team size and budget, or integrate with the system you already use.",
      },
    ],
  },
};
