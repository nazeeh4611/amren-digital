"use client";

import { site } from "@/content/site";
import { Logo } from "@/components/navigation/Logo";
import { trackEvent } from "@/lib/track";

/**
 * Deliberately nav-free header for /lp/* pages — no links out to the rest
 * of the site, just the wordmark for trust and a direct phone/WhatsApp
 * path. Keeps the visitor on the one page built to convert this click.
 */
export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-md">
      <div className="wrap flex items-center justify-between py-3 sm:py-4">
        <Logo tone="dark" />
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={site.contact.phoneHref}
            onClick={() => trackEvent("phone_click", { label: "lp_header" })}
            className="hidden text-sm font-semibold text-ink/70 transition-colors hover:text-ink sm:inline"
          >
            {site.contact.phone}
          </a>
          <a
            href={site.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { label: "lp_header" })}
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5 sm:text-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
