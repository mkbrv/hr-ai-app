# React Component Refactoring Prompt

Use this prompt template when you need to refactor an existing React component for better performance, readability, or adherence to the project's mobile-first standards.

## Instructions

Please review the following React component and suggest/apply improvements based on these criteria:

1.  **Code Quality & Efficiency:**
    *   Identify redundant logic or unnecessary re-renders.
    *   Check for proper use of `useMemo` and `useCallback`.
    *   Ensure hooks are used correctly and follow the Rules of Hooks.

2.  **TypeScript Excellence:**
    *   Ensure all props are strictly typed with interfaces.
    *   Remove any use of `any`.
    *   Check for proper type definitions for event handlers and refs.

3.  **Mobile-First & CSS Compliance:**
    *   Verify that no `max-width` media queries are used.
    *   Ensure all interactive elements meet the `44x44px` touch target requirement.
    *   Check if relative units (`rem`, `%`, etc.) are used instead of fixed `px`.

4.  **Accessibility (a11y):**
    *   Check for semantic HTML usage.
    *   Verify presence of necessary ARIA attributes and keyboard navigation support.

## Component Code to Refactor:

[PASTE COMPONENT CODE HERE]
