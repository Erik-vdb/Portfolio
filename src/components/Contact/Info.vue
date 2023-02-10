<template>
	<div class='info'>
		<div v-for="item, i in contacts"
			:key="i">
			<a
			target="_blank"
			:href="item.link"
			>
				<div class="contactItem" 
				:style="`background-color: ${item.col}`"
				>
					<i :class="item.ico"></i>
					{{ item.medium }}
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Info',
		data() {
        return {
            contacts: [
                {
                    medium: "Email",
                    link: "mailto:vandenerik824@gmail.com",
										col: '#cd3c3c',
										ico: 'fa-solid fa-envelope'
                },
                {
                    medium: "WhatsApp",
                    link: "https://wa.me/+5491127176301",
										col: '#0dc143',
										ico: 'fa-brands fa-whatsapp'

                },
                {
                    medium: "Linkedin",
                    link: "https://www.linkedin.com/in/vdb-erik/",
										col: '#0068a7',
										ico: 'fa-brands fa-linkedin'
                },
								{
									medium: "Github",
									link: 'https://github.com/Erik-vdb',
									col: '#171515',
									ico: 'fa-brands fa-github'
								},
            ]
        };
    },
	}
</script>

<style scoped lang='sass'>
@import ../../variables

.info
	display: flex
	flex-direction: column
	gap: 20px

	&	div
			display: flex
			justify-content: center
			align-items: center
	a
		text-decoration: none
		color: $text
		width: fit-content
		height: fit-content

	.contactItem
		position: relative
		width: 200px
		text-align: center
		padding: 5px
		border-radius: 5px
		border: $border

	i
		position: absolute
		left: 20px

</style>
