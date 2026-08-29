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
    // The placeholder stock photos are deterministically seeded (same
    // seed always resolves to the same picsum.photos image), so there's
    // no reason to let the optimized copy expire and re-fetch from the
    // remote origin every 60s (Next's default) — cache it for a year.
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
