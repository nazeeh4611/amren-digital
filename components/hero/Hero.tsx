"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const headlineWord1 = "DIGITAL";
const headlineHighlight = "GROWTH";
const headlineLine2 = "BUILT TO MOVE.";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Heading drifts up at a slower rate than the page scrolls for a parallax
  // depth cue as the hero scrolls out of view.
  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current || !headingRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(headingRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream pb-20 pt-32 text-ink sm:pb-28 sm:pt-40">
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-10 top-24 h-2 w-2 rounded-full bg-navy/60" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute right-16 top-16 h-1.5 w-1.5 rounded-full bg-navy/30" />
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute bottom-24 left-1/4 h-1.5 w-1.5 rounded-full bg-navy/30" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute bottom-16 right-1/4 h-2 w-2 rounded-full bg-navy/60" />

      <div className="wrap relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
          {site.location.label}
        </span>

        <h1
          ref={headingRef}
          className="mt-6 max-w-6xl font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-[8rem] lg:text-[7rem] xl:text-[8.5rem]"
          style={{ willChange: "transform" }}
        >
          {/* One word carries Deep Blue — the rest of the headline stays
              near-black, per "introduce Deep Blue selectively through
              one highlighted word, not the whole hero." */}
          <span className="block">
            <SplitReveal as="span" text={headlineWord1} trigger="mount" delay={0.15} stagger={0.06} className="inline" />{" "}
            <SplitReveal as="span" text={headlineHighlight} trigger="mount" delay={0.25} stagger={0.06} className="inline text-navy" />
          </span>
          <SplitReveal
            as="span"
            text={headlineLine2}
            trigger="mount"
            delay={0.4}
            stagger={0.06}
            className="block text-transparent [-webkit-text-stroke:1.5px_var(--amren-ink)] sm:[-webkit-text-stroke:2px_var(--amren-ink)]"
          />
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="max-w-xl text-lg leading-relaxed text-ink/70 sm:text-xl"
          >
            We build connected digital systems that attract attention, generate qualified enquiries and help UAE
            businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href={site.cta.primary.href} variant="primary">
                {site.cta.primary.label}
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href={site.cta.secondary.href} variant="ghost">
                {site.cta.secondary.label}
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
