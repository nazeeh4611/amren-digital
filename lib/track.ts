/**
 * Thin wrapper around gtag/fbq for conversion-relevant interactions
 * (WhatsApp click, phone click, form submissions, CTA clicks). No-ops
 * silently if analytics hasn't loaded — consent-gated scripts in
 * AnalyticsScripts.tsx may not have injected window.gtag/fbq yet.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export type TrackEventName =
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "cta_click"
  | "contact_form_submit"
  | "audit_form_submit"
  | "waitlist_form_submit"
  | "generate_lead"
  | "form_start"
  | "landing_page_cta_click";

export function trackEvent(name: TrackEventName, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
    window.fbq?.("trackCustom", name, params);
  } catch {
    // analytics not available — never let tracking break the interaction it's tracking
  }
}

/**
 * Fires a Google Ads conversion via gtag's `send_to` — the format Google
 * Ads requires ("AW-XXXXXXX/AbC-D_efG-h123") is expected complete in
 * NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL. No-ops if that env var isn't
 * set — never invents a placeholder conversion label.
 */
export function trackConversion(params?: Record<string, string>) {
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (typeof window === "undefined" || !sendTo) return;
  try {
    window.gtag?.("event", "conversion", { send_to: sendTo, ...params });
  } catch {
    // analytics not available — never let tracking break the interaction it's tracking
  }
}
