<script>
export default {
	name: "Quotes",
	data() {
		return {
			quotes: [

			]
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
	grid-area: 1 / 5 / 4 / 7

	background-color: $darker
	text-align: center
	border: $border
	border-right: 0
	border-radius: $br 0 0 $br

</style>