# CONTEXT.md

Working context for the About Me site. Read this before changing code or copy.

## Stack

- Next.js with the App Router (`/app`)
- TypeScript in strict mode
- Tailwind CSS v4, configured in CSS through `@theme` in `app/globals.css`
- Geist Sans and Geist Mono, loaded locally through the `geist` package
- Deployed on Vercel with the default Next.js settings and no extra config

## Commands

- `npm run dev` starts the dev server
- `npm run build` creates the production build and type checks the project
- `npm run typecheck` runs the TypeScript compiler without emitting files

## Folder conventions

- `/app` holds routing only: the root layout, the home page, and global styles.
- Components live in `/components`. One component per file, named exports, PascalCase file names.
- All copy lives in `/content/site.ts`. Components never hard code visible text, link targets, or labels. They import `site` and render it.
- `/content/site.ts` exports the `SiteContent` type next to the data. Change the type first when a section needs a new field.
- Import across folders with the `@/` alias, for example `@/content/site`.

## Home page

`app/page.tsx` renders the sections in this fixed order:

1. Hero
2. About
3. Shipped
4. HowIWork
5. Content
6. Stack
7. Contact

Each section is its own component in `/components` and reads its data from `/content/site.ts`. Every section after the hero wraps its body in the shared `Section` shell, which draws the label rail and the heading.

## Design direction

Dark, minimal, developer-oriented.

- Dark only. There is no light theme.
- One accent color only: `--color-accent`. Use it for emphasis and interaction states, never as a second or third hue. Everything else is a neutral.
- Hairline borders and flat surfaces. No gradients, drop shadows, or rounded cards.
- Sans for reading, mono for labels, metadata, and anything that reads as data.

## Design system

Tokens are defined once in `app/globals.css` under `@theme` and used through Tailwind utilities.

| Group | Tokens | Utilities |
| --- | --- | --- |
| Color | `bg`, `surface`, `line`, `fg`, `muted`, `subtle`, `accent` | `bg-bg`, `border-line`, `text-muted`, `text-accent` |
| Typography | `label`, `body`, `lead`, `title`, `display` | `text-label`, `text-lead`, `text-title`, `text-display` |
| Spacing | `gutter`, `section`, `stack` | `px-gutter`, `py-section`, `mt-stack`, `gap-stack` |
| Layout | `page`, `prose` | `max-w-page`, `max-w-prose` |

Type and spacing tokens use `clamp()`, so they scale with the viewport without breakpoint overrides. Prefer a token over a one-off value.

## Layout

- Mobile first. The base styles are a single column, and breakpoints add columns.
- Page content sits inside `max-w-page` with `px-gutter` side padding.
- Running text is capped at `max-w-prose`.

## Animation

- Wrap content in `Reveal` from `/components/Reveal.tsx` for a subtle fade and rise the first time it scrolls into view.
- The hidden starting state is declared in CSS inside `prefers-reduced-motion: no-preference` and `scripting: enabled`. Visitors who ask for reduced motion, or who browse without JavaScript, see static content.
- Keep motion short and small. No parallax, no looping animation.

## Content rules

- No placeholder text. Every entry in `/content/site.ts` must be true and ready to publish. If there is nothing real to say yet, leave the entry out.
- No em dashes, in site copy or in this file. Use a comma, a colon, a period, or parentheses.
- Plain, first person, specific. Short sentences over long ones.
