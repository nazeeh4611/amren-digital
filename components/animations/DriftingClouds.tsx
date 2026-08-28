"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

function Cloud({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 28" className={className} aria-hidden="true">
      <path
        d="M14 22a9 9 0 0 1-1-17.9A11 11 0 0 1 34 3a8 8 0 0 1 10.5 8.4A7 7 0 0 1 50 24H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * A trailing echo of the paper-plane flight path in the Growth System
 * section just above — a couple of clouds drifting into view here ties
 * the two sections together instead of the motion stopping dead.
 */
export function DriftingClouds({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const colorClass = tone === "light" ? "text-cream/40" : "text-navy/14";

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return;
    const clouds = ref.current.querySelectorAll<HTMLElement>(".drift-cloud");
    const tweens = Array.from(clouds).map((el, i) =>
      gsap.to(el, {
        x: i % 2 === 0 ? 16 : -16,
        duration: 6 + i * 1.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })
    );
    return () => tweens.forEach((t) => t.kill());
  }, [reducedMotion]);

  return (
    <div ref={ref} aria-hidden="true" className={className}>
      <Cloud className={`drift-cloud absolute left-[8%] top-2 h-6 w-12 ${colorClass}`} />
      <Cloud className={`drift-cloud absolute right-[12%] top-10 h-5 w-10 ${colorClass}`} />
    </div>
  );
}
