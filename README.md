# About Me

A personal project created with [Fredrin](https://fredrin.com), running entirely
on local git — no remote, and it does not need one. Branches, worktrees, diffs
and merges all happen on this machine.

**Status: scaffold.** The repository holds its documentation and ignore rules and
nothing else — there is no application code yet, so there is nothing to install
and nothing to run. This README describes the project exactly as it stands; the
sections below fill in when the first code lands.

## What's in here

- `README.md` — this file.
- `AGENTS.md` — conventions for AI coding agents, following the
  [AGENTS.md](https://agents.md) standard. A stub for now.
- `.gitignore` — ignores dependencies, secrets, build output, editor and OS
  cruft, and Fredrin's machine-local `.fredrin/` state.

## Install

Nothing to install. There is no dependency manifest (no `package.json`,
`pyproject.toml` or equivalent) and no build step, so a working copy is just a
copy of the repository:

```bash
git clone /path/to/about-me
cd about-me
```

Because the project is local-only, that path is the checkout on this machine
rather than a URL.

## Run locally

Nothing to run — there is no entry point, dev server, build or test command yet.
The day-to-day loop today is plain git against `main`:

```bash
git status
git log --oneline
```

Work arrives as a Fredrin ticket, which gets its own branch and worktree off
`main` and merges back once the ticket is reviewed. When the first runnable code
lands, its commands belong here and in the **Commands** section of `AGENTS.md`.
