import { NextResponse } from "next/server";
import { resend, emailFrom, escapeHtml } from "@/lib/resend";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";
import { FIELD_LIMITS, HONEYPOT_FIELD, isValidEmail, normalizePhone, withinLimit } from "@/lib/validation";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD].length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (isRateLimited(`contact:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const phoneRaw = typeof body.phone === "string" ? body.phone.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const service = typeof body.service === "string" ? body.service.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (
    !withinLimit(name, FIELD_LIMITS.short) ||
    !withinLimit(company, FIELD_LIMITS.short) ||
    !withinLimit(phoneRaw, FIELD_LIMITS.short) ||
    !withinLimit(website, FIELD_LIMITS.short) ||
    !withinLimit(service, FIELD_LIMITS.short) ||
    !withinLimit(message, FIELD_LIMITS.long)
  ) {
    return NextResponse.json({ ok: false, error: "One or more fields is too long" }, { status: 400 });
  }

  const phone = phoneRaw ? normalizePhone(phoneRaw) ?? phoneRaw : "";

  const contactEmailTo = process.env.CONTACT_TO_EMAIL;

  if (!resend || !contactEmailTo) {
    console.warn("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — enquiry logged only, not delivered.", {
      name,
      email,
    });
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["Phone / WhatsApp", phone],
    ["Website", website],
    ["Service", service],
  ].filter(([, value]) => value);

  try {
    await resend.emails.send({
      from: emailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      text: [...rows.map(([label, value]) => `${label}: ${value}`), "", "Message:", message].join("\n"),
      html: `
        <table>${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });
  } catch (error) {
    console.error("[contact] Failed to send enquiry email", error);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
