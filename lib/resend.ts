import { Resend } from "resend";

export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Resend requires a sender on a domain verified in the Resend dashboard.
// Until digital.amren.ae (or another domain) is verified there, this falls
// back to Resend's shared test sender, which works with any recipient.
export const emailFrom = process.env.RESEND_FROM_EMAIL || "AMREN Digital <onboarding@resend.dev>";

const htmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}
