<script>
	import MongoDB from '../assets/Media/Logos/MongoDB.svg';
	import Redux from '../assets/Media/Logos/Redux.svg';
	import Scrum from '../assets/Media/Logos/Scrum.svg';
	import PSQL from '../assets/Media/Logos/PSQL.svg';
	import Jquery from '../assets/Media/Logos/Jquery.svg';
	export default {
		name: 'Skills',
		data() {
			return {
				mainSkills: [
					{
						name: 'Javascript',
						ico: 'mdi-nodejs',
						prof: 80,
						color: '#dbf54a'
					},
					{
						name: 'Typescript',
						ico: 'mdi-language-typescript',
						prof: 60,
						color: '#27609e'
					},
					{
						name: 'Vue.js',
						ico: 'mdi-vuejs',
						prof: 70,
						color: '#42ba82'
					},
					{
						name: 'MongoDB',
						img: MongoDB,
						prof: 50,
						color: '#0dc143'
					},
					{
						name: 'React',
						ico: 'mdi-react',
						prof: 50,
						color: '#61dafb'
					},
					{
						name: 'Redux',
						img: Redux,
						prof: 70,
						color: '#7044b8'
					},
				],
				otherSkills: [
					{
						name: 'Git',
						ico: 'mdi-git'
					},
					{
						name: 'Github',
						ico: 'mdi-github'
					},
					{
						name: 'Scrum',
						img: Scrum
					},
					{
						name: 'Express'
					},
					{
						name: 'Jquery',
						img: Jquery
					},
					{
						name: 'Postgresql',
						img: PSQL
					}

				]
			}
		},
	}
</script>

<template>
	<div id='main'>
		<div><h1>My Skills</h1></div>
		<div id="skills">
			<div class="SkillsContainer">
				<div class="verticalText">
					<p>Main</p>
				</div>
				<div class="" id="mainSkills">
					<div class="skill" v-for="(item, index) in mainSkills" :key="index">
						<v-progress-circular
						bg-color="transparent"
						:color="item.color"
						:model-value="item.prof"
						size="150"
						width="8"
						>
						<v-icon :title="`|-[${item.name}]-|\n[Proficiency: ${item.prof}]`" v-if="item.ico" :icon="item.ico" size="100" />
						<img  v-else :title="`|-[${item.name}]-|\n[Proficiency: ${item.prof}]`" style="z-index: 5;" :src="item.img" height="100" :alt="item.name">
					</v-progress-circular>
					</div>
				</div>
			</div>
			<div class="SkillsContainer">
				<div class="verticalText">
					<p>Other</p>
				</div>
				<div id="otherSkills">
					<div class="skill" v-for="(item, index) in otherSkills" :key="index">
						<v-icon :title="item.name" v-if="item.ico" color="accent" size="60" :icon="item.ico"/>
						<img v-else-if="item.img" :title="item.name" :src="item.img" alt="">
						<p v-else>{{ item.name }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang='sass'>
@import ../variables

h1
	text-align: center
#skills
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 20px

.SkillsContainer	
	display: grid
	grid-template-columns: 4em 1fr


.verticalText
	display: flex
	flex-direction: column
	justify-content: center
	border-right: $borderTransparent
	p
		display: flex
		justify-content: space-around
		color: $accent
		transform: rotate(-90deg)

#mainSkills
	display: grid
	grid-template-columns: repeat(3, 1fr)
	grid-template-rows: 1fr 1fr
	gap: 50px 0
	padding: 30px 0

	> .skill
		display: flex
		justify-content: center
		align-items: center

#otherSkills
	display: flex
	flex-flow: row wrap
	gap: 50px

	justify-content: space-around
	align-items: center
	> .skill
		color: $accent

		display: flex
		justify-content: center
		align-items: center

		width: 7vw
		height: 7vw
		> p
			color: $accent
			font-size: 2em
		> img
			height: 6em

</style>