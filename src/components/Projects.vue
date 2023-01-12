<script>
export default {
	name: "Projects",
	data() {
		return {
			dialog: false
		}
	},
}
</script>

<template>
	<div class="main">
		<div class="head">
			<h1><slot></slot></h1>
			<v-divider color="accent"></v-divider>
		</div>
	</div>
</template>

<style scoped lang='sass'>
@import '../variables.sass'

.main
	grid-area: 7 / 1 / 11 / 7

	text-align: center
	background: $secondary
	border: $border
	border-left: 0
	border-right: 0

</style>