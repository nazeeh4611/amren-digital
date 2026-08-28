import { clients } from "@/content/clients";
import { FadeIn, Stagger, StaggerItem } from "@/components/animations/FadeIn";

export function TrustClients() {
  return (
    <section className="section bg-navy text-cream">
      <div className="wrap text-center">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-2">
            Trusted By Businesses Building What&rsquo;s Next
          </p>
        </FadeIn>

        {clients.length === 0 ? (
          <FadeIn delay={0.1} className="mx-auto mt-10 max-w-xl rounded-[var(--radius-lg)] border border-dashed border-cream/25 px-8 py-10">
            <p className="text-sm text-cream/60">
              Client logos will appear here once approved for public display. AMREN never publishes a client
              relationship without permission.
            </p>
          </FadeIn>
        ) : (
          <Stagger className="mt-10 flex flex-wrap items-center justify-center gap-10" staggerDelay={0.05}>
            {clients.map((client) => (
              <StaggerItem key={client.name}>
                <span className="inline-block text-sm font-semibold uppercase tracking-wide text-cream/70 opacity-80 transition-opacity duration-300 hover:opacity-100">
                  {client.name}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </div>
    </section>
  );
}
