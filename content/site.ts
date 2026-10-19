export const site = {
  name: "AMREN Digital",
  shortName: "AMREN",
  legalName: "AMREN Digital",
  tagline: "Digital growth built to move.",
  description:
    "AMREN Digital is a UAE digital growth agency helping businesses in Dubai and across the Emirates attract customers, generate qualified leads and build connected digital systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digital.amren.ae",
  locale: "en_AE",
  themeColor: "#1e2142",

  parent: {
    name: "AMREN VENTURES",
    legalName: "AMREN VENTURES LLC",
    description: "The group behind AMREN Digital.",
    url: "https://amren.ae",
  },

  // Registered (licensed) office with a workspace. The team works remotely,
  // so no other address is published — the market served is `serviceArea`.
  location: {
    street: "Sharjah Media City",
    city: "Sharjah",
    region: "Sharjah",
    country: "United Arab Emirates",
    countryCode: "AE",
    label: "Sharjah Media City, UAE",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Sharjah+Media+City+(Shams)",
  },
  serviceArea: {
    primaryCity: "Dubai",
    label: "Dubai & the UAE",
  },

  contact: {
    phone: "+971 56 885 7443",
    phoneHref: "tel:+971568857443",
    phone2: "+971 50 368 2134",
    phone2Href: "tel:+971503682134",
    whatsapp: "https://wa.me/971503682134",
    email: "hello@amren.ae",
    website: "digital.amren.ae",
    instagram: "@digital.amren",
    instagramUrl: "https://instagram.com/digital.amren",
  },

  social: {
    instagram: "https://instagram.com/digital.amren",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Free Digital Audit", href: "/free-digital-audit" },
  ],

  legalNav: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],

  cta: {
    primary: { label: "Let's Grow", href: "/contact" },
    secondary: { label: "Explore Our Work", href: "/services/web-design-development#portfolio" },
    startProject: { label: "Free Digital Audit", href: "/free-digital-audit" },
    exploreServices: { label: "Explore Our Services", href: "/services" },
    viewWork: { label: "View Our Work", href: "/services/web-design-development#portfolio" },
    talkToAmren: { label: "Talk to AMREN", href: "/contact" },
    freeAudit: { label: "Free Digital Audit", href: "/free-digital-audit" },
    strategyCall: { label: "Request a Strategy Call", href: "/contact" },
  },
} as const;
