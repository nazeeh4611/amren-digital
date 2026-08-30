import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import clsx from "clsx";

export type PlaceholderType =
  | "hero"
  | "service"
  | "portfolio"
  | "video"
  | "client-logo"
  | "testimonial-photo"
  | "team-photo"
  | "social"
  | "website-screenshot"
  | "dashboard-screenshot"
  | "background";

export type Motif = "search" | "social" | "chart" | "browser" | "play" | "nodes" | "phone" | "portrait" | "mark";

const motifByType: Record<PlaceholderType, Motif> = {
  hero: "mark",
  service: "chart",
  portfolio: "browser",
  video: "play",
  "client-logo": "mark",
  "testimonial-photo": "portrait",
  "team-photo": "portrait",
  social: "phone",
  "website-screenshot": "browser",
  "dashboard-screenshot": "chart",
  background: "mark",
};

/**
 * Deterministic, human-readable seed so the same placeholder slot always
 * resolves to the same file path across reloads and builds.
 */
function toSeed(...parts: (string | number | undefined)[]) {
  return parts
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * A predictable local path under /public/placeholders — drop a .webp with
 * this exact name in there and it replaces this slot everywhere it's
 * used, no code change needed. Until a file exists, next/image just fails
 * to load it and the tinted color wash + label underneath (below) still
 * shows, so the slot stays legible rather than breaking.
 */
function placeholderPath(seed: string) {
  return `/placeholders/${seed}.webp`;
}

/**
 * Server-only check (no "use client" anywhere in this component's callers)
 * for whether a real file has actually been dropped into
 * public/placeholders for this slot. Runs at build time for static pages,
 * so a file added after a production build needs a rebuild to show up —
 * same as any other file under /public.
 */
function hasRealPlaceholderFile(seed: string) {
  try {
    return existsSync(path.join(process.cwd(), "public", "placeholders", `${seed}.webp`));
  } catch {
    return false;
  }
}

export function AssetPlaceholder({
  type,
  label,
  src,
  alt,
  aspectRatio,
  motif,
  priority,
  className,
  rounded = true,
  sizes,
  tone = 0,
  decorative = false,
  showLabel = true,
  fillHeight = false,
}: {
  type: PlaceholderType;
  label?: string;
  src?: string | null;
  alt?: string;
  aspectRatio?: string;
  motif?: Motif;
  priority?: boolean;
  className?: string;
  rounded?: boolean;
  sizes?: string;
  tone?: number;
  decorative?: boolean;
  showLabel?: boolean;
  /** Skip aspect-ratio sizing and just fill the parent's own height (for full-bleed bands). */
  fillHeight?: boolean;
}) {
  const ratio = aspectRatio || (type === "hero" ? "16/9" : type === "portfolio" ? "4/3" : "4/5");
  const seed = toSeed(type, label, motif || motifByType[type], tone);
  const finalSrc = src || placeholderPath(seed);
  // True once a real file has been dropped in — either an explicit `src`
  // from the caller, or a manually-added local file matching this slot's
  // seed. While still empty, this renders a plain light placeholder card
  // with the exact file path printed on it — no dark color block, no
  // broken-image icon, and no separate doc to cross-reference to find
  // out what to name the file.
  const isPlaceholder = !src && !hasRealPlaceholderFile(seed);

  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        isPlaceholder ? "border border-dashed border-navy/20 bg-cream-2" : undefined,
        rounded && "rounded-[var(--radius-card)]",
        className
      )}
      style={fillHeight ? undefined : { aspectRatio: ratio.replace("/", " / ") }}
    >
      {isPlaceholder ? (
        showLabel && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7 text-navy/30" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="break-all font-mono text-[10px] leading-relaxed text-navy/50">
              public/placeholders/{seed}.webp
            </span>
          </div>
        )
      ) : (
        <Image
          src={finalSrc}
          alt={decorative ? "" : alt || label || "AMREN Digital"}
          fill
          priority={priority}
          sizes={sizes || "(min-width: 1024px) 50vw, 100vw"}
          className="object-cover"
        />
      )}
    </div>
  );
}
