import { NextResponse } from "next/server";
import { resend, emailFrom, escapeHtml } from "@/lib/resend";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const str = (key: string) => (typeof body[key] === "string" ? (body[key] as string).trim() : "");
  const name = str("name");
  const businessName = str("businessName");
  const email = str("email");
  const phone = str("phone");
  const website = str("website");
  const serviceTitle = str("serviceTitle");
  const goal = str("goal");
  const budget = str("budget");
  const pageSource = str("pageSource");

  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const contactEmailTo = process.env.CONTACT_TO_EMAIL;

  if (!resend || !contactEmailTo) {
    console.warn("[lead] RESEND_API_KEY or CONTACT_TO_EMAIL is not set — landing page lead logged only, not delivered.", {
      name,
      email,
      serviceTitle,
    });
    return NextResponse.json({ ok: true });
  }

  const rows = [
    ["Name", name],
    ["Business Name", businessName],
    ["Email", email],
    ["Phone / WhatsApp", phone],
    ["Website", website],
    ["Service", serviceTitle],
    ["Goal", goal],
    ["Monthly Budget", budget],
    ["Landing Page", pageSource],
  ].filter(([, value]) => value);

  try {
    await resend.emails.send({
      from: emailFrom,
      to: contactEmailTo,
      replyTo: email,
      subject: `New landing page lead: ${serviceTitle || "General"} — ${name}${businessName ? ` (${businessName})` : ""}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
      html: `<table>${rows.map(([label, value]) => `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table>`,
    });
  } catch (error) {
    console.error("[lead] Failed to send landing page lead email", error);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
