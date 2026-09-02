import { VisualFrame } from "./VisualFrame";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M20 20l-4.35-4.35" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M3 16l5-4 4 3 3-2 6 5" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/**
 * Google Ads: search-driven — keyword → ad → landing page → lead.
 * Meta Ads: creative-driven — same shape, opening step is a feed
 * creative rather than a search bar.
 */
export function AdCampaignVisual({ platform }: { platform: "search" | "social" }) {
  return (
    <VisualFrame label="Illustrative campaign example">
      <div className="flex w-full max-w-md flex-col items-center gap-1.5 sm:gap-2">
        <div className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-lg">
          {platform === "search" ? <SearchIcon /> : <ImageIcon />}
          <span className="truncate text-xs font-medium text-ink/70 sm:text-sm">
            {platform === "search" ? "best plumber near me" : "Creative — feed placement"}
          </span>
        </div>
        <div aria-hidden="true" className="h-2 w-px bg-cream/20" />
        <div className="flex w-full items-center justify-between rounded-lg border border-gold/40 bg-navy-3/60 px-3 py-2">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-gold sm:text-xs">Ad</span>
          <span className="truncate text-xs text-cream/70 sm:text-sm">Your business — call now</span>
        </div>
        <div aria-hidden="true" className="h-2 w-px bg-cream/20" />
        <div className="flex w-full items-center gap-2 rounded-lg bg-white/95 px-3 py-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-turquoise" />
          <span className="text-xs font-medium text-ink/70 sm:text-sm">Landing page</span>
        </div>
        <div aria-hidden="true" className="h-2 w-px bg-cream/20" />
        <div className="flex items-center gap-2 rounded-full bg-turquoise px-4 py-1.5 text-ink">
          <CheckIcon />
          <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">Lead</span>
        </div>
      </div>
    </VisualFrame>
  );
}
