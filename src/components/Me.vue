<script>
export default {
	name: "Me",
}
</script>

<template>
	<div class="Me">
		<div class="me">
			<h1>Welcome to my humble abode</h1>
			<p>I'm Erik Van den Bosch Vidal, a Creative, Adaptable and Quick learning Full Stack Developer in love with Vue.js</p>
		</div>
		<div class="img"><img src="../assets/Media/Me.jpg" alt="Me"></div>
	</div>
</template>

<style scoped lang='sass'>
@import '../variables.sass'

.Me
	display: grid
	grid-template-columns: 1fr 500px

	> div
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center
		gap: 20px
	p
		width: 50%
		text-align: center
		font-size: 1.5rem

	.img
		height: fit-content
		width: fit-content
		margin: auto
		img
			height: 450px
			border-radius: 50%
</style>