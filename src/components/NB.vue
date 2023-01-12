<script>
export default {
	name: 'NB',
	props: ['compact'],
	
}
</script>

<template>
	<nav :class="compact ? 'main scrolled' : 'main'">
		<div id="middle">
			<a class="navElement flex" href="#Top"><span>Me</span></a>
			<a class="navElement flex" href="#Skills"><span>Skills</span></a>
			<a class="navElement flex" href="#Projects"><span>Projects</span></a>
			<a class="navElement flex" href="#Contact"><span>Contact</span></a>
		</div>
	</nav>
</template>

<style scoped lang='sass'>
@import '../variables.sass'


.main
	background-color: $primary
	border-bottom: $border
	
	text-align: center
	transition-property: height opacity border-bottom
	transition-duration: 500ms
	z-index: 100



.scrolled
	background-color: #00000000
	border-bottom: $borderTransparent
	span
		transition-property: color
		transition-duration: 500ms
		color: #ffffff20
	&:hover
		background-color: $secondaryTransparent
		border-bottom: $border
		span
			color: #fff

#middle
	display: grid
	grid-template-columns: repeat(4, 1fr)

	height: 100%
	margin: 0
	padding: 0

.navElement
	width: 100%
	height: 100%
	transition-property: background-color
	transition-duration: 200ms
	&:hover
		background-color: $darker


.flex
	display: flex
	justify-content: space-around
	align-items: center


a
	text-decoration: none

</style>