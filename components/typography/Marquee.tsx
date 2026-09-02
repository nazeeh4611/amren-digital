import type { CSSProperties } from "react";
import clsx from "clsx";

export function Marquee({
  items,
  className,
  tone = "light",
  separator = "·",
  reverse = false,
  speed = 32,
  accent = "gold",
}: {
  items: string[];
  className?: string;
  tone?: "light" | "dark";
  separator?: string;
  reverse?: boolean;
  speed?: number;
  accent?: "gold" | "coral" | "blue" | "cyan";
}) {
  const doubled = [...items, ...items];
  const accentClass = { gold: "text-gold", coral: "text-coral", blue: "text-blue-2", cyan: "text-cyan" }[accent];

  // Pure CSS loop (see .marquee-track in globals.css) — no JS ticker, no
  // ScrollTrigger, renders and animates immediately with zero hydration cost.
  return (
    <div
      className={clsx(
        "marquee-row overflow-hidden border-y py-4",
        tone === "dark" ? "border-cream/15 bg-navy" : "border-navy/10 bg-cream",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={clsx("marquee-track", reverse && "marquee-reverse")}
        style={{ "--marquee-duration": `${speed}s` } as CSSProperties}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "mx-4 shrink-0 font-display text-lg font-medium uppercase tracking-wide sm:text-2xl",
              tone === "dark" ? "text-cream/70" : "text-ink/60"
            )}
          >
            {item}
            <span className={clsx("ml-4", accentClass)}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
