# About Me

The About Me site: a single page personal site for Aditya Singh, an AI engineer
shipping production LLM agents, voice AI and multi-tenant platforms. It covers
who I am, what I have shipped, how I work, what I publish, the stack I use, and
how to reach me.

It is built with Next.js (App Router), TypeScript, and Tailwind CSS v4, and it
is statically prerendered, so it deploys to Vercel with no extra configuration.

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

Other commands:

```bash
npm run build      # production build and type check
npm run start      # serve the production build
npm run typecheck  # TypeScript only, no output files
```

## Deploy it

The site targets Vercel and uses the default Next.js settings. There is no
`vercel.json` because none is needed.

1. Push the repository to a Git host and import it in Vercel, or run `npx vercel`
   from the project root.
2. Keep the detected framework preset (Next.js), build command (`next build`),
   and output settings.
3. Set the `NEXT_PUBLIC_SITE_URL` environment variable to the production origin,
   for example `https://example.com`, then deploy.

`NEXT_PUBLIC_SITE_URL` feeds the canonical URL, the Open Graph and Twitter tags,
`robots.txt`, and `sitemap.xml`. When it is not set, a Vercel build falls back
to the project's production URL, and a local build falls back to
`http://localhost:3000`.

Any host that runs Next.js works too: run `npm run build`, then `npm run start`.

## What is in here

- `app/` holds routing: the root layout with the SEO metadata, the home page,
  the global styles with the design tokens, and the generated files below.
- `components/` holds one component per section, plus the shared section shell
  and the scroll-in animation.
- `content/site.ts` holds all page copy behind a typed schema.
- `content/seo.ts` holds the search and social metadata and the site URL.
- `CONTEXT.md` is the Project Context file: stack, conventions, design system,
  and content rules.
- `AGENTS.md` holds the conventions for AI coding agents.

## SEO and generated assets

| Route | Source | Purpose |
| --- | --- | --- |
| `/opengraph-image` | `app/opengraph-image.tsx` | Share card, rendered at build time with `next/og` |
| `/twitter-image` | `app/twitter-image.tsx` | The same card for Twitter |
| `/icon.svg` | `app/icon.svg` | Favicon |
| `/robots.txt` | `app/robots.ts` | Crawler rules and the sitemap location |
| `/sitemap.xml` | `app/sitemap.ts` | Sitemap |

## How it was built

This site was built through [Fredrin](https://fredrin.com). The work was split
into small tickets that ran in parallel. Each ticket got its own branch and its
own git worktree off `main`, so several AI coding agents could build at the same
time without touching each other's files, and each branch merged back after
review.

What kept the parallel work consistent is the Project Context file,
[CONTEXT.md](./CONTEXT.md). Every ticket read it before changing code, so every
worktree followed the same stack, folder conventions, design tokens, and content
rules.
