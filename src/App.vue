<template>
	<div id="root">
		<div class="container-fluid">
			<div class="row">
				<div class="col-3" v-if="uid">
					<Sidebar />
				</div>
				<div class="col">
					<router-view />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'

import { mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'

export default {
	name: 'App',
	components: {
		Sidebar,
	},
	computed: {
		...mapGetters('auth', ['uid'])
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
