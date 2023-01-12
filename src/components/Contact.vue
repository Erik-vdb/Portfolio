<script>
	export default {
		name: 'Contact',
		data() {
			return {
				contact: [
					{
						medium: 'Email',
						link: 'mailto:vandenerik824@gmail.com',
					},
					{
						medium: 'WhatsApp',
						link: 'https://wa.me/+5491127176301'
					},
					{
						medium: 'Linkedin',
						link: 'https://www.linkedin.com/in/vdb-erik/'
					}
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
	grid-area: 11 / 2 / 14 / 7

	background-color: $darker
	text-align: center
	border-radius: $br 0 0 $br
	border: $border

	border-right: 0

</style>