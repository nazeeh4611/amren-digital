/**
 * Central asset manifest.
 *
 * Every real asset (photo, video, logo, screenshot) is registered here once
 * it is supplied. Every value starts `null` / empty and components fall back
 * to <AssetPlaceholder /> automatically until a real path is added.
 *
 * To go live with an asset: drop the file under /public/assets/... and set
 * its path here. No component code needs to change.
 */

export type MaybeAsset = string | null;

export const assets = {
  logo: {
    main: null as MaybeAsset, // /assets/logo/amren-digital.svg
    white: null as MaybeAsset,
    dark: null as MaybeAsset,
    mark: null as MaybeAsset, // icon-only mark, for favicon-adjacent use
  },

  hero: {
    main: null as MaybeAsset,
    backgroundVideo: null as MaybeAsset,
    poster: null as MaybeAsset,
  },

  floatingCards: {
    googleAds: null as MaybeAsset,
    metaAds: null as MaybeAsset,
    website: null as MaybeAsset,
    analytics: null as MaybeAsset,
  },

  attractGenerateGrow: {
    attract: null as MaybeAsset,
    generate: null as MaybeAsset,
    grow: null as MaybeAsset,
  },

  services: {
    "google-ads": null as MaybeAsset,
    "meta-ads": null as MaybeAsset,
    seo: null as MaybeAsset,
    "local-seo": null as MaybeAsset,
    "social-media-marketing": null as MaybeAsset,
    "web-design-development": null as MaybeAsset,
    "content-creation": null as MaybeAsset,
    "video-production": null as MaybeAsset,
    "marketing-automation": null as MaybeAsset,
  } as Record<string, MaybeAsset>,

  portfolio: [] as { slug: string; cover: MaybeAsset; gallery: MaybeAsset[] }[],

  testimonials: [] as { id: string; photo: MaybeAsset }[],

  clients: [] as { name: string; logo: MaybeAsset; url?: string }[],

  team: [] as { id: string; photo: MaybeAsset }[],

  social: [] as { id: string; image: MaybeAsset }[],

  about: {
    hero: null as MaybeAsset,
    story: null as MaybeAsset,
    ventures: null as MaybeAsset,
  },

  contact: {
    visual: null as MaybeAsset,
  },

  insights: {} as Record<string, MaybeAsset>,

  og: {
    default: null as MaybeAsset, // /assets/og/default-og.jpg — 1200x630
  },
};
