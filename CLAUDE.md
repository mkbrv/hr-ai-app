# Project Guide: Mobile-First Frontend Development

This document provides guidelines and instructions for developers working on this project, focusing on a mobile-first, responsive, and high-performance frontend experience.

## 🚀 Tech Stack
- **Framework:** [React](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS (Standard CSS/CSS Modules)

## 📱 Mobile-First Development Principles

Our primary target is mobile devices. We build for the smallest screens first and layer on complexity for larger viewports using `min-width` media queries.

### 1. Responsive Strategy
- **Avoid `max-width`:** Use `min-width` to add styles as screen size increases. This ensures simpler, more readable CSS and follows a progressive enhancement approach.
- **Fluid Layouts:** Use relative units (`%`, `vw`, `vvh`, `rem`, `em`) instead of fixed pixels (`px`) wherever possible.
- **Flexbox & Grid:** Leverage CSS Flexbox for one-dimensional layouts and CSS Grid for two-dimensional layouts to create highly adaptive structures.

### 2. Touch-Friendly UI
- **Target Size:** Ensure all interactive elements (buttons, links, inputs) have a minimum touch target size of at least `44x44px` (Apple/Google standard).
- **Spacing:** Provide adequate padding around clickable elements to prevent accidental taps on adjacent items.
- **Gestures:** Avoid relying solely on complex gestures (like long-press or multi-finger swipes) which may not be intuitive or accessible on all devices.

### 3. Performance Optimization
- **Image Optimization:** Use modern formats like WebP/AVIF. Always provide appropriately scaled images for different `srcset` sizes.
- **Code Splitting:** Use `React.lazy()` and `Suspense` to split large components into smaller chunks, reducing the initial JavaScript payload.
- **Critical CSS:** Ensure essential styles for above-the-fold content are loaded immediately.

## 🏗️ Architecture & Component Design

### Component Structure
- **Atomic Design:** Aim for a structure of Atoms (buttons, inputs), Molecules (search bars, card headers), and Organisms (navigation bars, product grids).
- **Single Responsibility:** Each component should do one thing well. If a component grows too large, break it down into smaller sub-components.
- **Props Interface:** Always define clear TypeScript interfaces for component props to ensure type safety and documentation.

### Styling Guidelines
- **Naming Conventions:** Use a consistent naming convention (e.g., BEM - Block Element Modifier) if using standard CSS.
- **Variables:** Store common values (colors, spacing, typography, breakpoints) in CSS variables (`:root`) for easy maintenance.

## ♿ Accessibility (a11y)

A mobile-first app must be accessible to everyone.
- **Semantic HTML:** Use correct tags (`<nav>`, `<main>`, `<article>`, `<header>`, `<footer>`, etc.) to provide structure for screen readers.
- **ARIA Attributes:** Use `aria-*` attributes only when native HTML cannot describe the element's purpose or state.
- **Keyboard Navigable:** Ensure all interactive elements are reachable and operable via keyboard/assistive technology.
- **Color Contrast:** Maintain a high contrast ratio between text and background to ensure readability in various lighting conditions.

## 🛠️ Common Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code quality issues |
