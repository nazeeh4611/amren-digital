"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Smooth-scroll provider. No-ops entirely when the visitor prefers reduced
 * motion — native browser scrolling stays fully intact in that case.
 */
export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    // Named reference so cleanup removes the exact same callback it added —
    // passing a fresh arrow function to gsap.ticker.remove() is a no-op,
    // which previously left a stale tick bound to a destroyed Lenis
    // instance running forever after any effect re-run (e.g. React
    // StrictMode's dev-mode double-invoke), breaking scroll-linked GSAP
    // animations sitewide.
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Layout can still be settling (fonts, async images) right after mount —
    // refresh once things are idle so ScrollTrigger's start/end positions
    // are measured against final layout, not a transient one.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const refreshTimeout = window.setTimeout(refresh, 500);

    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(refreshTimeout);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Jump to the top on every route change. Next's own scroll restoration
  // moves the native scrollTop, but Lenis tracks its own virtual scroll
  // position independently — without this, Lenis doesn't know the native
  // position changed and the page can appear to stay scrolled down (or jump
  // unexpectedly on the next wheel input) after navigating to a new page.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
