import { VisualFrame } from "./VisualFrame";

const nodes = ["Lead", "CRM", "WhatsApp", "Notification", "Follow-Up", "Sales"];

/** System diagram, not a fabricated CRM dashboard. */
export function WorkflowVisual() {
  return (
    <VisualFrame label="Example automation workflow">
      <div className="grid w-full max-w-md grid-cols-3 gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-4">
        {nodes.map((node, i) => (
          <div key={node} className="relative flex flex-col items-center">
            <div className="flex h-14 w-full items-center justify-center rounded-xl bg-white/95 px-1.5 text-center text-[9px] font-semibold uppercase leading-tight text-ink/70 shadow-lg sm:h-16 sm:text-[10px]">
              {node}
            </div>
            {i < nodes.length - 1 && i % 3 !== 2 && (
              <span aria-hidden="true" className="absolute right-[-13px] top-1/2 -translate-y-1/2 text-cream/40 sm:right-[-15px]">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}
