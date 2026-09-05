export type TrustedBrand = {
  slug: string;
  name: string;
  /** Filename under /public/brands — swap the file (same name) or change this to update a logo. */
  logo: string;
  url?: string;
};

/**
 * Logo strip for the "Trusted by" marquee — sourced from real completed
 * client work (see content/portfolio.ts). Each logo file lives in
 * /public/brands; to update a brand's logo, replace that file (keeping
 * the same name) or point `logo` at a new file — no other code change
 * needed.
 */
export const trustedBrands: TrustedBrand[] = [
  { slug: "royal-sarai", name: "Royal Sarai", logo: "royalsarai.avif", url: "https://royalsarai.ae/" },
  { slug: "gmg", name: "GMG Real Estate Group", logo: "gmg.avif", url: "https://royalsarai.ae/" },
  { slug: "flydevs-global", name: "Flydevs Global", logo: "fdlogo-1.avif", url: "https://www.flydevsglobal.com/" },
  { slug: "media-mind-digital", name: "Media Mind Digital", logo: "mediamind.avif", url: "http://mediaminddigital.ae/" },
  { slug: "alrkn-alraqy", name: "Alrkn Alraqy", logo: "alkrnalraqy.avif", url: "http://alrknalraqy.in/" },
  { slug: "eventra", name: "Eventra", logo: "eventra.avif", url: "https://www.eventra.club/" },
  { slug: "secondwave", name: "Secondwave", logo: "secondwave.avif", url: "https://www.secondwave.in/" },
  { slug: "dd-events-uae", name: "DD Events UAE", logo: "ddevents.avif", url: "https://www.ddeventsuae.com/" },
  { slug: "simpolo-trading", name: "Simpolo Trading", logo: "simpolo.avif", url: "https://simpolo-nazeehnahaban09-gmailcoms-projects.vercel.app/" },
  { slug: "wavescation", name: "Wavescation", logo: "wavescation.avif", url: "https://wavesglobal-frontend.vercel.app/" },
  { slug: "waves-global", name: "Waves Global", logo: "wavesglobal.avif", url: "https://wavesglobal-frontend.vercel.app/" },
  { slug: "foscape-aquatic-care", name: "Foscape", logo: "foscape.avif", url: "https://foscape-aqua-frontend.vercel.app/" },
  { slug: "flybuy-fashion", name: "FlyBuy", logo: "fbb.avif", url: "https://www.flybuybrand.com/" },
  { slug: "louis-calten-international", name: "Louis Calten International", logo: "louis-calten.avif", url: "https://lc-frontend-red.vercel.app/" },
  { slug: "kmcc-global-charity-trust", name: "KMCC Global Charity Trust", logo: "kmcc.avif", url: "https://kmcc-frontend.vercel.app/" },
];
