<script>
	export default {
		name: 'About',
	};
</script>

<template>
	<section class="about">
		<div class="u-center u-mb-bg">
			<h2 class="heading-secondary">Exciting tours for adventurous people</h2>
		</div>
		<div class="row">
			<div class="col-1-2">
				<h3 class="heading-tertiary u-mb-sm">
					You are going to fall in love with nature
				</h3>
				<p class="paragraph">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non
					exercitationem nesciunt omnis ad, accusantium quod obcaecati sit, amet
					fugiat tempora! Ipsam porro quaerat dolores qui voluptas minus
					consequuntur cumque.
				</p>
				<h3 class="heading-tertiary u-mb-sm">
					Live adventures like you never had before
				</h3>
				<p class="paragraph">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non
					exercitationem nesciunt omnis ad, accusantium quod obcaecati sit.
				</p>
				<router-link to="/" class="btn-txt">Learn More &rarr;</router-link>
			</div>
			<div class="col-1-2">
				<div class="composition">
					<img
						src=".././assets/img/nat-1.jpg"
						alt=""
						class="composition__photo"
					/>
					<img
						src=".././assets/img/nat-2.jpg"
						alt=""
						class="composition__photo"
					/>
					<img
						src=".././assets/img/nat-3.jpg"
						alt=""
						class="composition__photo"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	@use '../scss/components/about';
	@use '../scss/layouts/grid';
</style>
