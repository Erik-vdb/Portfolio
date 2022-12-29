<script>
export default {
	name: 'NB',
	props: ['compact'],
	
}
</script>

<template>
	<nav :class="compact ? 'main scrolled' : 'main'">
		<div id="left"></div>
		<div id="middle">

		</div>
		<div id="right"></div>
	</nav>
</template>

<style scoped lang='stylus'>
@import '../variables.styl'

	.main
		background-color primary
		text-align center

		transition-property height, opacity
		transition-duration 500ms

	.scrolled
		opacity 0.2
</style>