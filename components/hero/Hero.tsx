"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { Magnetic } from "@/components/animations/Magnetic";
import { RotatingWord, type RotatingWordSpec } from "@/components/hero/RotatingWord";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

// Short, single-word outcomes — keeps "DIGITAL [WORD]" / "BUILT TO MOVE."
// to two lines at every breakpoint. Pulled from the swatch-card palette
// (Turquoise/Mint/Aqua) instead of Deep Blue, so the hero stays out of
// the one strong dark accent while reading clearly against the dark
// photo overlay behind the heading.
const rotatingWords: RotatingWordSpec[] = [
  { text: "GROWTH", color: "#3FA8AC", shine: "#A9CDCE" },
  { text: "REACH", color: "#2E7D72", shine: "#C7DCC9" },
  { text: "LEADS", color: "#1C6672", shine: "#A9CDCE" },
];

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
    <section ref={sectionRef} className="relative overflow-hidden bg-ink pb-24 pt-36 text-cream sm:pb-32 sm:pt-44">
      <Image src="/dbhero.avif" alt="" fill priority sizes="100vw" className="object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(63,168,172,0.15) 0%, rgba(63,168,172,0) 20%, rgba(63,168,172,0) 80%, rgba(63,168,172,0.15) 100%), " +
            "linear-gradient(180deg, rgba(11,18,31,0.34) 0%, rgba(11,18,31,0.16) 45%, rgba(11,18,31,0.42) 100%)",
        }}
      />

      <div className="wrap relative flex flex-col items-center text-center">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.125rem,8.8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
          style={{ willChange: "transform", textShadow: "0 4px 24px rgba(10,15,28,0.55)" }}
        >
          <span className="block">
            DIGITAL <RotatingWord words={rotatingWords} className="italic font-semibold" />
          </span>
          <span className="block">BUILT TO MOVE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/95 sm:text-xl"
          style={{ textShadow: "0 2px 12px rgba(10,15,28,0.5)" }}
        >
          We build connected digital systems that attract attention, generate qualified enquiries and help UAE
          businesses grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.65 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Button href={site.cta.primary.href} variant="warm">
              {site.cta.primary.label}
            </Button>
          </Magnetic>
          <Magnetic>
            <Button href={site.cta.secondary.href} variant="outline-light">
              {site.cta.secondary.label}
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
