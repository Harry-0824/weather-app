# AGENTS.md

AI coding agents working in this repository must follow these project rules.

## Project Profile

- This is a Next.js weather app built with React, TypeScript, styled-components, ESLint, and Vitest.
- The app is not deployed yet.
- Use npm as the package manager. Do not introduce another package manager.
- Keep changes small, issue-driven, and limited to the scope requested in the current GitHub issue or task.

## Working Rules

- Read the issue or task before editing.
- Modify only the files needed for the requested scope.
- Do not create extra markdown files unless explicitly requested.
- Do not add `WORKFLOW.md`, `TODO.md`, `PROJECT_BRIEF.md`, `ARCHITECTURE.md`, `NOTES.md`, or other planning documents unless the user asks for them by name.
- Do not refactor unrelated code while completing a focused task.
- Do not deploy the project or add deployment configuration unless explicitly requested.
- Do not modify `package.json` or install dependencies unless the issue explicitly requires it.

## Branch Strategy

- `main`: stable project branch.
- `feature/*`: new user-facing features.
- `fix/*`: bug fixes and behavior corrections.
- `docs/*`: documentation-only changes.

## Weather App Rules

- Never expose weather API keys in source code, logs, screenshots, docs, PR text, or committed files.
- Keep API keys and provider secrets in local environment variables such as `.env.local`.
- Preserve clear UI states for loading, empty, error, and success flows.
- Keep weather API access in API routes, services, or hooks instead of placing provider calls directly in UI components.
- Maintain strong TypeScript types for weather API responses, mapped weather data, component props, and API results.
- Avoid `any`; prefer explicit types or `unknown` with validation.
- Add or update focused tests when changing logic, services, hooks, validation, or API behavior.

## npm Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production output: `npm run build`
- Run lint: `npm run lint`
- Run tests once: `npm run test`
- Run tests in watch mode: `npm run test:watch`

## PR Checklist

- Confirm the task stayed within the issue scope.
- Confirm no unrelated application code changed.
- Confirm no weather API key or secret was exposed.
- Confirm no extra documentation files were created.
- Mention the verification steps used in the PR description.
