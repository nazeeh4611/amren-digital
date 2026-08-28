import { Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function TrustBar({ bullets }: { bullets: string[] }) {
  return (
    <section className="border-y border-navy/10 bg-cream-2 py-6">
      <Stagger className="wrap flex flex-wrap items-center gap-x-8 gap-y-3" staggerDelay={0.05}>
        {bullets.map((bullet) => (
          <StaggerItem key={bullet} className="flex items-center gap-2.5 text-sm text-navy/70">
            <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {bullet}
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
