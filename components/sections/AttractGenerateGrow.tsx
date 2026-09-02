"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { scheduleRevealFailsafe } from "@/lib/reveal-failsafe";

type Stage = {
  key: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  visuals: string[];
  numberColor: string;
  accentBorder: string;
  accentBg: string;
};

// Restrained per-stage identity — Attract/Deep Blue, Generate Leads/Soft
// Peach, Grow/Green — carried only by the number watermark, the small
// dot and the tag borders, never a card-filling block.
const stages: Stage[] = [
  {
    key: "attract",
    number: "01",
    title: "Attract",
    headline: "Get discovered. Get attention.",
    description: "Google search, Meta ads, organic social content, SEO and local search working together to earn the right attention.",
    visuals: ["Google Search", "Meta Ads", "Social Content", "SEO", "Local Search"],
    numberColor: "text-navy/20",
    accentBorder: "border-blue-2",
    accentBg: "bg-navy",
  },
  {
    key: "generate",
    number: "02",
    title: "Generate Leads",
    headline: "Turn attention into enquiries.",
    description: "A website, landing page or WhatsApp conversation built to make enquiring the obvious next step — every time.",
    visuals: ["Website", "Landing Page", "WhatsApp", "Lead Form", "Enquiry"],
    numberColor: "text-coral/50",
    accentBorder: "border-peach",
    accentBg: "bg-coral",
  },
  {
    key: "grow",
    number: "03",
    title: "Grow",
    headline: "Build systems that compound.",
    description: "Analytics, CRM, retargeting and automation that turn one enquiry into a repeatable, measurable growth system.",
    visuals: ["Analytics", "CRM", "Retargeting", "Automation", "Reporting"],
    numberColor: "text-green/45",
    accentBorder: "border-green",
    accentBg: "bg-green",
  },
];

/**
 * A compact, always-rendered 3-card flow rather than a full-viewport
 * pinned scroll-jack — same story (Attract → Generate Leads → Grow), a
 * fraction of the page height, and no per-stage stock image to load.
 * Neutral (Soft White) section and cards, per spec — the accent colors
 * live only in the number watermark, the small dot and the tag borders.
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

      // If the `once` ScrollTrigger above never fires, don't leave the
      // stage cards stuck at opacity:0 forever.
      const failsafe = scheduleRevealFailsafe(".stage-card");
      return () => failsafe.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="section bg-cream">
      <div className="wrap">
        <Eyebrow accent="gold">The AMREN Growth System</Eyebrow>
        <SplitReveal
          as="h2"
          text="Attract. Generate Leads. Grow."
          className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
        />

        <div className="stage-row mt-14 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-6">
          {stages.map((stage) => (
            <div key={stage.key} className="stage-card flex-1">
              <div className="card-glossy relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-white p-7 sm:p-8">
                <span
                  aria-hidden="true"
                  className={`stage-dot absolute right-7 top-7 h-2 w-2 rounded-full sm:right-8 sm:top-8 ${stage.accentBg}`}
                />
                <span className={`font-display text-5xl font-bold ${stage.numberColor}`}>{stage.number}</span>
                <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-ink">{stage.title}</h3>
                <p className="mt-3 font-editorial text-lg italic text-ink/85">{stage.headline}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ink/85">{stage.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {stage.visuals.map((v) => (
                    <li
                      key={v}
                      className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wide text-ink/70 ${stage.accentBorder}/40`}
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
