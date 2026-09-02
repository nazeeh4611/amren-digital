import { VisualFrame } from "./VisualFrame";

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M8 5v14l11-7-11-7z" />
    </svg>
  );
}

/** Filmstrip / showreel motif — no fabricated client footage. */
export function VideoFrameVisual() {
  return (
    <VisualFrame label="AMREN production example">
      <div className="flex w-full max-w-md items-center gap-2.5 sm:gap-3">
        <div className="flex h-28 w-16 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl bg-white/95 text-ink/60 shadow-lg sm:h-32 sm:w-[72px]">
          <PlayIcon />
          <span className="text-[9px] font-semibold uppercase tracking-wide">Reel</span>
        </div>
        <div className="flex flex-1 flex-col gap-2 sm:gap-2.5">
          <div className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/95 text-ink/60 shadow-lg sm:h-14">
            <PlayIcon />
            <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">Promo cut</span>
          </div>
          <div className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white/70 text-ink/50 shadow-lg sm:h-14">
            <PlayIcon />
            <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">Social cut</span>
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
