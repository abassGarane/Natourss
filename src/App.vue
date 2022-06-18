<script>
	import Header from './components/Header.vue';
	export default {
		components: {
			Header,
		},
	};
</script>

<template>
	<Header />
</template>

<style lang="scss">
	/*
COLORS:

Light green: #7ed56f
Medium green: #55c57a
Dark green: #28b485

*/
	html {
		font-size: 62.5%;
	}

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		font-family: 'Lato', sans-serif;
		font-weight: 400;
		/* font-size: 16px; */
		line-height: 1.7;
		color: #777;
		padding: 3rem;
		box-sizing: border-box;
	}
</style>
