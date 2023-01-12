<script>
	export default {
		name: 'Head',
	}
</script>

<template>
	<div class='main'>
		<div class="info"></div>
		<div class="img"><v-avatar
			size="300"
			color="primary"
		>
			<img src="../assets/Media/Me.jpg" alt="Me">
		</v-avatar></div>
	</div>
</template>

<style scoped lang='sass'>
@import ../variables

.main
	display: grid
	grid-template-columns: 1fr 300px

img
	height: 100%
	width: 100%
	object-fit: cover
</style>