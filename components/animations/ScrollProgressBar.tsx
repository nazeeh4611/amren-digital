"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

// Cycles through the brand palette as the reader moves through the page —
// a small, always-visible "different color appears while scroll" cue.
const PALETTE = ["#3fa6a6", "#16324a", "#3fa6a6"];

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !barRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(barRef.current, { scaleX: 0, backgroundColor: PALETTE[0] });
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const segment = self.progress * (PALETTE.length - 1);
        const index = Math.min(Math.floor(segment), PALETTE.length - 2);
        const localProgress = segment - index;
        const color = gsap.utils.interpolate(PALETTE[index], PALETTE[index + 1], localProgress);
        gsap.to(barRef.current, { scaleX: self.progress, backgroundColor: color, duration: 0.1, ease: "none" });
      },
    });

    return () => trigger.kill();
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
