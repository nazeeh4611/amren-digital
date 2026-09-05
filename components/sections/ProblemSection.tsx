"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { scheduleRevealFailsafe } from "@/lib/reveal-failsafe";

// Deep Blue and Cyan, alternating — the two "system indicator" colors
// called for here, kept to small numbered nodes rather than the section
// at large.
const chain: { label: string; accent: string; ring: string }[] = [
  { label: "Ads", accent: "text-blue-2", ring: "border-blue-2/50" },
  { label: "Website", accent: "text-cyan", ring: "border-cyan/50" },
  { label: "Lead", accent: "text-blue-2", ring: "border-blue-2/50" },
  { label: "Tracking", accent: "text-cyan", ring: "border-cyan/50" },
  { label: "Retargeting", accent: "text-blue-2", ring: "border-blue-2/50" },
  { label: "Growth", accent: "text-cyan", ring: "border-cyan/50" },
];

const disconnects = [
  "Ads running separately from everything else",
  "Social media disconnected from the offer",
  "Websites that don't convert visitors into enquiries",
  "SEO treated as its own island",
  "Leads received with no consistent follow-up",
  "Data collected without ever becoming useful tracking",
];

/**
 * The right card's centerpiece: a glowing dot that travels the full
 * length of the numbered chain once it's revealed — a literal signal
 * moving through "the system AMREN connects", instead of a static list.
 */
export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const tiltCleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // Left card: each row pops in with a little overshoot, its ×
      // badge spinning into place — a slightly chaotic feel that sells
      // "disconnected" before the right card shows the tidy version.
      gsap.fromTo(
        ".disconnect-item",
        { opacity: 0, x: -18, scale: 0.94 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.08,
          scrollTrigger: { trigger: ".disconnect-list", start: "top 82%", once: true },
        }
      );
      gsap.fromTo(
        ".disconnect-badge",
        { rotate: -60, scale: 0.4, opacity: 0 },
        {
          rotate: 0,
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(3)",
          stagger: 0.08,
          scrollTrigger: { trigger: ".disconnect-list", start: "top 82%", once: true },
        }
      );

      // Right card: numbers pop in, the line draws itself, then a
      // glowing pulse runs top to bottom along it once.
      const chainTl = gsap.timeline({
        scrollTrigger: { trigger: ".chain-list", start: "top 78%", once: true },
      });
      chainTl
        .fromTo(
          ".chain-node",
          { opacity: 0, scale: 0.5, x: -16 },
          { opacity: 1, scale: 1, x: 0, duration: 0.45, ease: "back.out(2.2)", stagger: 0.1 }
        )
        .fromTo(".chain-line-draw", { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power2.out" }, "-=0.5")
        .fromTo(
          ".chain-pulse",
          { top: "0%", opacity: 0 },
          { top: "100%", opacity: 1, duration: 1.3, ease: "power1.inOut" },
          "-=0.1"
        )
        .to(".chain-pulse", { opacity: 0, duration: 0.35 });

      // If either `once` ScrollTrigger above never fires (mis-measured
      // layout, an extremely fast scroll past the trigger, very late JS),
      // these targets would otherwise stay stuck at opacity:0 forever.
      const failsafe = scheduleRevealFailsafe(".disconnect-item, .disconnect-badge, .chain-node");
      tiltCleanups.push(() => failsafe.kill());

      // Subtle hover tilt on both comparison cards. Listeners aren't
      // GSAP animations, so ctx.revert() won't remove them — tracked
      // here and torn down explicitly in this effect's cleanup instead.
      gsap.utils.toArray<HTMLElement>(".tilt-card").forEach((card) => {
        const rotateX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power3.out" });
        const rotateY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          rotateX(-py * 6);
          rotateY(px * 6);
        };
        const onLeave = () => {
          rotateX(0);
          rotateY(0);
        };
        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", onLeave);
        });
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      tiltCleanups.forEach((fn) => fn());
    };
  }, [reducedMotion]);

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-cream-2">
      {/* Faint decorative cloud/paper-plane motif — pure background texture,
          very low opacity, drifting slowly. Purely optional flourish: if it
          ever reads as clutter rather than texture, delete this block and
          nothing else in the section depends on it. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 60"
        className="accent-dot-a pointer-events-none absolute -right-6 top-10 h-28 w-auto text-navy opacity-[0.06] sm:top-16 sm:h-36"
        fill="currentColor"
      >
        <path d="M25 45c-8 0-14-6-14-13 0-6 4-11 10-13 1-8 8-14 16-14 7 0 13 4 15 11 7 1 12 7 12 14 0 8-6 15-15 15H25z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="accent-dot-b pointer-events-none absolute bottom-10 left-[-2rem] h-20 w-auto rotate-[18deg] text-turquoise opacity-[0.08] sm:h-24"
        fill="currentColor"
      >
        <path d="M6 52L92 8 62 90l-14-30-14 10-4-16 20-14z" />
      </svg>

      <div className="wrap">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <SplitReveal
              as="h2"
              text="Your Business Doesn’t Need More Marketing."
              className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl"
            />
            <SplitReveal
              as="h2"
              text="It Needs Marketing That Works."
              delay={0.1}
              className="mt-1 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-turquoise sm:text-6xl lg:text-7xl"
            />
          </div>
          <div className="lg:border-l lg:border-navy/15 lg:pl-16">
            <span aria-hidden="true" className="block h-1 w-16 rounded-full bg-turquoise" />
            <SplitReveal
              as="p"
              text="We turn digital challenges into simple strategies, better leads, and real business growth."
              delay={0.2}
              className="mt-6 font-editorial text-2xl italic leading-snug text-ink/70 sm:text-3xl lg:text-4xl"
            />
            <p className="mt-6 flex flex-wrap items-center gap-2 text-base font-semibold uppercase tracking-[0.15em] sm:text-lg">
              <span className="text-ink/75 line-through decoration-2 decoration-coral/70">Less Noise.</span>
              <span className="text-turquoise">More Results.</span>
            </p>
          </div>
        </div>

        {/* Both cards keep their own color at rest and on hover — no full
            background swap. Instead a thin accent strip fades in along the
            top edge and the card lifts slightly, a subtler "this one's
            active" cue than inverting the whole card. */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-6" style={{ perspective: 1200 }}>
          <div
            className="tilt-card disconnect-list group relative flex flex-col justify-center overflow-hidden rounded-[var(--radius-lg)] border border-navy/10 bg-white p-8 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 hover:shadow-lg sm:p-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-navy transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ink/40">Working in isolation</p>
            <ul className="mt-8 space-y-4">
              {disconnects.map((item) => (
                <li key={item} className="disconnect-item flex items-start gap-3 text-lg font-medium text-navy-3 sm:text-xl">
                  <span
                    aria-hidden="true"
                    className="disconnect-badge mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-coral/40 text-[10px] font-bold text-coral"
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="tilt-card chain-list group relative flex flex-col justify-center overflow-hidden rounded-[var(--radius-lg)] bg-navy p-8 text-cream shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 will-change-transform hover:-translate-y-1 hover:shadow-lg sm:p-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cream transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-turquoise">AMREN connects the system</p>
            <div className="relative mt-8">
              <div className="flex flex-col gap-8">
                {chain.map((step, i) => (
                  <div key={step.label} className="chain-node flex items-center gap-4">
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-navy font-display text-sm font-semibold ${step.ring} ${step.accent}`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-xl font-semibold uppercase tracking-tight sm:text-2xl">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Connector track: static base line, an animated "draw"
                  overlay, and the traveling pulse — all pinned exactly
                  between the first and last node's center. */}
              <div aria-hidden="true" className="pointer-events-none absolute left-[18px] top-[18px] bottom-[18px] w-px -translate-x-1/2">
                <div className="absolute inset-0 bg-cream/15" />
                <div className="chain-line-draw absolute inset-0 origin-top bg-turquoise/60" style={{ transform: "scaleY(0)" }} />
                <div
                  className="chain-pulse absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise opacity-0"
                  style={{ top: "0%", boxShadow: "0 0 10px 3px rgba(63,168,172,0.6)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
