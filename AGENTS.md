# AGENTS.md

Conventions for AI coding agents working in **About Me**. This file is the
canonical entry point under the [AGENTS.md](https://agents.md) standard, and it
is the first thing a Fredrin Worker reads.

## Project

A single page personal site built with Next.js (App Router), TypeScript, and
Tailwind CSS, deployable on Vercel. Read [CONTEXT.md](./CONTEXT.md) for the
stack, folder conventions, design system, and content rules.

## Commands

- `npm install` installs dependencies
- `npm run dev` starts the dev server
- `npm run build` creates the production build and type checks
- `npm run typecheck` runs the TypeScript compiler without emitting files

There is no test suite or linter yet.

## Conventions

- Components live in `/components`.
- All copy lives in `/content/site.ts`. Never hard code visible text in a component.
- One accent color only (`--color-accent`). Use the design tokens in `app/globals.css`.
- No placeholder text and no em dashes in site copy or in `CONTEXT.md`.
- Animations must respect `prefers-reduced-motion`.
