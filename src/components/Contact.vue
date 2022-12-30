<script>
	export default {
		name: 'Contact'
	}
</script>

<template>
	<div class="main">
		<h2>Contact</h2>
		<div class="content">
			<div class="left">
				<div class="Info">
					<h4>You can contact me via:</h4>
					<p>Email: <a href="mailto:vandenerik824@gmail.com">vandenerik824@gmail.com</a></p>
				</div>
			</div>
			<div class="rigth">
				right
			</div>
		</div>
	</div>
</template>

<style scoped lang='stylus'>
	@import '../variables.styl';

	.main
		background-color secondary
		text-align center

		border-radius br 0 0 br
		border 1px solid accent

	.content
		display flex

		padding 0 20px
		height 80%

		& div
			width 50%
			min-width 30%


	.left
		border-right 1px solid accent


</style>