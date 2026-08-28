"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Massive brand-name marquee for the pre-footer moment. Its horizontal
 * speed is tied directly to vertical scroll velocity — scroll fast and the
 * text visibly races; stop, and it settles back to a slow drift.
 */
export function BrandMarquee({ text = "AMREN DIGITAL" }: { text?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const items = [text, text, text, text];

  useLayoutEffect(() => {
    if (reducedMotion || !trackRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      duration: 22,
      repeat: -1,
      ease: "none",
    });

    let decayTimeout: ReturnType<typeof setTimeout>;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const velocity = Math.min(Math.abs(self.getVelocity()) / 1200, 8);
        gsap.to(tween, { timeScale: 1 + velocity, duration: 0.35, ease: "power2.out", overwrite: true });
        clearTimeout(decayTimeout);
        decayTimeout = setTimeout(() => {
          gsap.to(tween, { timeScale: 1, duration: 0.8, ease: "power2.out", overwrite: true });
        }, 150);
      },
    });

    return () => {
      clearTimeout(decayTimeout);
      trigger.kill();
      tween.kill();
    };
  }, [reducedMotion]);

  return (
    <section aria-hidden="true" className="overflow-hidden border-y border-cream/10 bg-navy py-6 sm:py-10">
      <div ref={trackRef} className="flex w-max items-center">
        {items.map((item, i) => (
          <span key={i} className="mx-4 flex shrink-0 items-center gap-4 sm:mx-8">
            <span className="font-display text-6xl font-bold uppercase tracking-tight text-cream sm:text-8xl lg:text-9xl">
              {item}
            </span>
            <span aria-hidden="true" className="text-6xl font-bold text-gold sm:text-8xl lg:text-9xl">
              —
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
