<template>
	<div id="root">
		<Notification
			v-for="(message, i) in messages"
			v-bind:key="i"
			v-bind:index="i"
			v-bind:text="message.text"
			v-bind:type="message.type"
		/>
		<router-view />
	</div>
</template>

<script>
import Notification from './components/layout/Notification'
import { mapGetters } from 'vuex'

export default {
	name: 'App',
	components: {
		Notification,
	},
	computed: {
		...mapGetters('message', ['messages']),
	},
}
</script>

<style lang="scss">
@import './assets/scss/app';

#root {
	min-height: 100vh;
	color: $light;
	background-color: $dark-medium;
}
</style>
