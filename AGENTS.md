# Repository Guidelines

## Project Structure

This repository is a Next.js App Router application. Route entry points live in `app/`; reusable UI is in `components/`, grouped by feature such as `home/` and `room/`. Shared data handling, types, and date utilities are in `lib/`, with room data in `lib/data/complete_data.json`. Tests are under `tests/`, mirroring the component, library, and page areas; browser flows are in `tests/e2e/`.

## Build, Test, and Development Commands

Use Bun, matching the checked-in `bun.lock`:

- `bun install` installs dependencies.
- `bun dev` starts the local Next.js server at `http://localhost:3000`.
- `bun run build` creates a production build; `bun run start` serves it.
- `bun lint` checks formatting and lint rules with Biome; `bun run lint:fix` applies safe fixes.
- `bun type-check` runs TypeScript without emitting files.
- `bun run test` runs Jest unit tests and collects coverage.
- `bun test:e2e` runs Playwright browser tests; the config starts the dev server and covers Chromium, Firefox, and WebKit.

## Coding Style and Naming

Follow Biome settings: two-space indentation, double quotes in JavaScript/TypeScript, and an 80-character line width. Keep TypeScript strict and use the `@/` alias for root-based imports where appropriate. Name React components and component files in PascalCase; use descriptive camelCase for utilities. Keep feature-specific UI in its matching `components/` subdirectory.

## Testing Guidelines

Name Jest tests `*.test.ts` or `*.test.tsx` and place them under `tests/` near the area they cover. Name Playwright tests `*.spec.ts` in `tests/e2e/`. Add or update tests for behavior changes, and run the relevant suite plus lint and type checking before submitting. Jest collects coverage, but no minimum threshold is configured.

## Commits and Pull Requests

Recent history uses short Conventional Commit-style prefixes, such as `fix:`, `chore:`, `chore(config):`, and `chore(deps-dev):`. Keep commit subjects specific and concise. Pull requests should explain the change and its user impact, link a related issue when applicable, and report relevant validation. Include screenshots for visible UI changes.
