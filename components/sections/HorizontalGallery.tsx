"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import type { Project } from "@/content/projects";

/**
 * Pinned horizontal-scroll gallery on desktop (GSAP ScrollTrigger drives the
 * track's translateX as the page scrolls vertically). Falls back to a native
 * horizontal scroll-snap row on mobile/tablet and under reduced motion, so
 * touch scrolling and accessibility are never compromised.
 */
export function HorizontalGallery({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!containerRef.current || !trackRef.current) return;
      const track = trackRef.current;

      const getDistance = () => Math.max(track.scrollWidth - window.innerWidth + 96, 0);

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="relative overflow-hidden lg:h-screen">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100%-1320px)/2))] pb-6 sm:gap-8 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-28 lg:items-center lg:overflow-visible lg:pb-0 lg:pl-[max(1.25rem,calc((100%-1320px)/2))] lg:pr-24"
      >
        {projects.map((project, i) => (
          <div key={project.slug} className="w-[82vw] shrink-0 snap-center sm:w-[420px] lg:w-[440px]">
            <ProjectCard project={project} tone={i % 8} />
          </div>
        ))}
      </div>
    </div>
  );
}
