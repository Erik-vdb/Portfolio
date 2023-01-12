<script>
	export default {
		name: 'Skills',
		data() {
			return {
				skills:[
					{
						name: 'Javascript',
						prof: 70,
						color: '#dbf54a'
					},
					{
						name: 'Vue.js',
						prof: 60,
						color: '#42ba82'
					},
					{
						name: 'MongoDB',
						prof: 40,
						color: '#42ba82'
					},
					{
						name: 'React',
						prof: 50,
						color: '#61dafb'
					},
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
				<div id="mainSkills">
					<div class="skill" v-for="(item, index) in skills" :key="index">
						<v-progress-circular bg-color="transparent" :color="item.color" :model-value="item.prof" size="150" ><p>{{item.name}}</p></v-progress-circular>
					</div>
				</div>
			</div>
			<div class="SkillsContainer">
				<div class="verticalText">
					<p>Other</p>
				</div>
				<div id="mainContents">
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang='sass'>
@import ../variables

#skills
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 20px
.SkillsContainer
	background-color: $darker
	border: 1px solid $accentTransparent
	
	display: grid
	grid-template-columns: 4rem 1fr

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
	grid-template-columns: 1fr 1fr
	grid-template-rows: 1fr 1fr
	gap: 50px 0
	padding: 30px 0
	> .skill
		display: flex
		justify-content: center
		align-items: center





</style>