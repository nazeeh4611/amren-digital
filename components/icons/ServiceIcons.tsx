/**
 * Icon set for services and service categories — used by the Services nav
 * dropdown (9 individual services) and the homepage "What We Build" grid
 * (6 categories). No emoji anywhere on this site: every glyph here is a
 * plain SVG (never a Unicode emoji character), so it always renders
 * identically regardless of OS/browser emoji font support. Each icon
 * carries its own fixed accent color rather than inheriting `currentColor`,
 * so it reads clearly sitting on a plain light chip in either context.
 */
export function ServiceIcon({ id, className }: { id: string; className?: string }) {
  const base = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className,
  };
  const stroke = {
    fill: "none" as const,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    // Performance / paid ads — a rocket taking off
    case "performance":
    case "google-ads":
    case "meta-ads":
      return (
        <svg {...base} stroke="#E8A93C" {...stroke}>
          <path d="M12 2.5c2.8 1.6 4.5 4.6 4.5 8.3 0 2.4-.7 4.4-1.6 6l-2.9 3.2-2.9-3.2c-.9-1.6-1.6-3.6-1.6-6 0-3.7 1.7-6.7 4.5-8.3Z" />
          <circle cx="12" cy="10.5" r="2" />
          <path d="M8.5 15.5 6 17c-.5-1.6-.4-3 .2-4.2M15.5 15.5 18 17c.5-1.6.4-3-.2-4.2" />
          <path d="M9.5 20.5 12 22l2.5-1.5" />
        </svg>
      );

    // Social — network / share nodes
    case "social":
    case "social-media-marketing":
      return (
        <svg {...base} stroke="#3FA85C" {...stroke}>
          <circle cx="6" cy="12" r="2.4" />
          <circle cx="18" cy="6" r="2.4" />
          <circle cx="18" cy="18" r="2.4" />
          <path d="M8.2 10.8 15.8 7.2M8.2 13.2l7.6 3.6" />
        </svg>
      );

    // Search / SEO — magnifying glass over a rising trend line
    case "search":
    case "seo":
      return (
        <svg {...base} stroke="#E0507A" {...stroke}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="M6.8 12.5l2-2.3 1.7 1.4 2.7-3.3" />
          <path d="M20 20l-4.4-4.4" />
        </svg>
      );
    case "local-seo":
      return (
        <svg {...base} stroke="#E0507A" {...stroke}>
          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.5" />
        </svg>
      );

    // Digital experiences / web — code brackets
    case "digital-experiences":
    case "web-design-development":
      return (
        <svg {...base} stroke="#7C5CE0" {...stroke}>
          <path d="M9 8 5 12l4 4M15 8l4 4-4 4" />
          <path d="M13.5 6.5 10.5 17.5" />
        </svg>
      );

    // Content / creative — camera
    case "content":
    case "content-creation":
      return (
        <svg {...base} stroke="#3AA6A0" {...stroke}>
          <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-1.5h7L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case "video-production":
      return (
        <svg {...base} stroke="#3AA6A0" {...stroke}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M21 8.5v7l-5-3.5 5-3.5Z" fill="#3AA6A0" stroke="none" />
        </svg>
      );

    // Systems / automation — gear with a lightning core
    case "systems":
    case "marketing-automation":
      return (
        <svg {...base} stroke="#2F8FD1" {...stroke}>
          <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.6 6.4l-1.6 1.6M8 16l-1.6 1.6M17.6 17.6 16 16M8 8 6.4 6.4" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12.9 9.7 10.5 13h2l-1.4 2.3" fill="#2F8FD1" stroke="none" />
        </svg>
      );

    default:
      return (
        <svg {...base} fill="currentColor">
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
}
