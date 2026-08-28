"use client";

import { site } from "@/content/site";
import { trackEvent } from "@/lib/track";

/**
 * Fixed bottom bar, mobile/tablet only — most paid-traffic visitors land
 * on mobile, and the primary CTA should never require a scroll back up.
 * Sits below `lg` where the on-page hero CTAs are already comfortably
 * reachable.
 */
export function StickyMobileCTA({ leadMagnetLabel, serviceSlug }: { leadMagnetLabel: string; serviceSlug: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy/10 bg-cream/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href="#lead-form"
        onClick={() => trackEvent("landing_page_cta_click", { label: "sticky_bar", service: serviceSlug })}
        className="flex-1 truncate rounded-full bg-gold px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-cream"
      >
        {leadMagnetLabel}
      </a>
      <a
        href={site.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click", { label: "sticky_bar", service: serviceSlug })}
        className="flex items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white"
        aria-label="Chat with AMREN Digital on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  );
}
