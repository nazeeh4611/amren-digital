import { NextResponse } from "next/server";
import { resend, emailFrom, escapeHtml } from "@/lib/resend";

/**
 * Minimal lead capture for the homepage quick-contact form and the
 * first-visit welcome modal — name + phone only, unlike /api/lead which
 * also requires an email address for the full landing-page form.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const str = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");
  const name = str("name");
  const phone = str("phone");
  const pageSource = str("pageSource");

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const contactEmailTo = process.env.CONTACT_TO_EMAIL;

  if (!resend || !contactEmailTo) {
    console.warn("[quick-lead] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — lead logged only, not delivered.", {
      name,
      phone,
    });
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Name", name],
    ["Phone / WhatsApp", phone],
    ["Source", pageSource],
  ].filter(([, value]) => value);

  try {
    await resend.emails.send({
      from: emailFrom,
      to: contactEmailTo,
      subject: `New quick lead: ${name}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<table>${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table>`,
    });
  } catch (error) {
    console.error("[quick-lead] Failed to send quick lead email", error);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
