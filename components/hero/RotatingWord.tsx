import type { CSSProperties } from "react";

export type RotatingWordSpec = {
  text: string;
  /** Base hex the word is filled with. */
  color: string;
  /** Lighter hex used for the sweeping shine highlight through the fill. */
  shine: string;
};

const SLOT_SECONDS = 2.6;

/**
 * A stack of words in the same grid cell (so swapping between them never
 * shifts layout), each filled with its own gradient and a continuously
 * sweeping "shine" highlight — the socio.ae-style rotating hero word,
 * reworked with AMREN's own palette. Pure CSS (see .rotating-word-item in
 * globals.css): the right word is correct on first paint, and it respects
 * prefers-reduced-motion automatically instead of needing a JS branch.
 */
export function RotatingWord({ words, className }: { words: RotatingWordSpec[]; className?: string }) {
  const duration = words.length * SLOT_SECONDS;

  return (
    <span className={`relative inline-grid font-rotating text-left align-bottom ${className ?? ""}`}>
      {words.map((w, i) => (
        <span
          key={w.text}
          className="rotating-word-item col-start-1 row-start-1 whitespace-nowrap bg-clip-text text-transparent"
          style={
            {
              backgroundImage: `linear-gradient(100deg, ${w.color} 20%, ${w.shine} 50%, ${w.color} 80%)`,
              backgroundSize: "260% 100%",
              "--rotate-duration": `${duration}s`,
              "--rotate-delay": `${i * SLOT_SECONDS}s`,
            } as CSSProperties
          }
        >
          {w.text}
        </span>
      ))}
    </span>
  );
}
