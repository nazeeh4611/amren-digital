import type { ReactNode } from "react";

/**
 * Shared frame for hero conceptual visuals — replaces the previous
 * AssetPlaceholder "missing file" box on landing pages where no real
 * screenshot exists yet. Always carries an explicit "illustrative, not a
 * real result" label so nothing here can be mistaken for a client
 * dashboard or campaign result.
 */
export function VisualFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-navy" style={{ aspectRatio: "16 / 9" }}>
      <div className="absolute inset-0 flex items-center justify-center px-6 pb-6 pt-14 sm:px-10 sm:pb-10 sm:pt-16">{children}</div>
      <span className="absolute left-4 top-4 z-10 rounded-full bg-cream/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream/70 backdrop-blur-sm sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}
