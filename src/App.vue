<script>
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Me from './components/Me.vue'
import NB from './components/NB.vue'
import Projects from './components/Projects.vue'
import Quotes from './components/Quotes.vue'
import Skills from './components/Skills.vue'

export default {
	name: 'AppVue',
	components: {
		NB,
    Me,
		Skills,
		Projects
},
	data() {
		return {
			compact: false
		}
	},
	created(){
		window.addEventListener('scroll', () => {
			const sY = window.scrollY
			if (sY > 34) this.compact = true
			else this.compact = false
		})
	}
}
</script>

<template>
	<div>
		<div id="Top">
			<p>[WIP]</p>
		</div>
		<div v-if="compact" id="spacer"></div>
		<NB id="NB" :compact="compact"/>

		<div id="body">
			<Me id="Me"></Me>
			<Skills id="Skills"/>
			<Projects id="Projects"/>
		</div>

	</div>
	<a href="#Top"><div :class="compact ? 'goToTop show' : 'goToTop'"><v-icon color="#fff" icon="mdi-chevron-up"/></div></a>
</template>

<style lang="sass">
@import './variables.sass'

body
	background-color: $bg


#Top
	padding: 5px
	text-align: center
	background-color: black
	& p
		margin: 0
		font-size: 1rem
		animation: pulse 1.5s infinite
		@keyframes pulse
			0%
				opacity: 0
			50%
				opacity: 100
			100%
				opacity: 0

#body
	padding: 30px 0

	> div
		height: max(80vh, 700px)
		padding: 30px

#NB
	width: 100%
	height: 70px

#spacer
	width: 100%
	height: 70px

#NB.scrolled
	position: fixed
	top: 0

.goToTop
	display: flex
	justify-content: center
	align-items: center

	position: fixed
	background-color: $accent
	bottom: 50px
	right: 50px

	width: 50px
	height: 50px
	border-radius: 50%

	transition-property: opacity
	transition-duration: 300ms
	opacity: 0
	&.show
		opacity: 100%
</style>
