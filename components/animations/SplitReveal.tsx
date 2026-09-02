"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { scheduleRevealFailsafe } from "@/lib/reveal-failsafe";

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
        // Travel distance kept under 100% so a sliding word's mask never
        // has to clip content that visually overlaps the line above it —
        // on wrapped multi-line headings (more likely on narrow screens)
        // a larger distance could smear into the settled line above,
        // especially combined with a heavy text-shadow blur.
        { yPercent: 65, opacity: 0 },
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
      const failsafe = scheduleRevealFailsafe(targets);
      return () => {
        failsafe.kill();
        tween.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, [isMount, reducedMotion, delay, stagger]);

  return (
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        // Word spacing is a margin on the mask, not a trailing space
        // character in the text node — a literal `{" "}` here was
        // silently dropped from the rendered HTML (adjacent text-only
        // expression children), which ran every word together.
        <span
          key={i}
          className={`inline-block overflow-hidden pb-[0.15em] align-bottom${i < words.length - 1 ? " mr-[0.25em]" : ""}`}
        >
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
          </span>
        </span>
      ))}
    </Tag>
  );
}
