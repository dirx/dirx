## Purpose

Provide the personal site as a static build while preserving its content, public routes, assets, and recognizable presentation.

## ADDED Requirements

### Requirement: Site content and routes are preserved
The site SHALL render an About page at `/`, an Artworks & Projects page at `/artworks-and-projects/`, and an Open Source page at `/open-source-projects/`. It SHALL preserve the existing page text, current social-profile links, images, favicon assets, and the visual identity represented by the current header, navigation, typography, and social footer.

#### Scenario: A visitor opens a primary page
- **WHEN** a visitor requests `/`, `/artworks-and-projects/`, or `/open-source-projects/`
- **THEN** the response renders the corresponding existing content with navigation to the other primary pages

#### Scenario: A visitor loads a static asset
- **WHEN** a page requests an existing asset under `/assets/`
- **THEN** the published site serves that asset at its existing public URL

### Requirement: Legacy redirect is retained
The site SHALL permanently redirect `/selected-works-and-ideas/` to `/artworks-and-projects/`.

#### Scenario: A visitor opens the legacy artworks URL
- **WHEN** a visitor requests `/selected-works-and-ideas/`
- **THEN** the response is a permanent redirect to `/artworks-and-projects/`

### Requirement: Build tooling is pnpm-based
The site SHALL provide pnpm scripts to run a local development server, produce a static production build, and preview the built site. The committed lockfile SHALL make dependency installation reproducible.

#### Scenario: A developer builds the site from a clean checkout
- **WHEN** a developer installs dependencies with pnpm using the committed lockfile and runs the production build script
- **THEN** the build completes and produces a static deployable site directory

### Requirement: Site metadata is retained
The generated pages SHALL retain the existing site title and description, favicon and web-manifest references, social profile relations, and Open Graph and Twitter image metadata.

#### Scenario: A crawler reads the home page
- **WHEN** a crawler requests `/`
- **THEN** the HTML includes the site metadata and existing social-image asset references

### Requirement: Typography is packaged with Fontsource
The site SHALL load Outfit from the `@fontsource-variable/outfit` pnpm dependency with weights from 100 through 500. It SHALL not load Outfit from Google Fonts or a copied webfont asset.

#### Scenario: A visitor loads a primary page
- **WHEN** a visitor requests a primary page
- **THEN** its typography renders with packaged Outfit without a request to Google Fonts or `/assets/fonts/QGYvz_MVcBeNP4NJtEtqUYLknw.woff2`

### Requirement: Current social profiles are rendered
The shared footer SHALL link to LinkedIn, XING, Mastodon, X, DEV, GitHub, Warpcast, and Rodeo.club. The About page SHALL also link to the current X, Warpcast, and Rodeo.club profiles.

#### Scenario: A visitor views a shared footer
- **WHEN** a visitor requests a primary page
- **THEN** the footer includes links to X, Warpcast, and Rodeo.club alongside the existing social profiles
