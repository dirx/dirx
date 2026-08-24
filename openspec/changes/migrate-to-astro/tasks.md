## 1. Project setup

- [x] 1.1 Add the current stable, Astro-compatible Astro and Tailwind CSS dependencies, pnpm package-manager metadata, and deterministic pnpm lockfile.
- [x] 1.2 Configure static Astro output, local dev/build/preview scripts, Tailwind CSS, and a pinned Node.js version for local and CI consistency.
- [x] 1.3 Move the existing public assets into the Astro static-files directory without changing their public paths.
- [x] 1.4 Remove the Jekyll/Ruby configuration, theme overrides, and Gem dependencies after the Astro build is established.

## 2. Site migration

- [x] 2.1 Create shared Astro layout/components for document metadata, logo header, responsive primary navigation, and social footer.
- [x] 2.2 Migrate the About, Artworks & Projects, and Open Source content into their existing public routes, converting Jekyll-only Markdown syntax to supported Astro content.
- [x] 2.3 Recreate the existing typography, custom font loading, logo treatment, content-image layout, and mobile navigation with Tailwind and minimal global CSS.
- [x] 2.4 Add the permanent `/selected-works-and-ideas/` redirect to `/artworks-and-projects/`.
- [x] 2.5 Replace the copied Outfit webfont with `@fontsource-variable/outfit` and synchronize the About page and shared social footer with the live X, Warpcast, and Rodeo.club profiles.

## 3. GitHub Pages deployment

- [x] 3.1 Add a GitHub Actions workflow for deterministic pnpm installation, Astro static build, Pages artifact upload, and Pages deployment on pushes to `main` and manual dispatch.
- [x] 3.2 Configure the workflow's Pages permissions, concurrency, and build-output path without requiring `CNAME` in its artifact.
- [x] 3.3 Document the one-time GitHub repository settings that select GitHub Actions as the Pages source and retain `dirx.dev` as the custom domain.

## 4. Verification

- [x] 4.1 Install with pnpm's frozen lockfile mode and run the production build.
- [x] 4.2 Preview the generated output and verify the three primary routes, legacy redirect, assets, metadata, favicon, responsive navigation, and social footer.
- [ ] 4.3 Build and preview the Fontsource typography and current social-profile links without Google Fonts or the copied Outfit webfont.
- [ ] 4.4 Validate the GitHub Actions workflow syntax and confirm a successful Pages deployment serves `dirx.dev` after merge.
