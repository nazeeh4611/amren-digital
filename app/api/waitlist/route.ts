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

  if (isRateLimited(`waitlist:${getClientIp(request)}`)) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const whatsappRaw = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim() : "";

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }
  if (
    !withinLimit(name, FIELD_LIMITS.short) ||
    !withinLimit(company, FIELD_LIMITS.short) ||
    !withinLimit(whatsappRaw, FIELD_LIMITS.short) ||
    !withinLimit(website, FIELD_LIMITS.short) ||
    !withinLimit(goal, FIELD_LIMITS.long)
  ) {
    return NextResponse.json({ ok: false, error: "One or more fields is too long" }, { status: 400 });
  }

  const whatsapp = whatsappRaw ? normalizePhone(whatsappRaw) ?? whatsappRaw : "";

  const contactEmailTo = process.env.CONTACT_TO_EMAIL;

  if (!resend || !contactEmailTo) {
    console.warn("[waitlist] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — signup logged only, not delivered.", {
      name,
      email,
    });
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Company", company],
    ["WhatsApp", whatsapp],
    ["Website", website],
  ].filter(([, value]) => value);

  try {
    await resend.emails.send({
      from: emailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New waitlist signup from ${name}${company ? ` (${company})` : ""}`,
      text: [...rows.map(([label, value]) => `${label}: ${value}`), "", "Goal:", goal || "(not provided)"].join("\n"),
      html: `
        <table>${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table>
        <p><strong>Goal:</strong></p>
        <p>${goal ? escapeHtml(goal).replace(/\n/g, "<br />") : "(not provided)"}</p>
      `,
    });
  } catch (error) {
    console.error("[waitlist] Failed to send signup email", error);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
