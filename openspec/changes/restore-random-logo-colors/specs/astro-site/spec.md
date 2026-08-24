## MODIFIED Requirements

### Requirement: Site content and routes are preserved
The site SHALL render an About page at `/`, an Artworks & Projects page at `/artworks-and-projects/`, and an Open Source page at `/open-source-projects/`. It SHALL preserve the existing page text, current social-profile links, images, favicon assets, and the visual identity represented by the current header, navigation, typography, and social footer. On every primary-page load, the header logo SHALL receive a randomly selected color treatment from the established discrete hue palette, with brightness and saturation adjustments that keep the yellow-to-green hues visually balanced.

#### Scenario: A visitor opens a primary page
- **WHEN** a visitor requests `/`, `/artworks-and-projects/`, or `/open-source-projects/`
- **THEN** the response renders the corresponding existing content with navigation to the other primary pages and a color-treated header logo

#### Scenario: A visitor reloads a primary page
- **WHEN** a visitor reloads any primary page
- **THEN** the header logo receives a newly randomized color treatment from the established palette

#### Scenario: A visitor loads a static asset
- **WHEN** a page requests an existing asset under `/assets/`
- **THEN** the published site serves that asset at its existing public URL
