<script>
import Contact from './components/Contact.vue';
import Me from './components/Me.vue';
import NB from './components/NB.vue';
import Projects from './components/Projects.vue';
import Quotes from './components/Quotes.vue';
import Skills from './components/Skills.vue';

export default {
	name: 'AppVue',
	components: {
		Me,
		Skills,
		Quotes,
		Projects,
		Contact,
		NB
	},
	data() {
		return {
			compact: false
		}
	},
	created(){
		window.addEventListener('scroll', () => {
			const sY = window.scrollY
			if (sY > 28.39) this.compact = true
			else this.compact = false
		})
	}
}
</script>

<template>
	<div>
		<div id="UCC">
			<p>Under Construction / WIP / Prototype</p>
		</div>
		<NB id="NB" :compact="compact"/>
		<div id="gridCont">
			<Me id="Me"/>
			<Skills id="Skills"/>
			<Quotes id="Quotes"/>
			<Projects id="Projects"/>
			<Contact id="Contact"/>
		</div>
	</div>
</template>

<style lang="stylus">
@import './variables.styl'

body
	background-color bg

#UCC
	padding 5px
	text-align center
	background-color black
	& p
		margin 0
		animation pulse 1.5s infinite
		@keyframes pulse
			0%
				opacity 0
			50%
				opacity 100
			100%
				opacity 0


#gridCont
	padding 30px 0
	display grid;
	grid-template-columns repeat(6, 1fr);
	grid-template-rows repeat(12, 10rem);
	grid-column-gap 20px;
	grid-row-gap 20px;

#Me
	grid-area 1 / 1 / 4 / 5;

#Quotes
	grid-area 1 / 5 / 4 / 7

#Skills
	grid-area 4 / 2 / 7 / 6

#Projects
	grid-area 7 / 1 / 10 / 6

#Contact
	grid-area 10 / -6 / 13 / -1

#NB
	width 100%
	height 100px

.scrolled
	position fixed
	top 0
</style>
