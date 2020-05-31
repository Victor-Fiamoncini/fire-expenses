<template>
	<div id="root">
		<Notification
			v-for="(message, i) in messages"
			v-bind:key="i"
			v-bind:index="i"
			v-bind:text="message.text"
			v-bind:type="message.type"
		/>
		<Dashboard v-if="uid" />
		<router-view v-else />
	</div>
</template>

<script>
import Dashboard from './components/layout/Dashboard'
import Notification from './components/layout/Notification'
import { mapGetters } from 'vuex'

export default {
	name: 'App',
	components: {
		Dashboard,
		Notification,
	},
	computed: {
		...mapGetters({
			uid: ['auth/uid'],
			messages: ['message/messages'],
		}),
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
