<script>
	export default {
		name: 'Project',
		props: {
				name: String,
				desc: String,
				imgSrc: Object,
				techStack: Array
		},
		data() {
			return {
				portrait: "",
				imgs: [],
				dialog: false
			}
		},
		mounted(){
			this.imgSrc.names.forEach(el => {
					this.imgs.push(`src/assets/Media/Projects/${this.imgSrc.root}/${el}.jpg`)
			})
			this.imgs.forEach(el => {
				if (el.includes('Portrait')){
					this.portrait = el
				}
			})
		}
}
</script>

<template>
	<div class='main' @click="dialog=true">
		<div class="img">
			<img :src="portrait" alt="">
		</div>
		<div class="title"><p>{{ name }}</p></div>

	</div>

	<v-dialog v-model="dialog" transition="dialog-transition">
			<div class="dialogContent">
				<div class="info">
					<div class="title"><h1>{{ name }}</h1></div>
					<div class="desc"> <p>{{ desc }}</p></div>
					<div class="tech">
						<div class="title"><h4>Tech Stack</h4></div>
						<div class="chips">
							<div class="chip" v-for="(item, index) in techStack" :key="index">
								<v-chip label class="bg-primary">{{ item }}</v-chip>
							</div>
						</div>
					</div>
				</div>
					<div class="carousel">
					<v-carousel 
					cycle interval="4000" 
					show-arrows="hover"
					hide-delimiters hide-controls>
						<v-carousel-item
						v-for="(item, index) in imgs"
						:key="index"
						:src="item" alt=""
						/>
					</v-carousel>
				</div>
				<div class="links"></div>
			</div>
		</v-dialog>
</template>



<style scoped lang='sass'>
@import ../../variables

.main
	background-color: $secondaryTransparent
	border: $borderTransparent
	border-radius: $br

	display: flex
	flex-direction: column
	justify-content: space-around
	align-items: center

	width: min(400px, 30vw)
	height: min(400px, 30vw)
	padding: 20px

	transition: background-color 200ms

	&:hover
		cursor: pointer
		background-color: $accentTransparent
	.img
		img
			width: 100%
			height: 100%
			object-fit: cover
			border-radius: 10px
	p
		text-align: center

.dialogContent
	background-color: $bg
	width: 80vw
	height: 90vh
	margin: auto
	padding: 20px

	display: flex
	flex-direction: column
	justify-content: space-around

	border-radius: $br
	
	.info
		display: grid
		height: 25%

		grid-template-columns: 1fr 400px
		grid-template-rows: repeat(2, 1fr)
		padding: 0 20px

		> div
			display: flex
			justify-content: center
			align-items: center
		.title
			grid-area: 1/1/2/2
			h1
				color: $text
				font-style: italic
		
		.desc
			grid-area: 2/1/3/2

			p
				color: $textGray
				text-align: center
				font-size: 1rem
		.tech
			grid-area: 1/2/3/3
			
			display: flex
			flex-wrap: wrap
			flex-direction: column

			.chips
				display: flex
				justify-content: center
				gap: 20px
				flex-wrap: wrap
				padding: 30px



	.carousel
		width: 80%
		margin: auto
</style>