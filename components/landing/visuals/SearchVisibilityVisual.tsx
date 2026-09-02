import { VisualFrame } from "./VisualFrame";

const results = [
  { title: "Competitor Business — Dubai", you: false },
  { title: "Your Business — Official Site", you: true },
  { title: "Directory Listing", you: false },
];

/**
 * Organic search results, not an ads mockup — the point of an SEO page
 * is showing up without a paid placement.
 */
export function SearchVisibilityVisual() {
  return (
    <VisualFrame label="Illustrative search result">
      <div className="w-full max-w-md rounded-xl bg-white p-4 shadow-lg sm:p-5">
        <div className="flex items-center gap-2 rounded-full bg-cream-2 px-3 py-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-ink/40" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="M20 20l-4.35-4.35" />
          </svg>
          <span className="text-[11px] text-ink/50 sm:text-xs">your service + dubai</span>
        </div>
        <div className="mt-3 space-y-3">
          {results.map((r) => (
            <div key={r.title} className={r.you ? "rounded-lg border border-turquoise/40 bg-turquoise/10 p-2.5" : "p-2.5"}>
              <p className={r.you ? "text-xs font-semibold text-turquoise sm:text-sm" : "text-xs font-medium text-ink/60 sm:text-sm"}>
                {r.title}
              </p>
              <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}
