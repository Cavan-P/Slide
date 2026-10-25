<script lang="ts">
	import levels from '#lib/game/levels.json'
	import { parseLevel, newGame } from '#lib/game/level.ts'

	const levelArray = levels.levels
	const level = parseLevel(levelArray[0])
	const loadedLevel = newGame(level)

</script>

<svelte:head>
	<title>Slide</title>
</svelte:head>

<div>
	<pre>{JSON.stringify(loadedLevel, null, 2)}</pre>
</div>
