<script lang="ts">
    import type { GameState } from '#lib/game/types.ts'
    let { game }: { level: GameState } = $props()
</script>

{#each game.level.cells as row}
	<p>
		{#each row as cell}
			{cell.kind}
		{/each}
	</p>
{/each}