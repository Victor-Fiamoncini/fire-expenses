<template>
	<div id="root">
		<b-container fluid v-if="uid">
			<b-row>
				<Sidebar />
				<b-col>
					<router-view />
				</b-col>
			</b-row>
		</b-container>
		<router-view v-else />
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'

export default {
	name: 'App',
	components: {
		Sidebar,
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
