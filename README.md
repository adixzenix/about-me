# About Me

A personal project created with [Fredrin](https://fredrin.com), running entirely
on local git — no remote, and it does not need one. Branches, worktrees, diffs
and merges all happen on this machine.

The site is a single page built with Next.js (App Router), TypeScript, and
Tailwind CSS, ready to deploy on Vercel. See [CONTEXT.md](./CONTEXT.md) for the
stack, folder conventions, design system, and content rules.

## What's in here

- `app/` holds the root layout, the home page, and the global styles with the design tokens.
- `components/` holds one component per section, plus the shared shell and scroll-in animation.
- `content/site.ts` holds all site copy behind a typed schema.
- `CONTEXT.md` documents the conventions.
- `AGENTS.md` holds conventions for AI coding agents.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev      # dev server on http://localhost:3000
npm run build    # production build and type check
npm run start    # serve the production build
```

Work arrives as a Fredrin ticket, which gets its own branch and worktree off
`main` and merges back once the ticket is reviewed.
