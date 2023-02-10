<template>
	<div class="greet">
		<h1>Thanks for coming!</h1>
		<h2>If you wish to ask me anything, <strong>Contact me!</strong></h2>
		<p>Or download my <a :href="dl" download>Resume</a></p>
	</div>
</template>

<script>
import Resume from '../../assets/Resume - Erik Van den Bosch Vidal.pdf';
export default {
	name: 'Greet',
	created(){console.log(this.dl)},
	data() {
		return {
			dl: Resume
		}
	},
}
</script>

<style lang="sass">
	.greet
		display: flex
		flex-direction: column
		justify-content: center
		align-items: center

	h2
		font-weight: 300
</style>