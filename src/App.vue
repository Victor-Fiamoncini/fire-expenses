<template>
	<div id="root">
		<Dashboard v-if="uid" />
		<router-view v-else />
	</div>
</template>

<script>
import Dashboard from './components/layout/Dashboard'
import { mapGetters } from 'vuex'

export default {
	name: 'App',
	components: {
		Dashboard,
	},
	computed: {
		...mapGetters('auth', ['uid']),
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
