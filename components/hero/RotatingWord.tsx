import type { CSSProperties } from "react";

export type RotatingWordSpec = {
  text: string;
  /** Solid hex the word is filled with. */
  color: string;
};

const SLOT_SECONDS = 1.5;

/**
 * A stack of words in the same grid cell (so swapping between them never
 * shifts layout), each in its own solid color — the hero's rotating
 * outcome word. Pure CSS (see .rotating-word-item in globals.css): the
 * right word is correct on first paint, and it respects
 * prefers-reduced-motion automatically instead of needing a JS branch.
 */
export function RotatingWord({ words, className }: { words: RotatingWordSpec[]; className?: string }) {
  const duration = words.length * SLOT_SECONDS;

  return (
    <span className={`relative inline-grid text-left align-bottom ${className ?? ""}`}>
      {words.map((w, i) => (
        <span
          key={w.text}
          className="rotating-word-item col-start-1 row-start-1 whitespace-nowrap"
          style={
            {
              color: w.color,
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
