# AGENTS.md

## Project overview

This repository is a Vite + React + TypeScript single-page app. The app is structured around a mobile-first investigation experience with a few top-level views and a persistent bottom navigation.

- Main app state and navigation live in `src/App.tsx`
- Screen-level views live under `src/pages/`
- Shared UI patterns live under `src/components/ui/`
- Domain data and scheduled event logic live under `src/data/`
- Styling is primarily inline `style` props and small shared UI wrappers rather than CSS modules or component-scoped styles

## Working conventions

- Prefer functional React components and hooks.
- Keep TypeScript types explicit for props, view names, and app data models.
- Reuse the existing UI primitives (`AppShell`, `Panel`, `SectionBadge`, `BackButton`, `StatTile`, `ActionButton`) instead of creating ad hoc one-off wrappers.
- Preserve the app’s navigation model: `currentView`, `previousView`, and tab-driven state are coordinated in `App.tsx`.
- If a new screen or action affects case state, persist it consistently with the existing `localStorage` keys and avoid duplicating storage logic.
- For animations, prefer the existing `framer-motion` patterns already used throughout the app.

## Build and validation

Use these commands from the repo root:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

When making product or UI changes, validate with the smallest relevant check that covers the change. For TS/React edits, prefer `npm run build` and `npm run lint` before finishing.

## Implementation guidance

- Keep changes incremental and cohesive; avoid broad rewrites.
- Match the current dark, high-contrast app aesthetic and motion language.
- Follow the existing naming patterns for tabs, view names, and store keys.
- If adding a new case-related feature, trace it through the relevant page, app state, and notification flow instead of adding disconnected logic.
- Do not introduce new styling systems if the existing inline style + shared component pattern already fits the feature.

## Good starting points for agents

- `src/App.tsx` for top-level state, navigation, and case flow
- `src/pages/Home.tsx` for the home/investigation entry pattern
- `src/pages/Case1.tsx` for deeper case navigation behaviors
- `src/components/ui/AppShell.tsx` for layout conventions
- `src/data/case1Broadcasts.ts` for scheduled content and data shapes
