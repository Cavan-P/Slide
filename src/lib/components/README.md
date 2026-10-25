# components/

Reusable Svelte UI pieces (`.svelte` files), e.g. the board, a tile, a HUD.

What goes here:

- Components that _display_ state and _report_ what the user did (props in, callbacks out).
- Component-scoped styling (Tailwind classes or a `<style>` block).

What doesn't: game rules. A component should ask `game/` what a move does, not decide it itself.
