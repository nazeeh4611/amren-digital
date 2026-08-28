import Link from "next/link";
import type { Project } from "@/content/projects";
import { AssetPlaceholder } from "@/components/assets/AssetPlaceholder";
import { TiltCard } from "@/components/animations/TiltCard";
import { ViewCursorArea } from "@/components/animations/ViewCursorArea";

export function ProjectCard({ project, tone = 0 }: { project: Project; tone?: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <ViewCursorArea label="View">
        <TiltCard className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]" max={6}>
          <div className="transition-transform duration-500 ease-out group-hover:scale-[1.04]">
            <AssetPlaceholder
              type="portfolio"
              label={project.industry}
              alt={`${project.title} — ${project.industry}`}
              motif="browser"
              tone={tone}
              aspectRatio="4/5"
            />
          </div>
        </TiltCard>
      </ViewCursorArea>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-blue sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink/60">{project.industry}</p>
        </div>
        <span aria-hidden="true" className="mt-1 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
      <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {project.servicesUsed.map((s) => (
          <li key={s} className="text-xs uppercase tracking-wide text-ink/50">
            {s}
          </li>
        ))}
      </ul>
    </Link>
  );
}
