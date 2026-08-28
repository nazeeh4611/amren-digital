"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

export function Marquee({
  items,
  className,
  tone = "light",
  separator = "·",
  reverse = false,
  speed = 32,
  accent = "gold",
}: {
  items: string[];
  className?: string;
  tone?: "light" | "dark";
  separator?: string;
  reverse?: boolean;
  speed?: number;
  accent?: "gold" | "coral" | "blue" | "lime";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const doubled = [...items, ...items];
  const accentClass = { gold: "text-gold", coral: "text-coral", blue: "text-blue-2", lime: "text-lime" }[accent];

  // GSAP-driven (not pure CSS) so its playback speed can react to scroll
  // velocity in real time — the marquee visibly accelerates while you scroll
  // fast and eases back to its resting pace once you stop, rather than
  // running at one fixed rate regardless of what the user is doing.
  useLayoutEffect(() => {
    if (reducedMotion || !trackRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const tween = gsap.to(track, {
      xPercent: reverse ? 50 : -50,
      duration: speed,
      repeat: -1,
      ease: "none",
    });

    let decayTimeout: ReturnType<typeof setTimeout>;
    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const velocity = Math.min(Math.abs(self.getVelocity()) / 1800, 5);
        gsap.to(tween, { timeScale: 1 + velocity, duration: 0.4, ease: "power2.out", overwrite: true });
        clearTimeout(decayTimeout);
        decayTimeout = setTimeout(() => {
          gsap.to(tween, { timeScale: 1, duration: 0.7, ease: "power2.out", overwrite: true });
        }, 150);
      },
    });

    return () => {
      clearTimeout(decayTimeout);
      trigger.kill();
      tween.kill();
    };
  }, [reducedMotion, reverse, speed]);

  return (
    <div
      className={clsx(
        "overflow-hidden border-y py-4",
        tone === "dark" ? "border-cream/15 bg-navy" : "border-navy/10 bg-cream",
        className
      )}
      aria-hidden="true"
    >
      <div ref={trackRef} className="flex w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "mx-4 shrink-0 font-display text-lg font-medium uppercase tracking-wide sm:text-2xl",
              tone === "dark" ? "text-cream/70" : "text-navy/60"
            )}
          >
            {item}
            <span className={clsx("ml-4", accentClass)}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
