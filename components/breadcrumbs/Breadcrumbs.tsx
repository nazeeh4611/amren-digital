import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/structured-data";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const full = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="wrap pt-28 sm:pt-32">
      <JsonLd data={breadcrumbSchema(full)} />
      <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-navy/50">
        {full.map((item, index) => {
          const isLast = index === full.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-navy">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-blue">
                  {item.name}
                </Link>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
