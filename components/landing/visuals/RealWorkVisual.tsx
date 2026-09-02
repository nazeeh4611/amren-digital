import Image from "next/image";

/** A real screenshot of AMREN's own live website — genuine work, not a mockup. */
export function RealWorkVisual() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)]" style={{ aspectRatio: "16 / 9" }}>
      <Image
        src="/lp/amren-site-real.avif"
        alt="The AMREN Digital website — designed and built in-house"
        fill
        priority
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover object-top"
      />
      <span className="absolute left-4 top-4 rounded-full bg-navy/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur-sm sm:text-[11px]">
        Real AMREN work
      </span>
    </div>
  );
}
