import type { Config } from "@react-router/dev/config"

const isGitHubPages = process.env.GITHUB_PAGES === "true"

export default {
  // SPA mode required for static hosting (GitHub Pages)
  ssr: false,
  basename: isGitHubPages ? "/hr-ai-app" : "/",
} satisfies Config
