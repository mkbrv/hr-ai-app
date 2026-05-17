# UI Component Development Rules

When creating or modifying UI components, adhere to these principles based on the project's mobile-first strategy:

## 📱 Mobile-First Strategy
- **Use `min-width` Media Queries:** Never use `max-width` for responsive styling. Start with styles for the smallest screen and layer complexity as width increases.
- **Fluidity:** Prefer relative units (`%`, `rem`, `vw`, `vh`) over fixed pixels (`px`) where appropriate to ensure fluid layouts.

## 🖐️ Touch-Friendly Design
- **Minimum Target Size:** All interactive elements (buttons, links, inputs) must have a minimum touch target of `44x44px`.
- **Adequate Spacing:** Ensure sufficient padding around clickable items to prevent accidental taps.

## ♿ Accessibility (a11y)
- **Semantic HTML:** Use appropriate tags (`<nav>`, `<main>`, `<header>`, etc.) for structure.
- **ARIA Attributes:** Apply `aria-*` attributes only when native HTML is insufficient.
- **Keyboard Navigation:** All interactive components must be keyboard accessible and have visible focus states.

## 🏗️ Component Architecture
- **Atomic Design:** Organize components into Atoms, Molecules, and Organisms.
- **Single Responsibility:** Each component should handle one specific task. Extract sub-components if a file becomes too large.
- **TypeScript Interfaces:** Always define clear interfaces for `props`.
