"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const COLOR_CLASS = {
  gold: "bg-gold",
  blue: "bg-blue",
  coral: "bg-coral",
  cream: "bg-cream",
  cyan: "bg-cyan",
  green: "bg-green",
  peach: "bg-peach",
  orange: "bg-orange",
} as const;

/**
 * A small colored shape that's invisible until this exact point scrolls
 * into view, then pops in with a scale + fade — a literal "a different
 * color appears as you scroll" moment, used sparingly to mark section
 * transitions rather than as constant background decoration.
 */
export function ScrollColorPop({
  color = "gold",
  size = 12,
  shape = "circle",
  className,
}: {
  color?: keyof typeof COLOR_CLASS;
  size?: number;
  shape?: "circle" | "square";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.fromTo(
      ref.current,
      { scale: 0, opacity: 0, rotate: shape === "square" ? -25 : 0 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reducedMotion, shape]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ width: size, height: size, opacity: reducedMotion ? 1 : undefined }}
      className={clsx(COLOR_CLASS[color], shape === "circle" ? "rounded-full" : "rounded-md", className)}
    />
  );
}
