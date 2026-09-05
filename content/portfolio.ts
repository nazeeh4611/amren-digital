export type PortfolioProject = {
  slug: string;
  name: string;
  client?: string;
  location: string;
  description: string;
  url: string;
  /** Shown on the card's link pill instead of `url`'s own host — for
   * projects whose live `url` is a Vercel preview deployment rather than
   * the brand's real domain, so visitors see a normal-looking domain
   * while the link still opens the real, working deployment. */
  displayDomain?: string;
  /** Filename under /public/works — swap the file (same name) or change this to update a screenshot. */
  image: string;
  /** Which service this project showcases — only "web-design-development" is populated for now; other services get their own portfolio entries later. */
  category: string;
};

/**
 * Real, completed client websites only — no invented projects or results.
 * Each entry links out to the live site rather than an internal case-study
 * page, since these are shown as finished work rather than AMREN-authored
 * write-ups. Screenshots live in /public/works — updating one is just
 * replacing that file or pointing `image` at a new filename.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "royal-sarai-eu",
    name: "Royal Sarai",
    client: "GMG Real Estate Group",
    location: "Europe",
    description: "Europe-based IT technology company website for GMG Real Estate Group.",
    url: "https://royalsarai.com/",
    image: "royalsarai.avif",
    category: "web-design-development",
  },
  {
    slug: "royal-sarai-ae",
    name: "Royal Sarai",
    client: "GMG Real Estate Group",
    location: "Dubai, UAE",
    description: "Dubai-based IT technology company website for GMG Real Estate Group.",
    url: "https://royalsarai.ae/",
    image: "royalsarai-ae.avif",
    category: "web-design-development",
  },
  {
    slug: "flydevs-global",
    name: "Flydevs Global LLC",
    location: "India & UAE",
    description: "IT solutions company website based in India and UAE.",
    url: "https://www.flydevsglobal.com/",
    image: "flydevs.avif",
    category: "web-design-development",
  },
  {
    slug: "media-mind-digital",
    name: "Media Mind Digital",
    location: "Dubai, UAE",
    description: "A modern digital agency website showcasing branding, web development and digital marketing.",
    url: "http://mediaminddigital.ae/",
    image: "mediamind.avif",
    category: "web-design-development",
  },
  {
    slug: "alrkn-alraqy",
    name: "Alrkn Alraqy Hotel Management",
    location: "Dubai & Middle East",
    description: "Hotel management and booking platform featuring luxury accommodations across the Middle East.",
    url: "http://alrknalraqy.in/",
    image: "alrknalraqy.avif",
    category: "web-design-development",
  },
  {
    slug: "eventra",
    name: "Eventra — Club Event Booking",
    location: "Dubai, UAE",
    description:
      "Club event and party booking platform built with the MERN stack, offering event discovery, booking management and venue partnerships.",
    url: "https://www.eventra.club/",
    image: "eventra.avif",
    category: "web-design-development",
  },
  {
    slug: "secondwave",
    name: "Secondwave — Digital Marketing",
    location: "Kerala, India",
    description: "Digital marketing agency website showcasing SEO services, social media management and creative campaigns.",
    url: "https://www.secondwave.in/",
    image: "secondwave.avif",
    category: "web-design-development",
  },
  {
    slug: "dd-events-uae",
    name: "DD Events UAE",
    location: "Dubai, UAE",
    description: "A creative event management website showcasing premium event planning services in Dubai.",
    url: "https://www.ddeventsuae.com/",
    image: "dd-events.avif",
    category: "web-design-development",
  },
  {
    slug: "simpolo-trading",
    name: "Simpolo Trading",
    location: "United Arab Emirates",
    description: "A premium website for a trusted UAE-based building materials supplier, established since 2005.",
    url: "https://simpolo-nazeehnahaban09-gmailcoms-projects.vercel.app/",
    displayDomain: "simpolotrading.com",
    image: "simpolo.avif",
    category: "web-design-development",
  },
  {
    slug: "wavescation",
    name: "Wavescation Holiday Homes",
    client: "Waves Global LLC FZ",
    location: "Dubai, UAE",
    description:
      "DTCM-licensed holiday home management in Dubai, specializing in short-term rentals across Downtown Dubai, JBR and Palm Jumeirah.",
    url: "https://wavesglobal-frontend.vercel.app/",
    displayDomain: "wavescation.com",
    image: "wavescation.avif",
    category: "web-design-development",
  },
  {
    slug: "foscape-aquatic-care",
    name: "The Foscape Aquatic Care",
    location: "South India",
    description: "Aquatic care services for residential and commercial aquariums, water gardens, pools and lake management.",
    url: "https://foscape-aqua-frontend.vercel.app/",
    displayDomain: "thefoscape.com",
    image: "foscape.avif",
    category: "web-design-development",
  },
  {
    slug: "flybuy-fashion",
    name: "FlyBuy Fashion",
    client: "FlyBuy Brand",
    location: "India & UAE",
    description: "Multi-brand online fashion store offering curated collections from India and UAE.",
    url: "https://www.flybuybrand.com/",
    image: "flybuybrand.avif",
    category: "web-design-development",
  },
  {
    slug: "louis-calten-international",
    name: "Louis Calten International LLP",
    location: "India, Indonesia & UAE",
    description: "Premium automotive & energy solutions company website.",
    url: "https://lc-frontend-red.vercel.app/",
    displayDomain: "louiscalten.com",
    image: "louis-calten.avif",
    category: "web-design-development",
  },
  {
    slug: "kmcc-global-charity-trust",
    name: "KMCC Global Charity Trust",
    location: "Kerala, India",
    description: "Website for a Kerala-based global charity trust.",
    url: "https://kmcc-frontend.vercel.app/",
    displayDomain: "kmccglobal.com",
    image: "kmcc.avif",
    category: "web-design-development",
  },
];

export function getPortfolioByCategory(category: string) {
  return portfolioProjects.filter((p) => p.category === category);
}
