import { site } from "@/content/site";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { FadeIn } from "@/components/animations/FadeIn";
import { TiltCard } from "@/components/animations/TiltCard";
import { ImageReveal } from "@/components/animations/ImageReveal";

export function VenturesConnection() {
  return (
    <section className="section bg-white">
      <div className="wrap">
        <FadeIn>
          <div className="grid items-center gap-10 rounded-[var(--radius-lg)] border border-navy/10 bg-cream p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ImageReveal className="rounded-[var(--radius-card)]">
              <TiltCard>
                <AssetPlaceholder type="background" label={site.parent.name} motif="mark" tone={3} aspectRatio="4/5" decorative />
              </TiltCard>
            </ImageReveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue">Part of a bigger picture</p>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-5xl">
                Digital is one part of the bigger picture.
              </h2>
              <p className="mt-5 max-w-xl text-ink/70">
                AMREN Digital is part of <strong className="text-ink">{site.parent.name}</strong>, a broader business
                group with multiple ventures.
              </p>
              <div className="mt-6 rounded-[var(--radius-md)] border border-navy/10 bg-white p-5">
                <p className="font-display text-xl font-bold text-ink">{site.parent.name}</p>
                <p className="mt-1 text-sm text-ink/60">{site.parent.description}</p>
              </div>
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ink underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-blue"
              >
                Explore {site.parent.name} →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
