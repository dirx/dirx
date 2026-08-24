## Purpose

Lets visitors choose a durable light or dark presentation or automatically match their device preference.

## ADDED Requirements

### Requirement: Color mode selection
The site SHALL provide a visible, keyboard-accessible icon control in the shared footer that lets visitors select Light, Dark, or System mode on every page. The control SHALL use distinct icons for Light, Dark, and System, with `monitor-outline-rounded` representing System. System SHALL be the initial selected mode when no prior selection has been saved.

#### Scenario: First visit uses System mode
- **WHEN** a visitor opens the site without a saved color-mode preference
- **THEN** the control indicates System and the site uses the visitor's operating-system color preference

#### Scenario: Visitor chooses a mode
- **WHEN** a visitor selects Light, Dark, or System using the color-mode control
- **THEN** the site immediately renders using the selected mode's effective color palette

#### Scenario: Control is operated by keyboard
- **WHEN** a keyboard user focuses and operates the color-mode control
- **THEN** the user can determine the current selection and choose each available mode without a pointing device

### Requirement: System preference resolution
The site SHALL render the light palette when System mode is selected and the operating system prefers light colors, and SHALL render the dark palette when System mode is selected and the operating system prefers dark colors. While System mode remains selected, the site SHALL update its effective palette when the operating-system preference changes.

#### Scenario: System preference is dark
- **WHEN** System mode is selected and the operating system prefers dark colors
- **THEN** the site renders the dark palette

#### Scenario: System preference changes
- **WHEN** System mode is selected and the operating-system color preference changes
- **THEN** the site updates to the matching palette without requiring a page reload

### Requirement: Mode persistence and initial rendering
The site SHALL save a visitor's selected mode locally and restore it on later page loads. The restored effective palette SHALL be applied before the page is visibly rendered to avoid an incorrect light or dark palette flash.

#### Scenario: Saved Dark mode is restored
- **WHEN** a visitor previously selected Dark mode and returns to the site
- **THEN** the page initially renders in the dark palette and the control indicates Dark

#### Scenario: Saved System mode is restored
- **WHEN** a visitor previously selected System mode and returns to the site
- **THEN** the control indicates System and the page initially renders using the current operating-system color preference

### Requirement: Complete and legible dark presentation
The dark palette SHALL cover site backgrounds, text, links, navigation, menus, footer content, and interactive states. Each effective palette SHALL maintain legible text and visible interactive-state contrast.

#### Scenario: Dark mode navigation is usable
- **WHEN** the site renders in Dark mode and a visitor opens the mobile navigation menu
- **THEN** the menu background, text, links, and focus or hover states are legible against the dark palette
