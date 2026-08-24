## 1. Color-mode behavior

- [x] 1.1 Add early client-side mode resolution that restores `light`, `dark`, or `system`, falls back safely to System, and applies the effective palette before visible rendering; verify saved Light, Dark, and System values each produce the expected initial palette after a reload.
- [x] 1.2 Add shared-footer icon color-mode controls with semantic labels and keyboard operation, using `monitor-outline-rounded` for System; persist every selection locally, and update the effective palette immediately; verify each option is selectable with keyboard and remains selected after navigation and reload.
- [x] 1.3 Listen for operating-system color-preference changes while System is selected and remove or ignore that behavior for explicit modes; verify a simulated system preference change updates System mode without reload and does not override Light or Dark.

## 2. Palette implementation

- [x] 2.1 Define centralized semantic tokens for light and dark palettes and apply them to global typography, links, and interactive states; verify readable text and visible link/focus/hover states in both palettes.
- [x] 2.2 Update shared header, mobile navigation, and footer styling to use the palette tokens; verify the mobile menu, social links, and color-mode controls remain legible in Light and Dark at mobile and desktop widths.

## 3. Validation

- [x] 3.1 Build the Astro site with `pnpm build` and verify it succeeds without errors.
- [x] 3.2 Manually verify first-visit System behavior, persisted mode restoration, live System updates, and absence of a visible palette flash in a browser.
