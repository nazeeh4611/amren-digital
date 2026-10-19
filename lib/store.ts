/**
 * Tiny Upstash Redis REST client (no dependency). Works with either the
 * Upstash env names or the ones Vercel's Upstash/KV integration injects.
 * No-ops when unset, so the site keeps working without a store.
 */
const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

export const storeEnabled = Boolean(url && token);

export const MAX_EVENTS = 50000;
export const MAX_LEADS = 5000;

async function pipeline(commands: (string | number)[][]): Promise<unknown[]> {
  if (!url || !token) return [];
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Store request failed: ${res.status}`);
  const data = (await res.json()) as { result: unknown }[];
  return data.map((d) => d.result);
}

export async function pushRecord(key: "events" | "leads", record: object) {
  const max = key === "events" ? MAX_EVENTS : MAX_LEADS;
  await pipeline([
    ["LPUSH", key, JSON.stringify(record)],
    ["LTRIM", key, 0, max - 1],
  ]);
}

export async function readRecords<T>(key: "events" | "leads"): Promise<T[]> {
  const [list] = await pipeline([["LRANGE", key, 0, -1]]);
  return ((list as string[]) || []).flatMap((s) => {
    try {
      return [JSON.parse(s) as T];
    } catch {
      return [];
    }
  });
}
