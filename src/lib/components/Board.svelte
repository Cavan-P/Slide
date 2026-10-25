<script lang="ts">
    import type { GameState } from '#lib/game/types.ts'
    let { game }: { game: GameState } = $props()
</script>

<div class='grid' style="grid-template-columns: repeat({game.level.cells[0].length}, 40px)">
    {#each game.level.cells as row}
            {#each row as cell}
                <span class='cell {cell.kind}'></span>
            {/each}
    {/each}
</div>

<style>
    .grid {
        display: grid;
    }
    .cell {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: gray;
    }
    .floor {
        background: transparent;
        border-color: black;
        border-width: 1px;
    }
    .wall {
        background: rgb(117, 116, 116);
    }
    .void {
        background: transparent;
    }
</style>