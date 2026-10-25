# state/

Shared, reactive app state that outlives a single component, written as
`.svelte.ts` files so they can use runes (`$state`, `$derived`) outside components.

Likely future residents:

- The current game session (wraps `game/` functions in reactive state).
- Settings (board size, theme) and best scores, possibly persisted to `localStorage`.

You may not need this folder until state has to be shared between components
or pages. Start with state inside a component; move it here when that gets awkward.
