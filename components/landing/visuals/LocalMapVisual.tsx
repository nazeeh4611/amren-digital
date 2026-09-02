import { VisualFrame } from "./VisualFrame";

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    </svg>
  );
}

const actions = [
  { label: "Call" },
  { label: "Directions" },
  { label: "WhatsApp" },
];

/** Google Business Profile / map-pack visibility — not a rankings graph. */
export function LocalMapVisual() {
  return (
    <VisualFrame label="Illustrative local search view">
      <div className="flex w-full max-w-md items-center gap-4">
        <div className="relative h-32 flex-1 overflow-hidden rounded-xl bg-navy-3/50 sm:h-40">
          <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
            <path d="M0 30 H200 M0 70 H200 M0 110 H200" stroke="currentColor" strokeWidth="1" className="text-cream/30" />
            <path d="M40 0 V140 M100 0 V140 M160 0 V140" stroke="currentColor" strokeWidth="1" className="text-cream/30" />
          </svg>
          <PinIcon className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-full text-turquoise" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/50" />
        </div>
        <div className="flex-1 space-y-2 rounded-xl bg-white p-3.5 shadow-lg sm:p-4">
          <p className="text-xs font-semibold text-ink sm:text-sm">Your Business</p>
          <div className="h-1.5 w-3/4 rounded-full bg-ink/10" />
          <div className="mt-2 flex flex-wrap gap-1.5">
            {actions.map((a) => (
              <span key={a.label} className="rounded-full bg-cream-2 px-2 py-1 text-[9px] font-medium text-ink/60 sm:text-[10px]">
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
