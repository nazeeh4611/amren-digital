import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";
import { Eyebrow } from "@/components/typography/Eyebrow";
import { WaitlistForm } from "@/components/forms/WaitlistForm";
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
            className="mt-5 font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-6xl"
          />
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Register your interest for an upcoming consultation slot with AMREN. Tell us what you want to grow, and
            we&rsquo;ll be in touch to schedule a conversation.
          </p>
          <div className="mt-10 space-y-6 border-t border-navy/10 pt-8">
            {[
              { step: "01", title: "You register", description: "Tell us what you want to grow and a bit about your business." },
              { step: "02", title: "We review", description: "We look at your goals and match you to the right slot and specialist." },
              { step: "03", title: "We reach out", description: "You'll hear from us to schedule a conversation, no obligation." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="font-display text-2xl font-bold text-ink/15">{item.step}</span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-navy/10 bg-white p-6 shadow-[var(--shadow-card)] sm:p-8">
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
