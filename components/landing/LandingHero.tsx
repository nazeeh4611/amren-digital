import { site } from "@/content/site";
import { Button } from "@/components/buttons/Button";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { ImageReveal } from "@/components/animations/ImageReveal";
import { SplitReveal } from "@/components/animations/SplitReveal";
import { LeadForm } from "@/components/landing/LeadForm";
import type { Motif } from "@/components/assets/AssetPlaceholder";

/**
 * The lead form lives here, under the hero image, rather than further down
 * the page — a paid-traffic visitor should be able to enquire without
 * scrolling at all. Every other CTA on the page (#lead-form) just jumps
 * back up to this one form instead of a second copy further down.
 */
export function LandingHero({
  kicker,
  headline,
  subheadline,
  leadMagnetLabel,
  leadMagnetDescription,
  assetMotif,
  assetTone,
  assetLabel,
  serviceSlug,
  serviceTitle,
  goalOptions,
}: {
  kicker: string;
  headline: string;
  subheadline: string;
  leadMagnetLabel: string;
  leadMagnetDescription: string;
  assetMotif: Motif;
  assetTone: number;
  assetLabel: string;
  serviceSlug: string;
  serviceTitle: string;
  goalOptions: string[];
}) {
  return (
    <section className="wrap grid gap-10 pb-14 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div className="lg:py-4">
        <Eyebrow accent="gold">{kicker}</Eyebrow>
        <SplitReveal
          as="h1"
          text={headline}
          trigger="mount"
          className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
        />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">{subheadline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href="#lead-form" variant="primary">
            {leadMagnetLabel}
          </Button>
          <Button href={site.contact.whatsapp} variant="ghost">
            Talk to AMREN
          </Button>
        </div>

        <p className="mt-5 text-xs uppercase tracking-wide text-ink/45">
          No obligation · Dubai, UAE · Response within 1–2 business days
        </p>
      </div>

      <div>
        <ImageReveal className="rounded-[var(--radius-lg)]">
          <AssetPlaceholder
            type="dashboard-screenshot"
            label={assetLabel}
            alt={`${assetLabel} — AMREN Digital`}
            motif={assetMotif}
            tone={assetTone}
            aspectRatio="16/9"
            priority
          />
        </ImageReveal>

        <div className="mt-6">
          <LeadForm
            serviceSlug={serviceSlug}
            serviceTitle={serviceTitle}
            goalOptions={goalOptions}
            leadMagnetLabel={leadMagnetLabel}
            leadMagnetDescription={leadMagnetDescription}
          />
        </div>
      </div>
    </section>
  );
}
