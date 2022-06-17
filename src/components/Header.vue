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

<style lang="scss">
	.header {
		height: 95vh;
		background-image: linear-gradient(
				to right bottom,
				rgba(126, 213, 111, 0.8),
				rgba(40, 180, 133, 0.8)
			),
			url('./assets/img/hero.jpg');
		background-size: cover;
		background-position: top;
		clip-path: polygon(0% 0%, 100% 0%, 100% 75vh, 0% 100%);
		position: relative;
	}

	.header__logo-box {
		position: absolute;
		top: 4rem;
		left: 4rem;
	}

	.header__logo {
		height: 3.5rem;
	}
	/* .logo:hover {
	animation: move_in_right 1s ease-out;
} */
	.header__text-box {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
	}

	.heading-primary {
		color: #fff;
		text-transform: uppercase;
		backface-visibility: hidden;
		margin-bottom: 6rem;
	}
	.heading-primary--main {
		display: block;
		font-weight: 400;
		font-size: 6rem;
		letter-spacing: 3.5rem;
		animation: move_in_left 1s ease-out;
	}
	.heading-primary--sub {
		display: block;
		font-weight: 700;
		font-size: 2rem;
		letter-spacing: 1.74rem;
		animation: move_in_right 1s ease-out;
	}
	.btn:link,
	.btn:visited {
		text-transform: uppercase;
		text-decoration: none;
		display: inline-block;
		border-radius: 10rem;
		transition: all 0.5s;
		position: relative;
		font-size: 1.6rem;
	}
	.btn--animated {
		animation: move_in_up 0.5s ease-out 0.75s;
		animation-fill-mode: backwards;
	}
	.btn:hover {
		transform: translateY(-3px);
		/* transition: all 1s ease-out; */
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	}
	.btn:active {
		transform: translateY(-1px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	}
	.btn::after {
		content: '';
		display: inline-block;
		height: 100%;
		width: 100%;
		border-radius: 10rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		transition: all 0.4s;
	}

	.btn:hover::after {
		transform: scaleX(1.4) scaleY(1.3);
		opacity: 0;
	}

	.btn--white {
		background-color: #fff;
		color: #777;
		padding: 1.5rem 4rem;
	}
	.btn--white::after {
		background-color: #fff;
	}

	@keyframes move_in_left {
		0% {
			opacity: 0;
			transform: translateX(-10rem);
		}
		80% {
			opacity: 0.8;
			transform: translateX(1rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes move_in_right {
		0% {
			opacity: 0;
			transform: translateX(5rem);
		}
		80% {
			opacity: 0.8;
			transform: translateX(-1rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@keyframes move_in_up {
		0% {
			opacity: 0;
			transform: translateY(3rem);
		}

		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
