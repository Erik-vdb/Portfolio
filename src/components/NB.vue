<script>
export default {
	name: 'NB',
	props: ['compact'],
	
}
</script>

<template>
	<nav :class="compact ? 'main scrolled' : 'main'">
		<div id="left"></div>
		<div id="middle"></div>
		<div id="right"></div>
	</nav>
</template>

<style scoped lang='stylus'>
@import '../variables.styl'

	.main
		display flex
		justify-content space-between

		background-color primary
		text-align center

		transition-property height, opacity
		transition-duration 500ms
		
		z-index 100


	div
		height 100%
		margin 0 30px

	.scrolled
		opacity 0.2
</style>