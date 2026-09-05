"use client";

import { usePathname } from "next/navigation";
import { FloatingContactButtons } from "@/components/whatsapp/FloatingContactButtons";

/**
 * The floating call + WhatsApp buttons are site-wide chrome — but /lp/*
 * pages have their own sticky mobile CTA bar with WhatsApp built in
 * (StickyMobileCTA), plus a call/WhatsApp link in LandingHeader. A second
 * floating pair would just be visual clutter stacked on top of those.
 */
export function ChromeExtras() {
  const pathname = usePathname();
  if (pathname?.startsWith("/lp/")) return null;
  return <FloatingContactButtons />;
}
