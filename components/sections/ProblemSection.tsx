"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { SplitReveal } from "@/components/animations/SplitReveal";

const chain: { label: string; accent: string; ring: string }[] = [
  { label: "Ads", accent: "text-blue-2", ring: "border-blue-2/50" },
  { label: "Website", accent: "text-coral-2", ring: "border-coral-2/50" },
  { label: "Lead", accent: "text-gold-2", ring: "border-gold-2/50" },
  { label: "Tracking", accent: "text-blue-2", ring: "border-blue-2/50" },
  { label: "Retargeting", accent: "text-coral-2", ring: "border-coral-2/50" },
  { label: "Growth", accent: "text-gold-2", ring: "border-gold-2/50" },
];

const disconnects = [
  "Ads running separately from everything else",
  "Social media disconnected from the offer",
  "Websites that don't convert visitors into enquiries",
  "SEO treated as its own island",
  "Leads received with no consistent follow-up",
  "Data collected without ever becoming useful tracking",
];

export function ProblemSection() {
  return (
    <section className="section bg-cream">
      <div className="wrap">
        <Eyebrow accent="gold">The Problem</Eyebrow>
        <SplitReveal
          as="h2"
          text="Your business doesn’t need more marketing."
          className="mt-5 max-w-4xl font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-6xl lg:text-7xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl font-editorial text-2xl italic text-navy/70 sm:text-3xl"
        >
          It needs marketing that works together.
        </motion.p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ul className="space-y-4">
            {disconnects.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-3 text-base text-navy/70 sm:text-lg"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="rounded-[var(--radius-lg)] bg-navy p-8 text-cream sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-2">AMREN connects the system</p>
            <div className="mt-8 flex flex-col">
              {chain.map((step, i) => (
                <div key={step.label} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 py-3"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-display text-sm font-semibold ${step.ring} ${step.accent}`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display text-xl font-semibold uppercase tracking-tight sm:text-2xl">{step.label}</span>
                  </motion.div>
                  {i < chain.length - 1 && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + 0.15 }}
                      style={{ transformOrigin: "top" }}
                      className="ml-[18px] block h-6 w-px bg-gold/40"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
