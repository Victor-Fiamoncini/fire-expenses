<template>
	<div id="root">
		<BaseSpinner />
		<router-view />
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
	mounted() {
		// this.$firebase.auth().onAuthStateChanged(user => {
		// 	localStorage.setItem('uid', user ? user.uid : null)

		// 	setTimeout(() => {
		// 		this.$root.$emit('Spinner::hide')
		// 	}, 300)
		// })
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
