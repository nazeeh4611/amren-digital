export type Industry = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  headline: string;
  intro: string;
  problems: string[];
  journey: { step: string; description: string }[];
  relevantServiceSlugs: string[];
  measurement: string[];
};

/**
 * Only industries with genuinely distinct acquisition journeys are
 * published here — grouped where the underlying problem and funnel are
 * the same, rather than splitting into near-duplicate thin pages for
 * every vertical the spec brainstormed.
 */
export const industries: Industry[] = [
  {
    slug: "clinics-healthcare",
    title: "Dental, Medical & Aesthetic Clinics",
    metaTitle: "Digital Marketing for Clinics in Dubai | AMREN Digital",
    metaDescription:
      "Digital marketing for dental, medical and aesthetic clinics in Dubai — local SEO, Google Ads and a booking-focused website built around how patients actually search and choose a clinic.",
    h1: "Digital Marketing for Clinics in Dubai",
    headline: "Patients search close to the decision. Local visibility matters more than volume.",
    intro:
      "Someone searching for a dentist, clinic or aesthetic treatment 'near me' is usually close to booking — trust, proximity and availability decide which clinic they choose. AMREN builds the local search, advertising and booking journey around that reality rather than treating a clinic like a generic lead-gen business.",
    problems: [
      "Showing up on Google Maps for treatment-specific searches, not just the clinic's brand name",
      "A Google Business Profile that's incomplete, miscategorized, or inconsistent with the website",
      "A website that doesn't make booking or WhatsApp enquiry the obvious next step",
      "Ad spend going to broad terms instead of the specific treatments that actually convert",
    ],
    journey: [
      { step: "Search", description: "A patient searches a treatment plus location, or opens Google Maps to compare nearby clinics." },
      { step: "Compare", description: "They check ratings, photos, opening hours and how each profile and website presents the clinic." },
      { step: "Enquire", description: "Booking, calling or WhatsApping — whichever is fastest and clearest on the site or profile." },
      { step: "Confirm", description: "Fast, clear follow-up turns the enquiry into a booked appointment." },
    ],
    relevantServiceSlugs: ["seo", "paid-advertising", "web-design-development", "marketing-automation"],
    measurement: [
      "Local map pack visibility for treatment + location searches",
      "Google Business Profile calls, direction requests and website clicks",
      "Cost per booked enquiry from Google Ads",
      "Time from enquiry to first response",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    metaTitle: "Digital Marketing for Real Estate Agencies in Dubai | AMREN Digital",
    metaDescription:
      "Digital marketing for Dubai real estate agencies and brokers — Google Ads, Meta Ads and lead-capture systems built for a market where enquiries are high-value and follow-up speed decides the sale.",
    h1: "Digital Marketing for Real Estate in Dubai",
    headline: "Every enquiry is high-value. Losing one to slow follow-up is expensive.",
    intro:
      "Dubai's property market moves fast, and a serious buyer or investor is often enquiring with several agencies at once. AMREN focuses on getting qualified enquiries in front of the right audience and making sure none of them go cold waiting for a reply.",
    problems: [
      "Broad Meta and Google targeting that generates enquiries with no real budget or intent behind them",
      "Listing pages and landing pages that don't make enquiring effortless on mobile",
      "Leads captured across WhatsApp, forms and calls with no single place to track them",
      "Retargeting that doesn't exist, so warm buyers who didn't convert the first time are never brought back",
    ],
    journey: [
      { step: "Discover", description: "A buyer or investor sees a listing, ad or agency profile on Google, Meta or a portal." },
      { step: "Research", description: "They compare listings, developer reputation and agency credibility before reaching out." },
      { step: "Enquire", description: "WhatsApp, a call or a form — usually to more than one agency at the same time." },
      { step: "Follow-up", description: "Whoever responds fastest, with the most relevant information, tends to stay in the conversation." },
    ],
    relevantServiceSlugs: ["paid-advertising", "marketing-automation", "web-design-development"],
    measurement: [
      "Cost per qualified enquiry, not just per click",
      "Lead response time from first WhatsApp/form/call",
      "Retargeting reach for visitors who viewed listings but didn't enquire",
      "Enquiry-to-viewing conversion, where trackable",
    ],
  },
  {
    slug: "restaurants-hospitality",
    title: "Restaurants & Hospitality",
    metaTitle: "Digital Marketing for Restaurants & Hospitality in Dubai | AMREN Digital",
    metaDescription:
      "Digital marketing for Dubai restaurants, cafes and hospitality brands — local SEO, Google Business Profile management and social content built to drive covers and bookings.",
    h1: "Digital Marketing for Restaurants & Hospitality in Dubai",
    headline: "Discovery happens on Maps and Instagram before it happens anywhere else.",
    intro:
      "Most diners decide where to eat by checking Google Maps, reading recent reviews and scrolling Instagram — often within minutes of making the decision. AMREN builds visibility across exactly those touchpoints, and connects them to bookings rather than treating each as separate content.",
    problems: [
      "A Google Business Profile with outdated hours, menu links or photos",
      "Instagram content that's inconsistent, or disconnected from what actually drives bookings",
      "No clear, fast path from 'found on Google' to an actual reservation or order",
      "Paid social spent on broad reach instead of the radius and audience that can realistically visit",
    ],
    journey: [
      { step: "Discover", description: "Someone searches 'restaurants near me' or a specific cuisine, or sees content on Instagram." },
      { step: "Check", description: "They check photos, recent reviews, menu and opening hours before deciding." },
      { step: "Decide", description: "A clear booking link, WhatsApp number or call button turns interest into a reservation." },
      { step: "Return", description: "Ongoing content and offers bring past guests back and support word-of-mouth." },
    ],
    relevantServiceSlugs: ["seo", "social-media-marketing", "content-production", "paid-advertising"],
    measurement: [
      "Google Business Profile views, direction requests and website clicks",
      "Booking/reservation link clicks",
      "Local map pack visibility for cuisine + location searches",
      "Engagement and reach on location-targeted paid social",
    ],
  },
  {
    slug: "salons-beauty",
    title: "Salons & Beauty Businesses",
    metaTitle: "Digital Marketing for Salons & Beauty Businesses in Dubai | AMREN Digital",
    metaDescription:
      "Digital marketing for Dubai salons, spas and beauty businesses — local SEO, Instagram-led content and Meta Ads built around visual discovery and booking.",
    h1: "Digital Marketing for Salons & Beauty Businesses in Dubai",
    headline: "A visual category. Discovery, trust and booking all happen through the same feed.",
    intro:
      "Salons and beauty businesses are judged almost entirely on visual proof — real results, a consistent feed and genuine reviews. AMREN builds the content, local SEO and paid social strategy around that, with booking made as frictionless as the discovery itself.",
    problems: [
      "Inconsistent or low-quality content that undersells real work being done in the chair",
      "A Google Business Profile that's thin on photos and reviews compared to nearby competitors",
      "No simple booking link connected to Instagram, ads or the Google profile",
      "Paid social spent without a clear service or offer behind the click",
    ],
    journey: [
      { step: "Discover", description: "Someone searches a treatment near them, or discovers the brand through Instagram content or an ad." },
      { step: "Judge", description: "They evaluate real work shown in photos/video, consistency of posting and recent reviews." },
      { step: "Book", description: "A direct booking link or WhatsApp message — friction here loses the enquiry fast." },
      { step: "Rebook", description: "Content and light retargeting keep the business visible for the next appointment." },
    ],
    relevantServiceSlugs: ["social-media-marketing", "content-production", "seo", "paid-advertising"],
    measurement: [
      "Booking link clicks from Instagram bio, ads and Google profile",
      "Local map pack visibility for treatment + location searches",
      "Content engagement and reach on paid vs organic",
      "Cost per booked appointment from paid social",
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
