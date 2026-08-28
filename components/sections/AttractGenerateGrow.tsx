"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Stage = {
  key: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  visuals: string[];
  accentText: string;
  accentBorder: string;
  accentBg: string;
};

const stages: Stage[] = [
  {
    key: "attract",
    number: "01",
    title: "Attract",
    headline: "Get discovered. Get attention.",
    description: "Google search, Meta ads, organic social content, SEO and local search working together to earn the right attention.",
    visuals: ["Google Search", "Meta Ads", "Social Content", "SEO", "Local Search"],
    accentText: "text-blue-2",
    accentBorder: "border-blue-2/30",
    accentBg: "bg-blue-2",
  },
  {
    key: "generate",
    number: "02",
    title: "Generate Leads",
    headline: "Turn attention into enquiries.",
    description: "A website, landing page or WhatsApp conversation built to make enquiring the obvious next step — every time.",
    visuals: ["Website", "Landing Page", "WhatsApp", "Lead Form", "Enquiry"],
    accentText: "text-coral-2",
    accentBorder: "border-coral-2/30",
    accentBg: "bg-coral-2",
  },
  {
    key: "grow",
    number: "03",
    title: "Grow",
    headline: "Build systems that compound.",
    description: "Analytics, CRM, retargeting and automation that turn one enquiry into a repeatable, measurable growth system.",
    visuals: ["Analytics", "CRM", "Retargeting", "Automation", "Reporting"],
    accentText: "text-lime",
    accentBorder: "border-lime/30",
    accentBg: "bg-lime",
  },
];

/**
 * A compact, always-rendered 3-card flow rather than a full-viewport
 * pinned scroll-jack — same story (Attract → Generate Leads → Grow), a
 * fraction of the page height, and no per-stage stock image to load.
 * The site-wide flight path (SitewideFlightPath, mounted once around all
 * homepage sections below the hero) is what carries the plane/line motif
 * through this section now, so this component just handles the cards.
 */
export function AttractGenerateGrow() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stage-card",
        { opacity: 0, y: 32, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.6)",
          stagger: 0.15,
          scrollTrigger: { trigger: ".stage-row", start: "top 82%", once: true },
        }
      );

      gsap.to(".stage-dot", {
        scale: 1.4,
        opacity: 0.5,
        duration: 1.1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="section bg-navy text-cream">
      <div className="wrap">
        <Eyebrow light accent="gold">The AMREN Growth System</Eyebrow>
        <SplitReveal
          as="h2"
          text="Attract. Generate Leads. Grow."
          className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl"
        />

        <div className="stage-row mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6">
          {stages.map((stage) => (
            <div key={stage.key} className="stage-card flex-1">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-cream/12 bg-navy-2 p-7 transition-colors duration-300 hover:border-cream/25 sm:p-8">
                <span
                  aria-hidden="true"
                  className={`stage-dot absolute right-7 top-7 h-2 w-2 rounded-full sm:right-8 sm:top-8 ${stage.accentBg}`}
                />
                <span className="font-display text-5xl font-bold text-cream/15">{stage.number}</span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight">{stage.title}</h3>
                <p className={`mt-3 font-editorial text-lg italic ${stage.accentText}`}>{stage.headline}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{stage.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {stage.visuals.map((v) => (
                    <li
                      key={v}
                      className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wide text-cream/70 ${stage.accentBorder}`}
                    >
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
