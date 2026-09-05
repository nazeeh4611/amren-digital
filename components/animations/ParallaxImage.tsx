"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Wraps an image (or any element) with a subtle scroll-linked vertical
 * parallax — the wrapped content drifts slightly slower/faster than the
 * page scroll, creating depth. Desktop and mobile both get motion, just
 * scaled down on small screens; reduced motion disables it entirely.
 *
 * `speed` is the drift in pixels applied across the element's scroll
 * distance through the viewport — keep it subtle (12–40px) for a premium
 * feel rather than an obvious "effect".
 */
export function ParallaxImage({
  children,
  speed = 24,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !wrapRef.current || !innerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 768px)",
        mobile: "(max-width: 767px)",
      },
      (context) => {
        const isMobile = context.conditions?.mobile;
        const distance = isMobile ? speed * 0.4 : speed;

        const tween = gsap.fromTo(
          innerRef.current,
          { y: -distance },
          {
            y: distance,
            ease: "none",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, [reducedMotion, speed]);

  return (
    <div ref={wrapRef} className={className} style={{ overflow: "hidden" }}>
      <div
        ref={innerRef}
        className="h-full w-full"
        style={reducedMotion ? undefined : { willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
}
