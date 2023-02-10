<template>
	<div id="main">
		<div class="title">
			<h1>My Projects</h1>
		</div>

		<div id="projects">
			<Project class="project" 
			v-for="(item, index) in projects" 
			:key="index" 
			:="item"/>
		</div>
	</div>
</template>

<script>
	import Project from "./project.vue";

	export default {
		name: "Projects",
		data() {
			return {
				projects: [
					{
						name: "Finanzas Personales",
						desc: "A Web App designed with the aim to facilitate the manual management of one’s personal finances. It allows account creation and login with Google Auth and natively and features 2 table views for input and output, Graph Views, Reviews, Admin Tab and other functionalities.",
						imgSrc: {
							root: 'FinanzasPersonales',
							names: [
							'Portrait',
							'Ahorro',
							'Equipo',
							'Graficos',
							'Login',
							'Pagina Principal',
							'Panel Ingresos',
							'Premium'
						]
						},
						techStack: [
						'Typescript',
						'React',
						'Redux Toolkit',
						'MongoDB',
						'Express',
						],
						link: 'http://proyecto-final-lime-beta.vercel.app/'
					},
					{
						name: "HenryDex",
						desc: "A Web App that consumed the PokeAPI API to display information about every Pokémon. Additionally, the app allowed the user to create their own Pokémons and store them in a PostgreSQL database.",
						imgSrc: {
							root: "HenryDex",
							names: [
								'Landing',
								'Portrait',
								'Detail',
								'Creation',
								'Creation2'
							]
						},
						techStack: [
							'Javascript',
							'React',
							'Redux Toolkit',
							'PostgreSQL',
							'Express'
						],
						link: 'http://henry-dex.vercel.app/'
					},
					{
						name: "Finca Paraiso",
						desc: "A page to showcase pictures and information for Finca Paraiso. Static page made with Vue.js and deployed to Render",
						imgSrc: {
							root: "FincaParaiso",
							names: [
								'Portrait',
								'Headline',
								'Galeria 1',
								'Galeria 2',
								'Contacto'
							]
						},
						techStack: [
							'Javascript',
							'Vue',
							'Vite',
						],
						link: 'https://finca-paraiso.onrender.com'
					},
				],
				dialogData: {},
				dialog: false,
			};
		},
		components: { Project },
		methods: {
			open(data) {
				this.dialogData = data;
				this.dialog = true;
			},
		},
	};
</script>

<style scoped lang="sass">
@import ../../variables

#projects
	display: flex
	justify-content: center
	gap: 20px

	overflow-x: auto
</style>
