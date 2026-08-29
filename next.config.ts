import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
