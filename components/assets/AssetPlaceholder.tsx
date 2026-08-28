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

// Flat, solid brand-color tints laid over a real photo (never a gradient) —
// picked for reliable contrast against the cream/white label sitting on top.
const solidTones = ["bg-navy", "bg-blue", "bg-coral", "bg-navy-3", "bg-navy-2"];

/**
 * Deterministic seed so the same placeholder slot always gets the same free
 * stock photo (via Picsum Photos — no API key, no attribution wall) across
 * reloads and builds, rather than a random one on every render.
 */
function toSeed(...parts: (string | number | undefined)[]) {
  return parts
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stockPhotoUrl(seed: string) {
  return `https://picsum.photos/seed/${seed}/1200/1200`;
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
  const tintClass = solidTones[tone % solidTones.length];
  const finalSrc = src || stockPhotoUrl(toSeed(type, label, motif || motifByType[type], tone));

  return (
    <div
      className={clsx("relative overflow-hidden bg-navy", rounded && "rounded-[var(--radius-card)]", className)}
      style={fillHeight ? undefined : { aspectRatio: ratio.replace("/", " / ") }}
    >
      <Image
        src={finalSrc}
        alt={decorative ? "" : alt || label || "AMREN Digital"}
        fill
        priority={priority}
        sizes={sizes || "(min-width: 1024px) 50vw, 100vw"}
        className="object-cover"
      />
      {/* Quiet brand-color wash — keeps unbranded stock photography feeling
          like it belongs to AMREN without covering it in icons/labels. */}
      {!src && <div aria-hidden="true" className={clsx("absolute inset-0 mix-blend-multiply", tintClass, "opacity-30")} />}
      {!src && label && showLabel && (
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-navy/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/85 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
