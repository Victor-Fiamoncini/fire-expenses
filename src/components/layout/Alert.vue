<template>
	<b-alert
		fade
		dismissible
		:show="countDown"
		:variant="type"
		@dismissed="countDown = 0"
		@dismiss-count-down="doCountDown"
	>
		<p class="message">{{ message }}</p>
		<b-progress
			:variant="type"
			:max="seconds"
			:value="countDown"
			height="4px"
		></b-progress>
	</b-alert>
</template>

<script>
export default {
	name: 'Alert',
	props: ['module', 'message', 'type'],
	data: () => ({
		seconds: 4,
		countDown: 4,
	}),
	methods: {
		doCountDown(countDown) {
			this.countDown = countDown

			if (this.countDown === 0) {
				const { module } = this.$props

				this.$store.commit(`${module}/${module.toUpperCase()}/REMOVE_MESSAGE`)
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.message {
	font-size: 1.125rem;
	font-weight: 500;
}
</style>
