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

## Post-Merge Cleanup Rules

After a PR is successfully merged, clean up the PR head branch when it is safe to do so.

Delete both:

- the remote PR branch
- the local PR branch

Only clean up branches that clearly belong to the merged PR and match these work branch patterns:

- `feature/*`
- `fix/*`
- `docs/*`

Do not delete:

- `main`
- `master`
- `develop`
- `release/*`
- `production/*`
- protected branches
- branches that are not clearly the merged PR head branch
- branches with unmerged or uncertain work

Recommended cleanup commands when safe:

```bash
git checkout main
git pull origin main
git branch -d <branch-name>
git push origin --delete <branch-name>
```

Do not use `git branch -D` unless the user explicitly approves a force delete.

If the environment or tool cannot delete the branch, report the exact branch name and the manual cleanup commands needed.

## UI and Design Rules

For UI-related changes, always read and follow `DESIGN.md`.

Do not introduce unrelated visual styles, new UI libraries, or broad redesigns unless explicitly requested by the GitHub Issue.

Each UI task should stay limited to the page, section, or component group described in the Issue.

Do not copy visual references pixel-by-pixel. Use them only as design direction and convert them into maintainable implementation.

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
