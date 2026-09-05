import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Vendored Claude Code skill/plugin packages living at the repo root —
    // not part of the Next.js app, and each ships its own lint config.
    "agent-skills/**",
    "claudedesignskills/**",
    "gsap-skills/**",
    "magic-mcp/**",
    "shadcn-ui-mcp-server/**",
    "skills/**",
    "taste-skill/**",
    "ui-ux-pro-max-skill/**",
  ]),
]);

export default eslintConfig;
