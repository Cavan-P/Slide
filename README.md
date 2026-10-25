# Slide

A browser game built with SvelteKit, prerendered to static files and served from a droplet.

## Commands

| Command             | What it does                                      |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Dev server with hot reload                        |
| `npm run check`     | Type-check Svelte + TS                            |
| `npm run test:unit` | Vitest in watch mode                              |
| `npm run lint`      | Prettier + ESLint check (`npm run format` to fix) |
| `npm run build`     | Static build into `build/`                        |
| `npm run preview`   | Serve the built `build/` locally                  |

## Structure

```
src/
  app.html            HTML shell every page is injected into
  app.d.ts            Global TypeScript types for SvelteKit (App.*)
  routes/             One folder = one URL. SvelteKit's file-based router.
    +layout.svelte    Wraps every page (global CSS, favicon, shared chrome)
    +layout.ts        prerender = true → every page is built to static HTML
    +page.svelte      The "/" page
    layout.css        Tailwind entry point
  lib/                Importable code, via the #lib alias (#lib/game/...)
    game/             Pure game rules + tests. No Svelte.
    components/       Svelte UI pieces
    state/            Shared reactive state (.svelte.ts), when needed
    assets/           Images/fonts imported from code (bundled, hashed)
static/               Files served as-is at the site root (robots.txt)
deploy/               Server config + deploy notes (not shipped)
```

Each folder under `src/lib/` and `deploy/` has a README explaining what belongs there.

## Config files

- `vite.config.ts`: build tool config, SvelteKit adapter (static), Tailwind, Vitest
- `tsconfig.json`: extends the one SvelteKit generates in `.svelte-kit/`
- `eslint.config.js`, `prettier.config.js`: linting and formatting
- `.nvmrc`: Node version (24)
