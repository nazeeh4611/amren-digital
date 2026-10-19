import type { Metadata } from "next";
import { isAdmin } from "@/lib/admin-auth";
import { readRecords, storeEnabled } from "@/lib/store";

export const metadata: Metadata = { title: "Dashboard", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type Base = { t: number; path: string; ref: string; country: string; city: string; device: string; utm: string };
type Ev = Base & { name: string; params: Record<string, string> };
type Lead = Base & { source: string; data: Record<string, string> };

const RANGES: Record<string, number> = { "24h": 1, "7d": 7, "30d": 30, "90d": 90, all: 36500 };
const fmt = (t: number) => new Date(t).toLocaleString("en-GB", { timeZone: "Asia/Dubai", dateStyle: "medium", timeStyle: "short" });
const card = "rounded-2xl border border-ink/10 bg-white p-5";

function top<T>(items: T[], key: (x: T) => string, n = 10) {
  const m = new Map<string, number>();
  for (const it of items) {
    const k = key(it) || "(none)";
    m.set(k, (m.get(k) || 0) + 1);
  }
  return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, n);
}

function host(ref: string) {
  try {
    return ref ? new URL(ref).hostname.replace(/^www\./, "") : "Direct";
  } catch {
    return "Direct";
  }
}

function Table({ title, rows }: { title: string; rows: [string, number][] }) {
  const max = Math.max(1, ...rows.map((r) => r[1]));
  return (
    <div className={card}>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/60">{title}</h3>
      {rows.length === 0 && <p className="text-sm text-ink/50">No data yet</p>}
      <ul className="space-y-1.5">
        {rows.map(([k, v]) => (
          <li key={k} className="relative flex justify-between gap-3 overflow-hidden rounded px-2 py-1 text-sm">
            <span className="absolute inset-y-0 left-0 bg-gold/15" style={{ width: `${(v / max) * 100}%` }} />
            <span className="relative truncate">{k}</span>
            <span className="relative font-semibold tabular-nums">{v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Login({ error }: { error: boolean }) {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-sm flex-col justify-center px-4 py-24">
      <h1 className="mb-6 text-2xl font-semibold">Admin dashboard</h1>
      {!process.env.ADMIN_PASSWORD && <p className="mb-4 text-sm text-red-600">Set ADMIN_PASSWORD in your environment to enable login.</p>}
      <form method="post" action="/api/admin/login" className="space-y-3">
        <input type="password" name="password" required placeholder="Password" className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3" />
        {error && <p className="text-sm text-red-600">Wrong password.</p>}
        <button className="w-full rounded-lg bg-ink px-4 py-3 font-semibold text-cream">Sign in</button>
      </form>
    </main>
  );
}

export default async function AdminPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const sp = await searchParams;
  if (!(await isAdmin())) return <Login error={sp.error === "1"} />;

  const range = sp.range && RANGES[sp.range] ? sp.range : "30d";
  const since = Date.now() - RANGES[range] * 86400000;
  const [allEvents, allLeads] = storeEnabled
    ? await Promise.all([readRecords<Ev>("events"), readRecords<Lead>("leads")])
    : [[], []];
  const events = allEvents.filter((e) => e.t >= since);
  const leads = allLeads.filter((l) => l.t >= since);
  const views = events.filter((e) => e.name === "pageview");
  const clicks = events.filter((e) => e.name !== "pageview");
  const count = (n: string) => clicks.filter((e) => e.name === n).length;
  const conv = views.length ? ((leads.length / views.length) * 100).toFixed(2) : "0";

  const days = Math.min(RANGES[range], 30);
  const daily = Array.from({ length: days }, (_, i) => {
    const d = new Date(Date.now() - (days - 1 - i) * 86400000).toISOString().slice(0, 10);
    return {
      d,
      v: views.filter((e) => new Date(e.t).toISOString().slice(0, 10) === d).length,
      l: leads.filter((e) => new Date(e.t).toISOString().slice(0, 10) === d).length,
    };
  });
  const dmax = Math.max(1, ...daily.map((x) => x.v));

  const stats: [string, string | number][] = [
    ["Page views", views.length],
    ["Leads", leads.length],
    ["Conversion", `${conv}%`],
    ["WhatsApp clicks", count("whatsapp_click")],
    ["Phone clicks", count("phone_click")],
    ["Email clicks", count("email_click")],
    ["CTA clicks", count("cta_click") + count("landing_page_cta_click")],
    ["Form starts", count("form_start")],
  ];

  const csv =
    "data:text/csv;charset=utf-8," +
    encodeURIComponent(
      ["date,source,name,email,phone,business,service,page,country,referrer"]
        .concat(
          leads.map((l) =>
            [fmt(l.t), l.source, l.data.name, l.data.email, l.data.phone, l.data.businessName || l.data.company, l.data.serviceTitle || l.data.service, l.path, l.country, host(l.ref)]
              .map((v) => `"${(v || "").replace(/"/g, '""')}"`)
              .join(","),
          ),
        )
        .join("\n"),
    );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Website dashboard</h1>
        <div className="flex flex-wrap items-center gap-2">
          {Object.keys(RANGES).map((r) => (
            <a key={r} href={`/admin?range=${r}`} className={`rounded-full px-3 py-1 text-sm ${r === range ? "bg-ink text-cream" : "border border-ink/20"}`}>
              {r}
            </a>
          ))}
          <form method="post" action="/api/admin/login">
            <button name="action" value="logout" className="rounded-full border border-ink/20 px-3 py-1 text-sm">Log out</button>
          </form>
        </div>
      </div>

      {!storeEnabled && (
        <p className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-700">
          No database connected. Add an Upstash Redis store (Vercel → Storage) so UPSTASH_REDIS_REST_URL / KV_REST_API_URL is set, then redeploy.
        </p>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stats.map(([k, v]) => (
          <div key={k} className={card}>
            <p className="text-xs uppercase tracking-wide text-ink/50">{k}</p>
            <p className="mt-1 text-3xl font-semibold tabular-nums">{v}</p>
          </div>
        ))}
      </div>

      <div className={`${card} mt-4`}>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/60">Daily views (bars) & leads (number) — last {days} days</h3>
        <div className="flex h-40 items-end gap-1">
          {daily.map((x) => (
            <div key={x.d} className="flex flex-1 flex-col items-center justify-end gap-1" title={`${x.d}: ${x.v} views, ${x.l} leads`}>
              {x.l > 0 && <span className="text-[10px] font-bold text-gold">{x.l}</span>}
              <div className="w-full rounded-t bg-ink/70" style={{ height: `${(x.v / dmax) * 100}%`, minHeight: x.v ? 2 : 0 }} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Table title="Top pages" rows={top(views, (e) => e.path)} />
        <Table title="Traffic sources" rows={top(views, (e) => host(e.ref))} />
        <Table title="Campaigns (UTM)" rows={top(views.filter((e) => e.utm), (e) => e.utm)} />
        <Table title="Countries" rows={top(views, (e) => e.country)} />
        <Table title="Devices" rows={top(views, (e) => e.device)} />
        <Table title="Leads by form" rows={top(leads, (l) => l.source)} />
        <Table title="Leads by page" rows={top(leads, (l) => l.path)} />
        <Table title="Leads by source" rows={top(leads, (l) => host(l.ref))} />
        <Table title="All click events" rows={top(clicks, (e) => e.name, 15)} />
        <Table title="Clicks by page" rows={top(clicks, (e) => `${e.name} · ${e.path}`)} />
      </div>

      <div className={`${card} mt-4 overflow-x-auto`}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">Leads ({leads.length})</h3>
          <a href={csv} download="leads.csv" className="rounded-full border border-ink/20 px-3 py-1 text-sm">Export CSV</a>
        </div>
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="text-xs uppercase text-ink/50">
            <tr><th className="py-2">Date (Dubai)</th><th>Form</th><th>Details</th><th>Page</th><th>From</th></tr>
          </thead>
          <tbody>
            {leads.map((l, i) => (
              <tr key={i} className="border-t border-ink/10 align-top">
                <td className="whitespace-nowrap py-2 pr-3">{fmt(l.t)}</td>
                <td className="pr-3">{l.source}</td>
                <td className="pr-3">
                  {Object.entries(l.data).map(([k, v]) => (
                    <div key={k}><span className="text-ink/50">{k}:</span> {v}</div>
                  ))}
                </td>
                <td className="pr-3">{l.path}</td>
                <td>{host(l.ref)}{l.utm && <div className="text-ink/50">{l.utm}</div>}{l.country && <div className="text-ink/50">{l.city ? `${l.city}, ` : ""}{l.country} · {l.device}</div>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
