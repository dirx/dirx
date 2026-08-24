## Context

The Astro site has one shared layout, a footer shared by every page, a header that contains the primary navigation and client-side menu behavior, and global Tailwind/CSS styles that hard-code light colors. See `proposal.md` for motivation and `specs/color-mode/spec.md` for required behavior.

## Goals / Non-Goals

**Goals:**

- Resolve the effective palette before page paint.
- Give visitors a simple, accessible three-mode choice that survives navigation and future visits.
- Keep the color palette centralized so shared chrome and content remain consistent.

**Non-Goals:**

- Recoloring editorial image assets or creating separately authored dark-mode images.
- Synchronizing a preference between devices or accounts.
- Introducing a design-system dependency or server-side user settings.

## Decisions

### Store the mode client-side and separate it from the effective palette

Store `light`, `dark`, or `system` in browser local storage. Resolve `system` with the browser color-preference media query, and expose the resulting effective palette through an HTML data attribute before stylesheet rendering. This preserves the user's explicit choice while allowing System mode to react to operating-system changes.

Alternatives considered:

- Cookies or server-rendered preferences: unnecessary for a static site and cannot by themselves react to a live system-preference change.
- Storing only the resolved palette: loses the distinction required to keep System mode responsive.

### Put the color-mode control in the shared footer

Place one semantic, keyboard-operable three-option icon control on the right side of the shared footer, keeping it available on all pages without competing with primary navigation. Use Material Symbols Light `light-mode-outline-rounded`, `dark-mode-outline-rounded`, and `monitor-outline-rounded` for Light, Dark, and System respectively. Its displayed state is the saved mode, rather than the currently resolved palette, so a visitor can distinguish System from Light or Dark.

Alternatives considered:

- A per-page control: duplicates behavior and may create inconsistent selections.
- A header control: competes with the primary navigation on narrow viewports.
- A binary icon toggle: cannot represent the required System state unambiguously.

### Use semantic color tokens for both palettes

Define named CSS color tokens for surfaces, text, links, muted elements, and interaction states, then use them in shared styles and components. Apply palette-specific token values from the HTML data attribute. Existing one-off light utility colors in site chrome are replaced where they prevent the dark palette from applying.

Alternatives considered:

- Scattering dark utility variants in each template: makes palette coverage easy to miss and harder to maintain.
- Relying solely on the browser's `color-scheme`: does not recolor the site's explicit colors.

### Update System mode live

Register a color-preference media-query listener only while System mode is active. On a mode change, add or remove that listener and update the HTML palette attribute immediately.

Alternatives considered:

- Resolving System mode only at page load: fails to match a later operating-system change.

## Risks / Trade-offs

- [Browser storage is unavailable or contains an invalid value] → Treat the selection as System and continue rendering normally.
- [A late theme calculation causes a palette flash] → Run the minimal preference-resolution script in the document head before styles can paint.
- [Hard-coded component colors bypass the token palette] → Review the header, mobile menu, footer, global styles, and interactive states in both effective palettes.
- [A color combination is difficult to read] → Verify text, links, focus indicators, and menu states at normal and mobile viewport widths.

## Migration Plan

1. Deploy the client-side preference behavior and both CSS palettes with System as the default.
2. Existing visitors without a saved mode receive System on their next visit.
3. Roll back by removing the control and preference scripts; the default light palette remains usable and any saved local value is harmless.
