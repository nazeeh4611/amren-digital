import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tree-shake per-file instead of pulling in the whole module graph for
  // these two — both are large and used piecemeal (a few motion
  // components here, one GSAP plugin there) across many small client
  // components, which is exactly the case this optimization targets.
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
  images: {
    // AVIF first (smallest), WebP fallback for browsers that don't
    // support it — Next's default is WebP-only.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  // Old per-platform/format service pages were merged into single pages
  // (Google Ads + Meta Ads -> Paid Advertising, Content Creation + Video
  // Production -> Content & Video Production, Local SEO folded into SEO).
  // Permanent redirects preserve any indexed links / bookmarks instead of
  // 404ing. Scoped to /services/* only — the /lp/* landing pages for these
  // same slugs are separate, still-live ad-campaign pages and must not
  // redirect.
  async redirects() {
    return [
      { source: "/services/google-ads", destination: "/services/paid-advertising", permanent: true },
      { source: "/services/meta-ads", destination: "/services/paid-advertising", permanent: true },
      { source: "/services/local-seo", destination: "/services/seo", permanent: true },
      { source: "/services/content-creation", destination: "/services/content-production", permanent: true },
      { source: "/services/video-production", destination: "/services/content-production", permanent: true },
    ];
  },
};

export default nextConfig;
