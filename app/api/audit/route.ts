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

  if (isRateLimited(`audit:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const str = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");
  const name = str("name");
  const businessName = str("businessName");
  const email = str("email");
  const phoneRaw = str("phone");
  const website = str("website");
  const industry = str("industry");
  const mainService = str("mainService");
  const contactMethod = str("contactMethod");
  const challenge = str("challenge");
  const channels = Array.isArray(body.channels)
    ? body.channels.filter((c): c is string => typeof c === "string").slice(0, 20)
    : [];

  if (!name || !businessName || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (
    !withinLimit(name, FIELD_LIMITS.short) ||
    !withinLimit(businessName, FIELD_LIMITS.short) ||
    !withinLimit(phoneRaw, FIELD_LIMITS.short) ||
    !withinLimit(website, FIELD_LIMITS.short) ||
    !withinLimit(industry, FIELD_LIMITS.short) ||
    !withinLimit(mainService, FIELD_LIMITS.short) ||
    !withinLimit(contactMethod, FIELD_LIMITS.short) ||
    !withinLimit(challenge, FIELD_LIMITS.long)
  ) {
    return NextResponse.json({ ok: false, error: "One or more fields is too long" }, { status: 400 });
  }

  const phone = phoneRaw ? normalizePhone(phoneRaw) ?? phoneRaw : "";

  const contactEmailTo = process.env.CONTACT_TO_EMAIL;

  if (!resend || !contactEmailTo) {
    console.warn("[audit] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — audit request logged only, not delivered.", {
      name,
      email,
    });
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Name", name],
    ["Business Name", businessName],
    ["Email", email],
    ["Phone / WhatsApp", phone],
    ["Website", website],
    ["Industry", industry],
    ["Main Service / Product", mainService],
    ["Current Channels", channels.join(", ")],
    ["Preferred Contact Method", contactMethod],
  ].filter(([, value]) => value);

  try {
    await resend.emails.send({
      from: emailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New free digital audit request from ${name} (${businessName})`,
      text: [...rows.map(([label, value]) => `${label}: ${value}`), "", "Biggest challenge:", challenge || "(not provided)"].join(
        "\n"
      ),
      html: `
        <table>${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
        <p><strong>Biggest challenge:</strong></p>
        <p>${challenge ? escapeHtml(challenge).replace(/\n/g, "<br />") : "(not provided)"}</p>
      `,
    });
  } catch (error) {
    console.error("[audit] Failed to send audit request email", error);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
