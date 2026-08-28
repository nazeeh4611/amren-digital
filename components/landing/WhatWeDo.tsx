import { Eyebrow } from "@/components/typography/Eyebrow";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function WhatWeDo({ deliverables }: { deliverables: string[] }) {
  return (
    <section className="section bg-white">
      <div className="wrap max-w-3xl">
        <FadeIn>
          <Eyebrow accent="green">What We Actually Do</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
            No vague retainers. Here&rsquo;s the scope.
          </h2>
        </FadeIn>

        <Stagger className="mt-10 grid gap-3 sm:grid-cols-2" staggerDelay={0.04}>
          {deliverables.map((item) => (
            <StaggerItem key={item} className="flex items-start gap-3 border-b border-navy/10 pb-3 text-ink/75">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              {item}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
