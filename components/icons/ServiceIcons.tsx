/**
 * Custom line-icon set for services and service categories — used by the
 * Services nav dropdown (9 individual services) and the homepage "What We
 * Build" grid (6 categories). No emoji anywhere on this site: every glyph
 * here is a plain stroked SVG so it always renders identically regardless
 * of OS/browser emoji font support, and can be recolored via `currentColor`.
 */
export function ServiceIcon({ id, className }: { id: string; className?: string }) {
  const shared = {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
  };

  switch (id) {
    // Performance / ads
    case "performance":
    case "google-ads":
    case "meta-ads":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );

    // Social
    case "social":
    case "social-media-marketing":
      return (
        <svg {...shared}>
          <path d="M4 20c0-3.5 2.5-6 6-6h1c3.9 0 7-3.1 7-7" />
          <path d="M15 3l3 2-2 3" />
        </svg>
      );

    // Search / SEO
    case "search":
    case "seo":
      return (
        <svg {...shared}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
      );
    case "local-seo":
      return (
        <svg {...shared}>
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );

    // Digital experiences / web
    case "digital-experiences":
    case "web-design-development":
      return (
        <svg {...shared}>
          <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 16.5V21" />
          <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" />
        </svg>
      );

    // Content / creative
    case "content":
    case "content-creation":
      return (
        <svg {...shared}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M3 16l5-4 4 3 3-2 6 5" />
        </svg>
      );
    case "video-production":
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M21 8.5l-5 3 5 3z" fill="currentColor" stroke="none" />
        </svg>
      );

    // Systems / automation
    case "systems":
    case "marketing-automation":
      return (
        <svg {...shared}>
          <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" />
        </svg>
      );

    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
