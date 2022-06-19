<script>
	import Header from '../components/Header.vue';
	import About from '../components/About.vue';

	export default {
		name: 'Home',
		components: {
			Header,
			About,
		},
	};
</script>

<template>
	<Header />
	<main>
		<About />
	</main>
</template>

<style lang="scss">
	@use '../scss/pages/home';
</style>
