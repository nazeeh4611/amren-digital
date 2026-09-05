export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author: string;
  excerpt: string;
  body: string[]; // paragraphs; rendered as real HTML, not images
  relatedSlugs: string[];
  seoTopic: string;
  /** Card thumbnail for the /insights listing — real photography, not the
   * AssetPlaceholder scaffold, since a generic mark/motif card doesn't
   * signal what each article is actually about at a glance. */
  image: string;
};

export const articleCategories = [
  "Digital Marketing",
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Websites",
  "Social Media",
  "Automation",
  "Business Growth",
] as const;

export const articles: Article[] = [
  {
    slug: "why-uae-businesses-need-a-connected-digital-system",
    title: "Why UAE Businesses Need a Connected Digital System, Not Just More Marketing",
    metaTitle: "Connected Digital Marketing Systems for UAE Businesses | AMREN Digital",
    metaDescription:
      "Why running ads, social media and a website as separate efforts limits growth — and what a connected digital system looks like for UAE businesses.",
    category: "Digital Marketing",
    publishedAt: "2026-05-04",
    author: "AMREN Digital Team",
    excerpt:
      "Most UAE businesses aren't short on marketing activity. They're short on marketing that works together. Here's what that gap actually looks like in practice.",
    body: [
      "It's rare to meet a UAE business with no digital marketing at all. Most have run ads at some point, most post on Instagram, and a growing number have a website. The gap isn't activity — it's connection.",
      "A common pattern looks like this: ads run on Google or Meta, pointed at a website that wasn't built to convert that specific traffic. Social media is managed separately, often with a different message than the ads. Leads come in through a contact form or a DM, but there's no consistent process for following up quickly. And no one is looking at the data from all of these channels together, so it's hard to tell what's actually working.",
      "Each piece, on its own, might be perfectly competent. The problem is that none of them are reinforcing each other. A visitor who clicks an ad, lands on a generic page, and then follows an Instagram account with a completely different tone isn't experiencing one brand — they're experiencing three unrelated efforts that happen to share a logo.",
      "A connected system starts from the other direction: what does someone need to see, in order, to go from noticing the business to enquiring? That usually means the ad, the landing page and the follow-up message are planned together, tracking is set up so you can see which channel actually produced the enquiry, and social content supports the same positioning the ads are using — rather than each function operating in its own lane.",
      "None of this requires abandoning what's already working. It usually means auditing what exists, identifying where the handoffs between channels are weak, and closing those gaps first — before adding more channels or more spend.",
    ],
    relatedSlugs: ["attract-generate-grow-explained", "google-ads-vs-seo-uae"],
    seoTopic: "digital marketing agency Dubai / connected marketing systems",
    image: "/insights/why-uae-businesses-need-a-connected-digital-system.png",
  },
  {
    slug: "google-ads-vs-seo-uae",
    title: "Google Ads vs SEO: Which Should a UAE Business Invest in First?",
    metaTitle: "Google Ads vs SEO for UAE Businesses | AMREN Digital",
    metaDescription:
      "A practical comparison of Google Ads and SEO for UAE businesses — when to prioritize paid search, when to invest in organic, and why most businesses eventually need both.",
    category: "Google Ads",
    publishedAt: "2026-05-18",
    author: "AMREN Digital Team",
    excerpt:
      "Neither channel replaces the other. Here's how to think about sequencing Google Ads and SEO based on how quickly you need results.",
    body: [
      "This question comes up constantly, and the honest answer is that it depends on your timeline, budget and how competitive your industry is on Google — but there are some general principles worth understanding before deciding.",
      "Google Ads produces visibility immediately. As soon as a campaign is live and approved, your business can appear at the top of relevant search results. The tradeoff is that this visibility stops the moment you stop paying, and every click has a direct cost.",
      "SEO works differently. It takes longer to see meaningful movement — often months, not days — because it depends on your website's technical health, content, and how competitive the search terms are in your market. But visibility built through SEO doesn't disappear when a budget runs out.",
      "For a new business, or one entering a highly competitive category, Google Ads is usually the faster way to start generating enquiries while the SEO foundation is being built in parallel. For a business that already has steady enquiry volume and wants to reduce its dependence on ad spend over time, SEO becomes the priority investment.",
      "In practice, most businesses that stay in the UAE market for more than a year or two end up needing both — Google Ads for immediate, controllable visibility, and SEO for the visibility that keeps compounding whether or not the ad budget is active that month.",
    ],
    relatedSlugs: ["why-uae-businesses-need-a-connected-digital-system", "local-seo-google-business-profile-dubai"],
    seoTopic: "Google Ads / SEO / paid search vs organic / Dubai",
    image: "/insights/website-that-converts-not-just-looks-good.png",
  },
  {
    slug: "local-seo-google-business-profile-dubai",
    title: "Local SEO in Dubai: Why Your Google Business Profile Matters More Than You Think",
    metaTitle: "Local SEO & Google Business Profile in Dubai | AMREN Digital",
    metaDescription:
      "Why an optimized Google Business Profile is one of the highest-leverage, lowest-cost improvements a Dubai business with a physical or service-area presence can make.",
    category: "SEO",
    publishedAt: "2026-06-02",
    author: "AMREN Digital Team",
    excerpt:
      "For businesses with a physical location or service area in Dubai, local search often happens closer to a buying decision than almost any other channel.",
    body: [
      "Someone searching 'near me' on Google, or opening Google Maps to find a business nearby, is usually much closer to making a decision than someone scrolling social media. That's what makes local search — and specifically, your Google Business Profile — worth taking seriously.",
      "A complete, accurate, well-categorized Google Business Profile affects whether your business appears in the local map results at all, and whether it looks credible once someone finds it. That means an accurate category, complete business information, consistent details that match your website, and profile photos that represent the actual business.",
      "Local SEO also depends on consistency beyond the profile itself — the same business name, address format and phone number should appear the same way everywhere your business is listed online. Inconsistencies, even small ones, can weaken how confidently Google associates your business with a location.",
      "It's worth being clear that Google Business Profile verification is governed entirely by Google's own policies, and eligibility depends on your business type and location — this isn't something any agency can guarantee or bypass. What AMREN can do is make sure the profile itself is set up correctly and optimized within those requirements, and that it's supported by consistent local SEO signals across your website.",
    ],
    relatedSlugs: ["google-ads-vs-seo-uae", "why-uae-businesses-need-a-connected-digital-system"],
    seoTopic: "Local SEO / Google Business Profile / Dubai",
    image: "/insights/local-seo-google-business-profile-dubai.png",
  },
  {
    slug: "website-that-converts-not-just-looks-good",
    title: "A Website That Looks Good Isn't the Same as a Website That Converts",
    metaTitle: "Conversion-Focused Website Design for UAE Businesses | AMREN Digital",
    metaDescription:
      "Why visual design alone doesn't turn website visitors into enquiries — and what actually needs to be true of a website built to convert.",
    category: "Websites",
    publishedAt: "2026-06-20",
    author: "AMREN Digital Team",
    excerpt:
      "A website can be visually polished and still fail at its actual job: turning a visitor into an enquiry. Here's the difference.",
    body: [
      "It's easy to judge a website on how it looks in a screenshot. But a website's real job — especially one that traffic from ads, search and social all point to — is to move a visitor toward an enquiry. Those two things overlap less than most people assume.",
      "A conversion-focused website is clear about what the business does within the first few seconds, makes the path to enquiring obvious rather than buried in a menu, loads quickly on mobile (where most traffic in the UAE now arrives from), and gives visitors more than one easy way to get in touch — a form, a phone number, and increasingly, WhatsApp.",
      "It also needs to be built with search engines in mind from the start, not retrofitted later: clear page titles, sensible heading structure, and content that actually answers what someone searching for your service wants to know.",
      "None of this requires sacrificing design quality. The strongest websites do both — they look credible and premium, and they're structured deliberately around getting a visitor to take the next step.",
    ],
    relatedSlugs: ["why-uae-businesses-need-a-connected-digital-system", "whatsapp-automation-lead-followup"],
    seoTopic: "web design / website development / conversion-focused websites / Dubai",
    image: "/insights/website-that-converts-not-just-looks-good.png",
  },
  {
    slug: "social-media-content-vs-social-media-ads",
    title: "Social Media Content vs Social Media Ads: Do You Need Both?",
    metaTitle: "Social Media Content vs Ads for UAE Brands | AMREN Digital",
    metaDescription:
      "The difference between organic social media content and paid social advertising, and why most brands eventually need a strategy for both.",
    category: "Social Media",
    publishedAt: "2026-07-08",
    author: "AMREN Digital Team",
    excerpt:
      "Organic content and paid social ads do different jobs. Confusing the two is one of the most common reasons social media 'doesn't work' for a brand.",
    body: [
      "A common frustration is spending time and money on social media without clear results — often because organic content and paid advertising are being asked to do a job that only the other one is actually built for.",
      "Organic content builds familiarity and trust over time. It's what someone sees when they check out your profile after hearing about you elsewhere, or after your ad catches their attention. It rarely drives large volumes of new enquiries on its own, especially for a newer account with a limited following.",
      "Paid social advertising is built to reach people who don't already follow you, based on targeting criteria rather than reach earned through content alone. It can drive enquiries directly, but an ad pointing to an inactive or inconsistent profile often undermines the very trust it's trying to build.",
      "The two work best together: consistent organic content keeps the profile credible for anyone who checks it after seeing an ad, while paid campaigns do the heavy lifting of reaching new audiences at a controlled pace and cost.",
    ],
    relatedSlugs: ["why-uae-businesses-need-a-connected-digital-system", "google-ads-vs-seo-uae"],
    seoTopic: "social media marketing / social media advertising / Dubai",
    image: "/insights/social-media-content-vs-social-media-ads.png",
  },
  {
    slug: "whatsapp-automation-lead-followup",
    title: "Why Slow Lead Follow-Up Is Quietly Costing UAE Businesses Enquiries",
    metaTitle: "WhatsApp Automation & Lead Follow-Up for UAE Businesses | AMREN Digital",
    metaDescription:
      "Why the speed and consistency of lead follow-up matters as much as the quality of the lead itself — and how WhatsApp automation and a CRM can close that gap.",
    category: "Automation",
    publishedAt: "2026-07-27",
    author: "AMREN Digital Team",
    excerpt:
      "A well-targeted ad or a strong SEO ranking is wasted the moment a lead is left waiting for a reply. Follow-up speed is a growth lever most businesses underinvest in.",
    body: [
      "A lot of attention goes into the top of the funnel — getting someone to click an ad, find you on Google, or fill in a form. Far less attention tends to go into what happens in the minutes and hours after that enquiry actually arrives.",
      "In practice, a lead that receives a fast, relevant reply is far more likely to move forward than one that sits unanswered for a day, even if the underlying interest was identical. This is especially true when a potential customer has enquired with more than one business at the same time, which is common in competitive categories.",
      "This is where WhatsApp automation and a CRM start to matter as much as the advertising or SEO that generated the lead in the first place. An automated first response, a clear record of every enquiry in one place, and a simple workflow for following up all reduce the number of leads that quietly go cold simply because no one got to them in time.",
      "This doesn't need to be complex. For many businesses, the highest-impact first step is simply making sure every enquiry — whether from a website form, WhatsApp or a call — lands in one place, with a clear owner and a defined follow-up step, rather than scattered across inboxes and phones.",
    ],
    relatedSlugs: ["website-that-converts-not-just-looks-good", "why-uae-businesses-need-a-connected-digital-system"],
    seoTopic: "marketing automation / CRM / WhatsApp automation / lead follow-up",
    image: "/insights/whatsapp-automation-lead-followup.png",
  },
  {
    slug: "attract-generate-grow-explained",
    title: "Attract, Generate, Grow: A Simple Framework for Digital Growth",
    metaTitle: "The Attract, Generate, Grow Framework | AMREN Digital",
    metaDescription:
      "A breakdown of the Attract → Generate Leads → Grow framework AMREN Digital builds every engagement around, and how each stage feeds the next.",
    category: "Business Growth",
    publishedAt: "2026-08-10",
    author: "AMREN Digital Team",
    excerpt:
      "Every AMREN engagement is structured around three connected stages. Here's what each one actually means in practice.",
    body: [
      "It's a simple framework on purpose: Attract, Generate Leads, Grow. The value isn't in the labels — it's in treating them as three connected stages rather than three separate services to buy independently.",
      "Attract is about getting discovered — through Google Ads, Meta Ads, organic social content, SEO and local search. The goal at this stage is simply relevant attention: the right people noticing the business exists.",
      "Generate Leads is about what happens once that attention lands somewhere — a website, a landing page, a social profile, a WhatsApp number. This stage lives or dies on whether it's easy and obvious for someone to take the next step, and whether that enquiry is actually captured and tracked.",
      "Grow is what turns individual enquiries into a compounding system: tracking and analytics that show what's actually working, retargeting for people who didn't convert the first time, SEO that keeps building organic visibility, and automation that makes follow-up consistent.",
      "The reason this matters as a framework, rather than a slogan, is that weakness at any one stage limits the value of the other two. Excellent advertising pointed at a website with no clear enquiry path wastes the click. A strong lead-capture setup with no tracking wastes the data. And growth activity with no system behind it rarely compounds. Every package AMREN builds is designed around strengthening all three stages together.",
    ],
    relatedSlugs: ["why-uae-businesses-need-a-connected-digital-system", "whatsapp-automation-lead-followup"],
    seoTopic: "digital growth framework / attract generate grow / AMREN Digital",
    image: "/insights/attract-generate-grow-explained.png",
  },
];

articles.push(
  {
    slug: "google-ads-budget-dubai-business",
    title: "How Much Should a Dubai Business Spend on Google Ads?",
    metaTitle: "Google Ads Budget for Dubai Businesses | AMREN Digital",
    metaDescription:
      "A practical way to think about Google Ads budget for a Dubai business — what actually drives the number, and why a single industry benchmark rarely applies.",
    category: "Google Ads",
    publishedAt: "2026-08-14",
    author: "AMREN Digital Team",
    excerpt:
      "There's no single right number. Here's what actually determines a realistic Google Ads budget for a Dubai business, and how to think about it properly.",
    body: [
      "This is one of the first questions almost every business asks before running Google Ads, and it's also one of the hardest to answer with a single figure — because the right budget depends on factors that vary enormously between businesses, even within the same industry.",
      "The biggest driver is cost-per-click in your specific category. Competitive categories in Dubai — like real estate, legal services or certain medical specialties — can carry a much higher cost-per-click than a niche local service with less competition on Google. Two businesses with identical budgets can get very different volumes of traffic depending on what they're competing for.",
      "The second driver is your conversion value. A business selling a AED 50,000 service can justify a higher cost per lead than a business selling a AED 200 product, because the return on a single converted lead is completely different. Budget should be set against what a lead or sale is actually worth to your business, not against what a competitor is spending.",
      "A useful starting approach is to separate the question into two parts: what budget gives your campaign enough data to actually learn and optimize (usually enough to gather a meaningful number of clicks per week, not just a handful), and what budget your business can sustain long enough to see that optimization pay off — usually a minimum of a few months, not a few weeks.",
      "There's no version of this answer that involves a guaranteed number of leads or a guaranteed cost per lead — anyone promising that isn't accounting for how auction-based advertising actually works. What AMREN typically does is review your industry's competitive landscape, your offer and your goals, then recommend a realistic starting budget and adjust based on real performance data once the campaign is live.",
    ],
    relatedSlugs: ["google-ads-vs-seo-uae", "google-ads-landing-page-best-practices"],
    seoTopic: "Google Ads budget Dubai / PPC spend / cost per click",
    image: "/insights/google-ads-budget-dubai-business.png",
  },
  {
    slug: "google-ads-landing-page-best-practices",
    title: "Google Ads Landing Page Best Practices That Actually Move the Needle",
    metaTitle: "Google Ads Landing Page Best Practices | AMREN Digital",
    metaDescription:
      "What actually makes a Google Ads landing page convert — beyond generic 'best practices' lists — and why sending paid traffic to your homepage usually underperforms.",
    category: "Google Ads",
    publishedAt: "2026-08-20",
    author: "AMREN Digital Team",
    excerpt:
      "A landing page built for paid search traffic is a different job than a homepage. Here's what separates the ones that convert from the ones that just look fine.",
    body: [
      "A large share of underperforming Google Ads accounts don't actually have a targeting or bidding problem — they have a landing page problem. The ad does its job, gets the click, and then sends that visitor to a page that was never built to answer the specific question that search implied.",
      "The first principle is message match: the headline on the landing page should closely reflect the ad and the search term that triggered it. A visitor who searched 'emergency dentist Dubai' and clicks an ad promising exactly that shouldn't land on a generic homepage listing every service the clinic offers — the mismatch creates hesitation at the exact moment you need clarity.",
      "The second is a single, obvious next step. A homepage has to serve many different visitor intents at once, which is exactly why it's usually the wrong page for paid traffic. A dedicated landing page can remove that competition entirely and point every visitor toward one action — book, call, WhatsApp or fill in a form.",
      "The third is proof and reassurance placed close to the decision point, not buried further down the page than most visitors ever scroll on mobile — which is where most Google Ads clicks in the UAE now happen. Load speed matters here too: a slow-loading landing page loses a meaningful share of paid clicks before the page has even finished rendering.",
      "None of this replaces good targeting or bidding — a well-built landing page can't rescue an ad shown to the wrong audience. But for an account that's already generating relevant clicks, the landing page is often the highest-leverage place to improve conversion rate, because it's usually the easiest part of the funnel to test and change.",
    ],
    relatedSlugs: ["website-that-converts-not-just-looks-good", "google-ads-budget-dubai-business"],
    seoTopic: "Google Ads landing pages / conversion rate optimization / Dubai",
    image: "/insights/google-ads-landing-page-best-practices.png",
  },
  {
    slug: "seo-checklist-dubai-businesses",
    title: "A Practical SEO Checklist for Dubai Businesses",
    metaTitle: "SEO Checklist for Dubai Businesses | AMREN Digital",
    metaDescription:
      "A practical, non-exhaustive SEO checklist for Dubai businesses — the technical, on-page and local fundamentals worth checking before investing further.",
    category: "SEO",
    publishedAt: "2026-08-26",
    author: "AMREN Digital Team",
    excerpt:
      "Before investing heavily in SEO, it's worth checking the fundamentals are actually in place. Here's a practical starting checklist.",
    body: [
      "SEO strategy tends to get discussed at a high level — content, backlinks, authority — but a lot of visibility problems for Dubai businesses trace back to more basic issues that are worth ruling out first.",
      "Start with indexing: is the site actually being crawled and indexed by Google at all? A site with a stray 'noindex' tag, a blocked robots.txt rule, or major crawl errors in Search Console can't rank no matter how good the content is. This is the single most common issue we see on sites that 'don't show up on Google' at all.",
      "Next, check page speed and mobile experience — the majority of search traffic in the UAE is mobile, and a slow, hard-to-navigate mobile site works against every other SEO effort layered on top of it.",
      "On-page fundamentals matter more than they're often given credit for: does every important page have a unique title and meta description, a clear single H1, and a logical heading structure underneath it? Duplicate or missing titles across pages are a common, easy-to-fix issue.",
      "Local signals matter separately from general SEO: is the Google Business Profile complete and correctly categorized, and does the business name, address format and phone number match consistently across the website and any other listings?",
      "Finally, look at internal linking: do the pages that matter most actually get linked to from elsewhere on the site, or are they orphaned several clicks deep in the navigation? None of this is a complete SEO strategy — but getting these fundamentals right is usually the highest-leverage first step before investing further in content or link building.",
    ],
    relatedSlugs: ["local-seo-google-business-profile-dubai", "google-ads-vs-seo-uae"],
    seoTopic: "SEO checklist / technical SEO / Dubai",
    image: "/insights/seo-checklist-dubai-businesses.png",
  }
);

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
