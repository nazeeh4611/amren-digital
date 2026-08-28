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
  const industry = str("industry");
  const mainService = str("mainService");
  const budget = str("budget");
  const contactMethod = str("contactMethod");
  const challenge = str("challenge");
  const channels = Array.isArray(body.channels) ? body.channels.filter((c): c is string => typeof c === "string") : [];

  if (!name || !businessName || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

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
    ["Monthly Ad Budget", budget],
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
