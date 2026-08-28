"use client";

import { usePathname } from "next/navigation";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";

/**
 * The floating WhatsApp button is site-wide chrome — but /lp/* pages have
 * their own sticky mobile CTA bar with WhatsApp built in (StickyMobileCTA),
 * plus a WhatsApp link in LandingHeader. A second floating button would
 * just be visual clutter stacked on top of those.
 */
export function ChromeExtras() {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp/")) return null;
  return <WhatsAppButton />;
}
