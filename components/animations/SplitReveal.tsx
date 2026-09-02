"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Word-by-word mask reveal. Splits `text` into words on the server (so the
 * full text is always present in HTML for SEO/accessibility).
 *
 * `trigger="mount"` (above-the-fold headlines) is pure CSS — see
 * .split-reveal-mount in globals.css — so the heading animates in on its
 * own paint timeline instead of waiting on GSAP's JS to hydrate, which
 * would otherwise leave critical text invisible until scripts execute.
 *
 * `trigger="scroll"` genuinely needs JS (scroll-position awareness) and
 * stays GSAP/ScrollTrigger, self-killing via `once: true` once it fires.
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
  const isMount = trigger === "mount";

  useLayoutEffect(() => {
    if (isMount || reducedMotion || !containerRef.current) return;
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
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 88%",
            once: true,
          },
        }
      );
      return () => {
        tween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMount, reducedMotion, delay, stagger]);

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <span
            data-word-inner
            className={
              isMount && !reducedMotion
                ? `split-reveal-mount${wordClassName ? ` ${wordClassName}` : ""}`
                : wordClassName
            }
            style={
              isMount
                ? ({ display: "inline-block", "--word-delay": `${delay + i * stagger}s` } as CSSProperties)
                : reducedMotion
                  ? undefined
                  : { display: "inline-block", willChange: "transform" }
            }
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
