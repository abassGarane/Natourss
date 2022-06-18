<script>
	export default {
		name: 'Header',
	};
</script>

<template>
	<div class="header">
		<div class="header__logo-box">
			<img src="../assets/img/logo-white.png" alt="logo" class="header__logo" />
		</div>
		<div class="header__text-box">
			<h1 class="heading-primary">
				<span class="heading-primary--main">Outdoors</span>
				<span class="heading-primary--sub">Is where life happens</span>
			</h1>
			<a href="#" class="btn btn--white btn--animated">Discover Our Tours</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '../scss/layouts/header';
</style>
