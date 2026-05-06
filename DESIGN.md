# DESIGN.md

## Overview

This project should feel like a clean, practical, and polished weather application.

The design should communicate:

- Clarity
- Calmness
- Reliability
- Fast understanding
- Weather-data readability
- Responsive usability

The app should not feel like a decorative concept mockup where visual effects reduce readability. It should feel like a useful weather interface with clear hierarchy, legible forecasts, and thoughtful states for loading, error, empty, and successful data.

## Visual Direction

Use a calm, modern weather dashboard style focused on readable data presentation.

Preferred visual qualities:

- Clear weather summary at the top
- Readable forecast cards
- Strong visual hierarchy for temperature and location
- Subtle atmosphere through gradients or surfaces when appropriate
- Clean spacing
- Useful empty, loading, and error states
- Mobile-first readability

Avoid:

- Overly decorative weather illustrations that reduce clarity
- Generic SaaS dashboard styling without weather context
- Low-contrast text over busy backgrounds
- Cluttered forecast layouts
- Excessive animation
- Redesigning unrelated pages or flows inside scoped UI tasks

## Colors

The visual system should feel calm, readable, and weather-appropriate.

Recommended color roles:

- Background: soft sky tone, deep evening tone, neutral surface, or existing theme surface
- Primary text: high-contrast dark or light text depending on background
- Secondary text: muted gray or muted blue-gray
- Accent: restrained blue, cyan, yellow, or weather-appropriate highlight color
- Borders: subtle translucent or neutral lines
- Cards: clean elevated or layered surfaces with readable contrast

Implementation rules:

- Reuse existing project styles and styled-components patterns when available.
- Do not introduce many new arbitrary colors.
- Use accents to clarify important weather data, not for decoration alone.
- Ensure forecast text remains readable on all screen sizes.

## Typography

Typography should prioritize fast scanning and readability.

Rules:

- Temperature and location should have the strongest visual hierarchy.
- Forecast labels should be clear and compact.
- Body text should remain readable at mobile sizes.
- Avoid decorative typography.
- Avoid too many font sizes or weights.

Recommended hierarchy:

- Current temperature: largest data point
- Location / city: prominent and clear
- Weather condition: readable secondary emphasis
- Section heading: clear but not oversized
- Forecast data: compact and scannable
- Metadata / timestamps: smaller and muted

## Layout & Spacing

The layout should make weather data easy to understand quickly.

Rules:

- Keep the current weather summary visually dominant.
- Use clear grouping for hourly and daily forecasts.
- Use cards or sections to separate different weather data types.
- Preserve spacing between data groups.
- Avoid cramped forecast rows.
- Do not change unrelated layout areas when working on a scoped issue.

Responsive rules:

- Mobile layout should be the priority.
- Forecast cards should stack or scroll clearly on small screens.
- Search and main weather summary should remain easy to access.
- Avoid desktop-only layouts that break on mobile.

## Components

### Search

Search should be simple and easy to use.

Rules:

- Keep input and submit actions clear.
- Show useful empty and error states.
- Avoid adding complex search behavior unless explicitly requested.

### Weather Summary

The current weather summary should be the primary focus.

Rules:

- Make temperature, location, and condition easy to identify.
- Use icons or visual cues only when they improve clarity.
- Avoid hiding important data behind interactions.

### Forecast Cards

Forecast cards should be compact and readable.

Rules:

- Use consistent labels and values.
- Keep spacing consistent.
- Group related data together.
- Avoid visual clutter.

### State UI

Loading, error, empty, and no-result states should be designed intentionally.

Rules:

- State messages should be clear and concise.
- Error states should explain what happened and what the user can do next.
- Loading states should not cause layout jumps when avoidable.

## Motion & Interaction

Motion should be subtle and should not distract from weather data.

Rules:

- Prefer subtle transitions and hover effects.
- Avoid excessive animation.
- Do not add heavy animation libraries unless explicitly requested.
- Keep interaction feedback clear.

## Accessibility

Design changes must preserve accessibility.

Rules:

- Maintain sufficient color contrast.
- Use semantic HTML where possible.
- Do not remove visible focus states.
- Interactive elements must remain keyboard accessible.
- Avoid using color alone to communicate weather meaning or severity.

## Do's

- Keep the visual language calm and data-focused.
- Prioritize temperature, location, and forecast readability.
- Reuse existing styled-components patterns where possible.
- Keep UI changes scoped to the GitHub Issue.
- Check responsive behavior after UI changes.
- Include useful state UI when the issue involves data fetching or search.

## Don'ts

- Do not introduce unrelated visual styles.
- Do not redesign unrelated pages or sections.
- Do not add a UI library unless explicitly requested.
- Do not copy reference images pixel-by-pixel.
- Do not create broad refactors inside a UI issue.
- Do not add unnecessary markdown files.

## AI Implementation Rules

When implementing UI-related GitHub Issues:

1. Read this file before modifying UI.
2. Follow `AGENTS.md` for engineering rules.
3. Treat visual references as direction, not pixel-perfect specifications.
4. Keep changes limited to the page, section, or component group described in the issue.
5. Do not introduce unrelated redesigns.
6. Do not modify unrelated files.
7. Explain in the PR summary how the implementation follows this design direction.
