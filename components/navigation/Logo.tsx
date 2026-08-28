import Link from "next/link";
import clsx from "clsx";

/**
 * Typographic wordmark. AMREN Digital's real logo file (see
 * content/assets.ts -> logo) will replace this once supplied — the markup
 * is written so swapping in an <Image> later is a drop-in change.
 */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      className={clsx("group inline-flex items-baseline gap-1.5 font-display", className)}
      aria-label="AMREN Digital — Home"
    >
      <span className={clsx("text-2xl font-bold tracking-tight sm:text-3xl", tone === "dark" ? "text-navy" : "text-cream")}>
        AMREN
      </span>
      <span
        className={clsx(
          "text-[10px] font-semibold uppercase tracking-[0.3em] sm:text-xs",
          tone === "dark" ? "text-gold" : "text-gold-2"
        )}
      >
        Digital
      </span>
    </Link>
  );
}
