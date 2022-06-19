<script>
	import Header from '../components/Header.vue';

	export default {
		name: 'Home',
		components: {
			Header,
		},
	};
</script>

<template>
	<Header />
</template>

<style lang="scss">
	@use '../scss/pages/home';
</style>
