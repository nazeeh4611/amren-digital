import Link from "next/link";
import { site } from "@/content/site";

/**
 * Slim footer for /lp/* pages — legal + contact only, no site-wide nav or
 * services list, so the page doesn't hand the visitor a reason to leave.
 */
export function LandingFooter() {
  return (
    <footer className="border-t border-navy/10 bg-cream-2">
      <div className="wrap flex flex-col items-start justify-between gap-6 py-10 pb-24 text-sm text-navy/60 sm:flex-row sm:items-center lg:pb-10">
        <p>
          © {new Date().getFullYear()} AMREN Digital. Part of {site.parent.name}.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href={site.contact.phoneHref} className="transition-colors hover:text-navy">
            {site.contact.phone}
          </a>
          {site.legalNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-navy">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
