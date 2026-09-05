import Image from "next/image";
import type { PortfolioProject } from "@/content/portfolio";

function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-navy/10 bg-white shadow-[var(--shadow-card)] transition-transform duration-300 ease-out hover:-translate-y-1">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/9] overflow-hidden">
        <Image
          src={`/works/${project.image}`}
          alt={`${project.name} — website preview`}
          fill
          sizes="(min-width: 640px) 50vw, 90vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-4 py-2 text-xs font-semibold text-cream backdrop-blur-sm">
          {project.displayDomain || displayUrl(project.url)}
          <span aria-hidden="true">↗</span>
        </span>
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-ink">{project.name}</h3>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-ink/50">{project.location}</span>
        </div>
        {project.client && <p className="mt-1 text-xs text-ink/50">{project.client}</p>}
        <p className="mt-2 text-sm leading-relaxed text-ink/65">{project.description}</p>
      </div>
    </div>
  );
}
