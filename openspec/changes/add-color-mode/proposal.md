## Why

The site is currently always rendered in a light palette, which can be uncomfortable in low-light environments and disregards visitors' device preferences. Adding explicit color-mode controls lets visitors choose a readable presentation while retaining automatic system matching by default.

## What Changes

- Add a visible, keyboard-accessible color-mode selector with Light, Dark, and System monitor icons in the shared footer.
- Default first-time visitors to System mode and react to changes in the operating system color preference while System is selected.
- Persist the selected Light, Dark, or System mode across page loads and visits.
- Apply a complete dark palette to site chrome, navigation, content, links, and interactive states without changing site content or navigation behavior.
- Avoid a visible incorrect-color flash when loading a page.

## Capabilities

### New Capabilities

- `color-mode`: Visitor-selected and system-derived light/dark color presentation, including controls, persistence, and accessible behavior.

### Modified Capabilities

None.

## Impact

- Affects the shared Astro layout, footer, and global Tailwind/CSS styles.
- Adds small client-side behavior for resolving and persisting the selected mode.
- Does not add external APIs, services, or runtime dependencies.
