"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * No Lenis, no GSAP ticker: native browser scrolling drives everything.
 * ScrollTrigger observes native scroll directly with no bridge needed.
 * This just refreshes ScrollTrigger once layout has settled (fonts,
 * async images) so scroll-linked trigger positions elsewhere on the page
 * are measured against final layout, not a transient one.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimeout = window.setTimeout(refresh, 500);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimeout);
    };
  }, [pathname]);

  return null;
}
