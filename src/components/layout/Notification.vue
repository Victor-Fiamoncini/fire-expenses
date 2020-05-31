<template>
	<b-alert
		dismissible
		fade
		v-bind:style="{ 'top': `${index * 78}px` }"
		v-bind:variant="type"
		v-bind:show="6"
		v-on:dismissed="dismissCountDown=0"
		v-on:dismiss-count-down="countDownChanged"
	>
		<p>{{ text }}</p>
		<b-progress
			height="4px"
			v-bind:variant="type"
			v-bind:max="6"
			v-bind:value="dismissCountDown"
		></b-progress>
	</b-alert>
</template>

<script>
export default {
	name: 'Notification',
	props: ['index', 'text', 'type'],
	data: () => ({
		dismissCountDown: 6,
		showDismissibleAlert: true,
	}),
	methods: {
		countDownChanged(dismissCountDown) {
			this.dismissCountDown = dismissCountDown
		},
	},
}
</script>

<style lang="scss" scoped>
.alert {
	position: absolute;
	z-index: 10000;
	right: 20px;
	max-width: 400px;
	margin-top: 20px;
	transition: all .3s;
}
</style>
