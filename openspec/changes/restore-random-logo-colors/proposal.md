## Why

The Astro migration preserved the header logo asset but omitted its Jekyll behavior that gave the logo a randomized color on each page load. Restoring that behavior preserves the established visual identity of the site.

## What Changes

- Apply the former randomized hue rotation and its brightness and saturation adjustments to the header logo after the page loads.
- Keep the original logo asset and existing header navigation behavior unchanged.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `astro-site`: The shared header logo regains its randomized color treatment.

## Impact

- Affects the shared Astro header component and its client-side script only.
- Adds no dependencies, routes, APIs, or content changes.
