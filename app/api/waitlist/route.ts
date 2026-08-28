import { NextResponse } from "next/server";
import { resend, emailFrom, escapeHtml } from "@/lib/resend";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const whatsapp = typeof body.whatsapp === "string" ? body.whatsapp.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";
  const goal = typeof body.goal === "string" ? body.goal.trim() : "";

  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

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
