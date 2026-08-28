"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Premium scroll-triggered image reveal: the image sits inside an
 * overflow-hidden mask and scales down from a slight zoom while the inner
 * content rises into place — plays once, the first time it enters view.
 * Falls back to a plain, fully-visible render under reduced motion.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const maskRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !maskRef.current || !innerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { scale: 1.15, yPercent: 6 },
        {
          scale: 1,
          yPercent: 0,
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: maskRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, maskRef);

    return () => ctx.revert();
  }, [reducedMotion, delay]);

  return (
    <div ref={maskRef} className={className} style={{ overflow: "hidden" }}>
      <div ref={innerRef} style={{ height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
