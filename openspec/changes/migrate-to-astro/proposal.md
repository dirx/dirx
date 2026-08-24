## Why

The site depends on an unmaintained Jekyll/Minima setup and Ruby tooling. Move it to the current Astro release with Tailwind CSS and pnpm so it has a supported, reproducible local build and an explicit GitHub Pages deployment.

## What Changes

- **BREAKING** Replace the Jekyll configuration, layouts, Sass overrides, Ruby dependencies, and Jekyll-specific Markdown syntax with an Astro site.
- Add pnpm project metadata, lockfile, and scripts for local development, production builds, and previewing the built site.
- Add Tailwind CSS using the current Astro-supported integration and migrate the existing site styling to it.
- Package Outfit through Fontsource instead of loading it from Google Fonts or a copied local webfont.
- Preserve the existing public content, visual identity, static assets, top-level routes, and `/selected-works-and-ideas/` redirect.
- Synchronize the social-profile links with the current live site, including X, Warpcast, and Rodeo.club.
- Add a GitHub Actions workflow that builds the site and deploys its generated output to GitHub Pages on pushes to the repository's default branch.
- Retain `dirx.dev` as the GitHub Pages custom domain through the repository's Pages settings.

## Capabilities

### New Capabilities

- `astro-site`: Static Astro site that renders the existing personal-site content and preserves its public URLs.
- `github-pages-deployment`: Automated GitHub Pages build and deployment for the Astro site, including custom-domain publication.

### Modified Capabilities

- None.

## Impact

- Replaces `Gemfile`, `_config.yml`, `_includes/`, and `_sass/` with Astro, Tailwind CSS, and pnpm project files.
- Adds Node.js/pnpm dependencies and GitHub Actions configuration.
- Keeps images, logos, favicons, and the existing Markdown content as migration inputs, while replacing Jekyll-only front matter, class syntax, and local Outfit webfont handling.
