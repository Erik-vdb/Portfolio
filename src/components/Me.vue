<script>
export default {
	name: "Me",
	data() {
		return {
			
		}
	},
}
</script>

<template>
	<div class="main">
			<h1>Welcome to my humble abode!</h1>
			<h2>My name is Erik Van den Bosch Vidal</h2>
			<div class="text">
				<p>
					A Full Stack Developer that, for better or worse, does not follow common trends... <br>
					Opting instead to find the most comfortable way for me to do things effectively.<br>
					<br>
					I'm creative, adaptable, diligent and a quick learner <br>
				</p>
			</div>
	</div>
</template>

<style scoped lang='stylus'>
@import '../variables.styl'

	.main
		position relative
		padding 10px

		background-color secondary

		border-radius 0 br br 0
		border 2px solid accent
		border-left 0

		text-align center

	.text
		padding-top 30px

		& p 
			line-height 2rem
			font-size 1.5rem
</style>