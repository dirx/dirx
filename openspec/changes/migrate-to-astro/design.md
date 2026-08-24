## Context

See `proposal.md` for motivation. The current repository is a Ruby/Jekyll site using the remote Minima theme. Content is in three Markdown files, site chrome is overridden through Jekyll includes and Sass, and static images, fonts, logos, and favicon files live in `assets/`. `CNAME` specifies `dirx.dev`; no CI workflow currently exists.

## Goals / Non-Goals

**Goals:**

- Produce a static Astro site styled with Tailwind CSS.
- Preserve the public content contract described in the delta specs.
- Make pnpm the only package-manager workflow and remove Jekyll/Ruby build dependencies.
- Deploy from GitHub Actions using the GitHub Pages artifact/deployment flow.

**Non-Goals:**

- Rewriting or expanding site copy, artwork entries, images, or external links.
- Redesigning the site beyond reproducing its existing visual hierarchy in Tailwind.
- Changing DNS records or GitHub repository Pages settings outside the repository.

## Decisions

### Static Astro output with content-backed pages

Use Astro's static output and create one route per existing public page. Extract shared document metadata, header/navigation, and footer/social links into Astro layouts or components, and retain page content as Markdown/MDX or content entries. Convert Jekyll-specific front matter, Liquid tags, attribute-list syntax, and redirect plugin behavior to Astro-native equivalents.

This keeps content authoring close to its current form and avoids runtime hosting requirements. A hand-written HTML migration would also work but would make repeated content and metadata harder to maintain.

### Tailwind CSS owns local styling

Use the current, Astro-compatible Tailwind CSS integration. Translate the small Minima override surface and required layout styles into Tailwind utilities and, only where appropriate, a concise global stylesheet for base typography, font declarations, and prose-content rules. Set the primary navigation link typography to 18px at every responsive breakpoint.

Tailwind centralizes the new styling pipeline. Retaining Minima's Sass would keep the deprecated Jekyll coupling, while a large custom CSS rewrite is unnecessary for this small site.

### Packaged Outfit typography and current social profiles

Use the variable `@fontsource-variable/outfit` package for Outfit's 100–500 weight range, imported by the global stylesheet. Do not load the typeface from Google Fonts or retain a copied Outfit webfont as a build dependency. Keep the live site's current social-profile destinations and labels in the About content and shared footer: LinkedIn, XING, Mastodon, X, DEV, GitHub, Warpcast, and Rodeo.club.

This keeps typography self-contained in the pnpm dependency graph and prevents the migration from publishing stale social-profile information.

### Static assets retain public asset paths

Copy the existing `assets/` tree into Astro's static public directory unchanged. Existing root-relative `/assets/...` links therefore remain valid at `dirx.dev`.

The deployment uses GitHub Pages' GitHub Actions flow, where `CNAME` files are ignored. Retain `dirx.dev` in the repository's GitHub Pages custom-domain setting rather than requiring a `CNAME` file in the source tree or deployment artifact.

Bundling all images through component imports could improve optimization but would alter established asset URLs and adds no meaningful benefit for the migration.

### GitHub Pages Actions deployment

Use the official GitHub Pages Actions flow: configure Pages, build with a pinned Node.js release and pnpm using the committed lockfile, upload the Astro output, then deploy it with the required Pages permissions and concurrency protection. Trigger automatically on pushes to `main`, which is currently the default branch, and allow manual dispatch for recovery.

This avoids branch-based generated-file commits and makes the deployed artifact traceable to each workflow run. The repository administrator must set GitHub Pages' source to **GitHub Actions** if it is not already configured.

### Dependency version policy

At implementation time, resolve the then-current stable Astro release and a compatible Tailwind integration/version, then commit exact versions and the pnpm lockfile. The implementation SHALL not use floating dependency ranges for the build tooling.

This meets the request for current tooling while preserving reproducibility after the migration.

## Risks / Trade-offs

- [Jekyll Markdown extensions do not render identically in Astro] → Convert each known extension and verify all three rendered pages and the legacy redirect.
- [A visual mismatch weakens the personal site's identity] → Recreate the existing navigation, logo treatment, Fontsource-provided Outfit weights, mobile layout, and current social footer before considering visual refinements.
- [GitHub Pages is not set to the Actions source] → Document the one-time repository setting and verify deployment after merging.
- [Future package upgrades change the build] → Commit the pnpm lockfile and use deterministic installation in CI.

## Migration Plan

1. Add the Astro, Tailwind, pnpm, and GitHub Actions configuration alongside the current site until the new static build is verified.
2. Migrate shared chrome, metadata, content pages, assets, and the legacy redirect; build and inspect the generated output locally.
3. Remove Jekyll/Ruby configuration and dependencies after the Astro output meets the specs.
4. Merge the workflow, select GitHub Actions as the Pages source if necessary, and verify `https://dirx.dev` plus all primary and legacy routes after deployment.
5. Roll back by reverting the migration commit; GitHub Pages will redeploy the previous known-good workflow/source configuration.
