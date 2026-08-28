"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import type { Motif } from "@/components/assets/AssetPlaceholder";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { FadeIn } from "@/components/animations/FadeIn";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Stage = {
  key: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  visuals: string[];
  motif: Motif;
  tone: number;
  accentText: string;
  accentBorder: string;
};

const stages: Stage[] = [
  {
    key: "attract",
    number: "01",
    title: "Attract",
    headline: "Get discovered. Get attention.",
    description: "Google search, Meta ads, organic social content, SEO and local search working together to earn the right attention.",
    visuals: ["Google Search", "Meta Ads", "Social Content", "SEO", "Local Search"],
    motif: "search",
    tone: 0,
    accentText: "text-blue-2",
    accentBorder: "border-blue-2/30",
  },
  {
    key: "generate",
    number: "02",
    title: "Generate Leads",
    headline: "Turn attention into enquiries.",
    description: "A website, landing page or WhatsApp conversation built to make enquiring the obvious next step — every time.",
    visuals: ["Website", "Landing Page", "WhatsApp", "Lead Form", "Enquiry"],
    motif: "phone",
    tone: 4,
    accentText: "text-coral-2",
    accentBorder: "border-coral-2/30",
  },
  {
    key: "grow",
    number: "03",
    title: "Grow",
    headline: "Build systems that compound.",
    description: "Analytics, CRM, retargeting and automation that turn one enquiry into a repeatable, measurable growth system.",
    visuals: ["Analytics", "CRM", "Retargeting", "Automation", "Reporting"],
    motif: "chart",
    tone: 5,
    accentText: "text-lime",
    accentBorder: "border-lime/30",
  },
];

export function AttractGenerateGrow() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = usePrefersReducedMotion();

  // Section-transition clip-path reveal: this section starts masked down to
  // a rounded inset window and expands to fill the full rectangle as it
  // scrolls up into place — a mask-based reveal instead of a hard cut from
  // the hero, scrubbed directly to scroll position.
  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(sectionRef.current, { clipPath: "inset(12% round 32px)", willChange: "clip-path" });
    const revealTween = gsap.to(sectionRef.current, {
      clipPath: "inset(0% round 0px)",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "top 15%",
        scrub: true,
      },
    });

    return () => {
      revealTween.scrollTrigger?.kill();
      revealTween.kill();
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const panels = stageRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!panels.length || !containerRef.current) return;

      gsap.set(panels[0], { opacity: 1, scale: 1, x: 0 });
      gsap.set(panels.slice(1), { opacity: 0, scale: 0.94, x: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          // Images loading async can shift layout after this trigger's
          // start/end were first measured — refreshing on load recalculates
          // them against final layout instead of a stale one.
          invalidateOnRefresh: true,
        },
      });

      tl.to(panels[0], { opacity: 0, x: -50, scale: 0.92, duration: 1 })
        .to(panels[1], { opacity: 1, x: 0, scale: 1, duration: 1 }, "<")
        .to(panels[1], { opacity: 0, x: -50, scale: 0.92, duration: 1 })
        .to(panels[2], { opacity: 1, x: 0, scale: 1, duration: 1 }, "<");

      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="bg-navy text-cream">
      <div className="wrap grid gap-10 pt-20 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow light accent="gold">The AMREN Growth System</Eyebrow>
          <SplitReveal
            as="h2"
            text="Attract. Generate Leads. Grow."
            className="mt-5 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl"
          />
        </div>
        <FadeIn delay={0.2} className="hidden lg:block">
          <ImageReveal>
            <AssetPlaceholder
              type="hero"
              label="The AMREN Growth System"
              motif="nodes"
              aspectRatio="4/3"
              tone={5}
              decorative
            />
          </ImageReveal>
        </FadeIn>
      </div>

      {/* Desktop: pinned scroll choreography */}
      <div
        ref={containerRef}
        className={reducedMotion ? "hidden" : "relative mt-16 hidden lg:block lg:h-screen"}
      >
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="wrap relative h-[70vh] w-full">
            {stages.map((stage, i) => (
              <div
                key={stage.key}
                ref={(el) => {
                  stageRefs.current[i] = el;
                }}
                className={`absolute inset-0 grid grid-cols-2 items-center gap-16 ${i === 0 ? "opacity-100" : "opacity-0"}`}
              >
                <div>
                  <span className="font-display text-8xl font-bold text-cream/10">{stage.number}</span>
                  <h3 className="mt-2 font-display text-5xl font-bold uppercase tracking-tight xl:text-6xl">{stage.title}</h3>
                  <p className={`mt-4 max-w-md font-editorial text-2xl italic ${stage.accentText}`}>{stage.headline}</p>
                  <p className="mt-5 max-w-md text-cream/70">{stage.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {stage.visuals.map((v) => (
                      <li key={v} className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide text-cream/70 ${stage.accentBorder}`}>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
                <AssetPlaceholder
                  type="dashboard-screenshot"
                  label={stage.title}
                  alt={`${stage.title}: ${stage.headline}`}
                  motif={stage.motif}
                  tone={stage.tone}
                  aspectRatio="4/5"
                  className="w-80 justify-self-center"
                  priority={i === 0}
                  showLabel={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet, and desktop when reduced motion is preferred: stacked cards */}
      <div className={reducedMotion ? "wrap mt-12 space-y-10 pb-20" : "wrap mt-12 space-y-10 pb-20 lg:hidden"}>
        {stages.map((stage, i) => (
          <FadeIn
            key={stage.key}
            delay={i * 0.1}
            className="grid gap-6 rounded-[var(--radius-lg)] border border-cream/12 bg-navy-2 p-6 sm:grid-cols-2 sm:items-center sm:p-8"
          >
            <div>
              <span className="font-display text-4xl font-bold text-cream/15">{stage.number}</span>
              <h3 className="mt-1 font-display text-3xl font-bold uppercase tracking-tight">{stage.title}</h3>
              <p className={`mt-3 font-editorial text-xl italic ${stage.accentText}`}>{stage.headline}</p>
              <p className="mt-3 text-sm text-cream/70">{stage.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {stage.visuals.map((v) => (
                  <li key={v} className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wide text-cream/70 ${stage.accentBorder}`}>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <AssetPlaceholder
              type="dashboard-screenshot"
              label={stage.title}
              alt={`${stage.title}: ${stage.headline}`}
              motif={stage.motif}
              tone={stage.tone}
              aspectRatio="4/5"
              showLabel={false}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
