export const site = {
  name: "AMREN Digital",
  shortName: "AMREN",
  legalName: "AMREN Digital",
  tagline: "Digital growth built to move.",
  description:
    "AMREN Digital is a Dubai-based digital growth agency helping UAE businesses attract customers, generate qualified leads and build connected digital systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digital.amren.ae",
  locale: "en_AE",
  themeColor: "#17294b",

  parent: {
    name: "AMREN VENTURES",
    description: "The group behind AMREN Digital.",
    url: "https://amren.ae",
  },

  location: {
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    label: "Dubai, UAE",
  },

  contact: {
    phone: "+971 56 885 7443",
    phoneHref: "tel:+971568857443",
    whatsapp: "https://wa.me/971568857443",
    email: null as string | null, // TODO: client to supply a monitored inbox for form routing
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
    { label: "Industries", href: "/industries" },
    { label: "Work", href: "/work" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Work", href: "/work" },
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
    secondary: { label: "Explore Our Work", href: "/work" },
    startProject: { label: "Free Digital Audit", href: "/free-digital-audit" },
    exploreServices: { label: "Explore Our Services", href: "/services" },
    viewWork: { label: "View Our Work", href: "/work" },
    talkToAmren: { label: "Talk to AMREN", href: "/contact" },
    freeAudit: { label: "Free Digital Audit", href: "/free-digital-audit" },
    strategyCall: { label: "Request a Strategy Call", href: "/contact" },
  },
} as const;
