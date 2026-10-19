import { NextResponse } from "next/server";
import { pushRecord, storeEnabled } from "@/lib/store";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const clip = (v: unknown, n = 300) => (typeof v === "string" ? v.slice(0, n) : "");

/** First-party, cookieless analytics + lead log feeding /admin. */
export async function POST(request: Request) {
  if (!storeEnabled) return NextResponse.json({ ok: true });
  if (isRateLimited(`events:${getClientIp(request)}`, 120, 60 * 1000)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(await request.text());
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ua = request.headers.get("user-agent") || "";
  if (/bot|crawl|spider|slurp|headless|lighthouse/i.test(ua)) return NextResponse.json({ ok: true });

  const base = {
    t: Date.now(),
    path: clip(body.path),
    ref: clip(body.ref),
    country: request.headers.get("x-vercel-ip-country") || "",
    city: decodeURIComponent(request.headers.get("x-vercel-ip-city") || ""),
    device: /mobile|android|iphone/i.test(ua) ? "mobile" : /ipad|tablet/i.test(ua) ? "tablet" : "desktop",
    utm: clip(body.utm, 200),
  };

  try {
    if (body.type === "lead" && body.data && typeof body.data === "object") {
      const data = Object.fromEntries(
        Object.entries(body.data as Record<string, unknown>).slice(0, 30).map(([k, v]) => [clip(k, 60), clip(String(v), 2000)]),
      );
      await pushRecord("leads", { ...base, source: clip(body.source, 60), data });
    } else {
      const params = body.params && typeof body.params === "object" ? (body.params as Record<string, unknown>) : {};
      await pushRecord("events", {
        ...base,
        name: clip(body.name, 60) || "pageview",
        params: Object.fromEntries(Object.entries(params).slice(0, 10).map(([k, v]) => [clip(k, 60), clip(String(v), 200)])),
      });
    }
  } catch (error) {
    console.error("[events] store write failed", error);
  }
  return NextResponse.json({ ok: true });
}
