"use client";

import { useLayoutEffect, useRef, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * GSAP word-by-word mask reveal. Splits `text` into words on the server (so
 * the full text is always present in HTML for SEO/accessibility) and
 * animates each word up into view — on scroll by default, or immediately on
 * mount for above-the-fold headlines.
 */
export function SplitReveal({
  text,
  as: Tag = "div",
  className,
  wordClassName,
  trigger = "scroll",
  delay = 0,
  stagger = 0.05,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  trigger?: "scroll" | "mount";
  delay?: number;
  stagger?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const words = text.split(" ");

  useLayoutEffect(() => {
    if (reducedMotion || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const targets = containerRef.current.querySelectorAll<HTMLSpanElement>("[data-word-inner]");

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power4.out",
          stagger,
          delay,
          ...(trigger === "scroll"
            ? {
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 88%",
                  once: true,
                },
              }
            : {}),
        }
      );
      return () => {
        tween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, trigger, delay, stagger]);

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <span
            data-word-inner
            className={wordClassName}
            style={reducedMotion ? undefined : { display: "inline-block", willChange: "transform" }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
