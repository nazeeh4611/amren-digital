"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { Magnetic } from "@/components/animations/Magnetic";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const headlineLine1 = "DIGITAL GROWTH";
const headlineLine2 = "BUILT TO MOVE.";

const ease = [0.16, 1, 0.3, 1] as const;

const orbs = [
  { color: "bg-gold", size: "h-[22rem] w-[22rem]", top: "-14%", left: "68%", duration: 14, distance: 50 },
  { color: "bg-blue-2", size: "h-[18rem] w-[18rem]", top: "48%", left: "-10%", duration: 17, distance: 40 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  // Ambient background — three large blurred color fields drifting slowly
  // and independently (different duration/distance per orb so they never
  // sync up), sitting behind the headline for depth instead of a boxed
  // image or panel.
  useLayoutEffect(() => {
    if (reducedMotion) return;
    const ctx = gsap.context(() => {
      orbRefs.current.forEach((el, i) => {
        if (!el) return;
        const orb = orbs[i];
        gsap.to(el, {
          x: orb.distance,
          y: orb.distance * 0.6,
          duration: orb.duration,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink pb-20 pt-32 text-cream sm:pb-28 sm:pt-40">
      <Image
        src="/bghero.avif"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/10"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />

      {!reducedMotion &&
        orbs.map((orb, i) => (
          <div
            key={i}
            ref={(el) => {
              orbRefs.current[i] = el;
            }}
            aria-hidden="true"
            className={`pointer-events-none absolute rounded-full opacity-[0.45] blur-[100px] ${orb.color} ${orb.size}`}
            style={{ top: orb.top, left: orb.left, willChange: "transform" }}
          />
        ))}

      <div aria-hidden="true" className="accent-dot accent-dot-a absolute left-10 top-24 h-3 w-3 bg-gold" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute right-16 top-16 h-2 w-2 bg-coral" />
      <div aria-hidden="true" className="accent-dot accent-dot-a absolute bottom-24 left-1/4 h-2.5 w-2.5 bg-blue" />
      <div aria-hidden="true" className="accent-dot accent-dot-b absolute bottom-16 right-1/4 h-2 w-2 bg-gold-2" />

      <div className="wrap relative">
        <h1
          ref={headingRef}
          className="max-w-6xl font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-[8rem] lg:text-[7rem] xl:text-[8.5rem]"
          style={{ willChange: "transform" }}
        >
          <SplitReveal as="span" text={headlineLine1} trigger="mount" delay={0.15} stagger={0.06} className="block" />
          <SplitReveal
            as="span"
            text={headlineLine2}
            trigger="mount"
            delay={0.4}
            stagger={0.06}
            className="block text-transparent [-webkit-text-stroke:1.5px_var(--amren-cream)] sm:[-webkit-text-stroke:2px_var(--amren-cream)]"
          />
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl"
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
              <Button href={site.cta.secondary.href} variant="outline-light">
                {site.cta.secondary.label}
              </Button>
            </Magnetic>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
