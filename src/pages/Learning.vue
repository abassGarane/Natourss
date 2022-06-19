<script>
	export default {
		name: 'Learning',
	};
</script>

<template>
	<h1>Learning</h1>
	<div class="grid_learn">
		<div class="row">
			<div class="col-1-2">col-1-2</div>
			<div class="col-1-2">col-1-2</div>
		</div>
		<div class="row">
			<div class="col-1-3">col-1-3</div>
			<div class="col-1-3">col-2-3</div>
			<div class="col-1-3">col-3-3</div>
		</div>
		<div class="row">
			<div class="col-1-3-2">col-1-3</div>
			<div class="col-2-3">col-2-3</div>
		</div>
	</div>
</template>

<style lang="scss">
	@use '../scss/layouts/grid';
</style>
