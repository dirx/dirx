## Purpose

Publish the static personal site to GitHub Pages automatically and continue serving its established custom domain.

## ADDED Requirements

### Requirement: GitHub Pages deployment runs from the default branch
The repository SHALL include a GitHub Actions workflow that, on a push to its default branch, installs dependencies deterministically, builds the static site, uploads the build output as a GitHub Pages artifact, and deploys that artifact through GitHub Pages.

#### Scenario: A change is pushed to the default branch
- **WHEN** the GitHub Actions workflow is triggered by a push to the default branch
- **THEN** it builds and deploys the current static site to GitHub Pages

#### Scenario: The build fails
- **WHEN** dependency installation or the static site build fails in the workflow
- **THEN** the deployment job does not publish a new Pages artifact

### Requirement: Custom-domain configuration is retained
The repository's GitHub Pages configuration SHALL retain `dirx.dev` as the custom domain. The GitHub Actions workflow SHALL not require a `CNAME` file in the source tree or deployed artifact because GitHub Pages ignores it for Actions-based publishing.

#### Scenario: GitHub Pages deploys the static artifact
- **WHEN** the deployment workflow uploads the static site output and GitHub Pages deploys it
- **THEN** GitHub Pages serves the deployment at the repository-configured `dirx.dev` custom domain without depending on a `CNAME` file in the artifact
