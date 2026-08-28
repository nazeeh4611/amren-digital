import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { SplitReveal } from "@/components/animations/SplitReveal";

export const metadata: Metadata = buildMetadata({
  title: "Join the Growth List | AMREN Digital",
  description:
    "Register your interest for an upcoming AMREN Digital consultation slot. Tell us what you want to grow and we'll reach out.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Waitlist", path: "/waitlist" }]} />

      <section className="wrap grid gap-14 pb-24 pt-8 sm:pt-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <Eyebrow accent="gold">Waitlist</Eyebrow>
          <SplitReveal
            as="h1"
            text="Get on the growth list."
            trigger="mount"
            className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-navy sm:text-6xl"
          />
          <p className="mt-6 max-w-md text-lg text-navy/70">
            Register your interest for an upcoming consultation slot with AMREN. Tell us what you want to grow, and
            we&rsquo;ll be in touch to schedule a conversation.
          </p>
          <div className="mt-10">
            <AssetPlaceholder type="background" label="Growth List" motif="chart" aspectRatio="4/3" tone={1} />
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
