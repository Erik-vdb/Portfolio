<script>
import Greet from './Greet.vue';
import InfoVue from './Info.vue';

	export default {
    name: "Contact",
    components: { Greet, InfoVue }
}
</script>

<template>
	<div>
		<div class="content">
			<Greet/>
			<InfoVue/>
		</div>
	</div>
</template>

<style scoped lang='sass'>
@import '../../variables.sass'

.content
	display: grid
	grid-template-columns: repeat(2, 1fr)
</style>