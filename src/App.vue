<template>
	<div id="root">
		<BaseSpinner />
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'

import BaseSpinner from './components/BaseSpinner'

export default {
	name: 'App',
	components: {
		BaseSpinner,
	},
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';

#root {
	min-height: 100vh;
	color: $light;
	background-color: $dark-medium;
}
</style>
