import { VisualFrame } from "./VisualFrame";

function PostIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M3 16l5-4 4 3 3-2 6 5" />
    </svg>
  );
}
function CarouselIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M20 9v6M22.5 10.5v3" />
    </svg>
  );
}
function ReelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M10 10l5 3-5 3v-6z" fill="currentColor" stroke="none" />
    </svg>
  );
}
function StoryIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const items = [
  { icon: PostIcon, label: "Post" },
  { icon: CarouselIcon, label: "Carousel" },
  { icon: ReelIcon, label: "Reel" },
  { icon: StoryIcon, label: "Story" },
];

/** Content-format grid — not real client posts, just the format mix a content system covers. */
export function ContentGridVisual({ label = "AMREN-created examples" }: { label?: string }) {
  return (
    <VisualFrame label={label}>
      <div className="grid w-full max-w-md grid-cols-4 gap-2.5 sm:gap-3.5">
        {items.map(({ icon: Icon, label: itemLabel }, i) => (
          <div
            key={itemLabel}
            className="flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl bg-white/95 text-ink/70 shadow-lg"
            style={{ opacity: 1 - i * 0.04 }}
          >
            <Icon />
            <span className="text-[9px] font-semibold uppercase tracking-wide sm:text-[10px]">{itemLabel}</span>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
