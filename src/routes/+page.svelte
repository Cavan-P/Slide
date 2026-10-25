<script lang="ts">
	import levels from '#lib/game/levels.json'
	import Board from '#lib/components/Board.svelte'
	import { parseLevel, newGame } from '#lib/game/level.ts'

	const levelArray = levels.levels
	const level = parseLevel(levelArray[0])
	const currentLevel = newGame(level)

</script>

<svelte:head>
	<title>Slide</title>
</svelte:head>

<Board game={currentLevel} />
