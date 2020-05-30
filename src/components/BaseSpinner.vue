<template>
	<div class="base-spinner fa-3x" v-if="visible">
		<i class="fas fa-circle-notch fa-spin"></i>
	</div>
</template>

<script>
export default {
	name: 'BaseSpinner',
	data: () => ({
		visible: false,
	}),
	created() {
		this.$root.$on('Spinner::show', () => this.visible = true)
		this.$root.$on('Spinner::hide', () => this.visible = false)
	},
	methods: {
		toggleSpinner() {
			this.visible = !this.visible
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.base-spinner {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10000;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background: $dark-medium;
	color: $featured;
}
</style>
