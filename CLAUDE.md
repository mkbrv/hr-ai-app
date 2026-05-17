# Project Guide: Mobile-First Frontend Development

This document provides guidelines and instructions for developers working on this project, focusing on a mobile-first, responsive, and high-performance frontend experience.

## About This App

A mobile-first hiring platform — "Tinder for jobs". Hiring managers create jobs; candidates browse and apply by swiping right (accept) or left (decline).

**Job cards display:** photo, title, description, location, compensation, skill pills, and driver license requirement.

## Project Structure

All application code lives in the `hr-ai-app/` subdirectory. Run all commands from there.

```
hr-ai-app/
├── app/
│   ├── components/ui/   # shadcn/ui components (do not edit directly)
│   ├── components/      # custom app components go here
│   ├── domain/models/   # TypeScript domain interfaces
│   ├── store/           # Zustand stores
│   ├── lib/utils.ts     # cn() utility (clsx + tailwind-merge)
│   ├── routes/          # file-based route components
│   ├── routes.ts        # route configuration
│   ├── root.tsx         # root layout and error boundary
│   └── app.css          # global styles, CSS variables, Tailwind import
├── components.json      # shadcn/ui config
├── vite.config.ts
└── react-router.config.ts
```

## Tech Stack

- **Framework:** React 19 + React Router 7 (full-stack, SSR enabled by default)
- **Build Tool:** Vite 7 (via `@react-router/dev` Vite plugin)
- **Language:** TypeScript 5 (strict mode; path alias `~/` maps to `./app/`)
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite`)
- **UI Components:** shadcn/ui (30 pre-built components) built on Base UI React primitives
- **Icons:** Lucide React
- **Theme:** next-themes — light/dark mode via CSS variables (OKLch color space)
- **Typography:** Nunito Sans (body), Public Sans (headings) via Fontsource
- **Utilities:** `cn()` (clsx + tailwind-merge), class-variance-authority (CVA)
- **State Management:** Zustand
- **Notifications:** Sonner
- **Containerization:** Docker (multi-stage Node 20 Alpine build)

## Mobile-First Development Principles

Our primary target is mobile devices. We build for the smallest screens first and layer on complexity for larger viewports using `min-width` media queries.

### 1. Responsive Strategy
- **Avoid `max-width`:** Use `min-width` to add styles as screen size increases. This ensures simpler, more readable CSS and follows a progressive enhancement approach.
- **Fluid Layouts:** Use relative units (`%`, `vw`, `vh`, `rem`, `em`) instead of fixed pixels (`px`) wherever possible.
- **Flexbox & Grid:** Leverage CSS Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts to create highly adaptive structures.

### 2. Touch-Friendly UI
- **Target Size:** Ensure all interactive elements (buttons, links, inputs) have a minimum touch target size of at least `44x44px` (Apple/Google standard).
- **Spacing:** Provide adequate padding around clickable elements to prevent accidental taps on adjacent items.
- **Gestures:** Avoid relying solely on complex gestures (like long-press or multi-finger swipes) which may not be intuitive or accessible on all devices.

### 3. Performance Optimization
- **Image Optimization:** Use modern formats like WebP/AVIF. Always provide appropriately scaled images for different `srcset` sizes.
- **Code Splitting:** Use `React.lazy()` and `Suspense` to split large components into smaller chunks, reducing the initial JavaScript payload.
- **Critical CSS:** Ensure essential styles for above-the-fold content are loaded immediately.

## Architecture & Component Design

### Component Structure
- **Atomic Design:** Aim for a structure of Atoms (buttons, inputs), Molecules (search bars, card headers), and Organisms (navigation bars, product grids).
- **Single Responsibility:** Each component should do one thing well. If a component grows too large, break it down into smaller sub-components.
- **Props Interface:** Always define clear TypeScript interfaces for component props to ensure type safety and documentation.

### Routing (React Router 7)
- Routes are file-based under `app/routes/`
- Route config is declared in `app/routes.ts`
- SSR is enabled by default (`react-router.config.ts`)
- Root layout and error boundary live in `app/root.tsx`

### Styling Guidelines
- **Tailwind CSS 4:** Use utility classes for all styling. Do not write raw CSS files.
- **`cn()` helper:** Use `cn()` from `~/lib/utils` for all conditional or merged class names.
- **CVA:** Use `class-variance-authority` to define component variants (see existing `app/components/ui/` components for examples).
- **Design tokens:** Colors, spacing, radius, and typography are defined as CSS variables in `app/app.css`. Extend the design system by adding variables there — do not hardcode values.
- **Dark mode:** Handled automatically by next-themes and the `.dark` class on `<html>`. Use `dark:` Tailwind variants as needed.

### shadcn/ui Components
- Pre-built UI primitives live in `app/components/ui/` — do not edit these manually.
- Add new components via the CLI (run from `hr-ai-app/`):
  ```bash
  npx shadcn@latest add <component-name>
  ```
- Import using the path alias: `import { Button } from "~/components/ui/button"`
- Custom app-specific components go in `app/components/` (outside `ui/`).

## State Management (Zustand)

Stores live in `app/store/`. Each domain concern gets its own store file.

### Conventions
- Define state and actions as separate interfaces, combine them in `create<State & Actions>()`
- Export named selectors (plain functions) alongside the store hook — components use these to avoid inline arrow functions and make selector reuse easy
- Keep stores flat; avoid nesting state deeply
- Use `initialState` constant so `reset()` actions stay DRY

### Pattern

```ts
import { create } from "zustand"

interface FooState { items: Item[]; isLoading: boolean }
interface FooActions { setItems: (items: Item[]) => void }

const initialState: FooState = { items: [], isLoading: false }

export const useFooStore = create<FooState & FooActions>()((set) => ({
  ...initialState,
  setItems: (items) => set({ items }),
  reset: () => set(initialState),
}))

export const selectItems = (state: FooState) => state.items
```

### Using selectors in components

```ts
// Prefer selectors over inline functions
const jobs = useJobsStore(selectCurrentJob)

// For multiple values, call the hook twice rather than subscribing to the whole store
const isLoading = useJobsStore((s) => s.isLoading)
```

### Current stores

| File | Hook | Purpose |
| :--- | :--- | :--- |
| `app/store/jobs.ts` | `useJobsStore` | Job list for the swipe feed, current index, loading/error state |

## Accessibility (a11y)

A mobile-first app must be accessible to everyone.
- **Semantic HTML:** Use correct tags (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`, etc.) to provide structure for screen readers.
- **ARIA Attributes:** Use `aria-*` attributes only when native HTML cannot describe the element's purpose or state.
- **Keyboard Navigable:** Ensure all interactive elements are reachable and operable via keyboard/assistive technology.
- **Color Contrast:** Maintain a high contrast ratio between text and background to ensure readability in various lighting conditions.

## Common Commands

All commands must be run from the `hr-ai-app/` directory.

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the application for production |
| `npm run start` | Serve the production build locally |
| `npm run typecheck` | Run React Router typegen and TypeScript checks |
| `npm run format` | Format all `.ts`/`.tsx` files with Prettier |
