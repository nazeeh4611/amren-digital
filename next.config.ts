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
};

export default nextConfig;
