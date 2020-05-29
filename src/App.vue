<template>
	<div>
		<router-view />
		<BaseSpinner />
	</div>
</template>

<script>
import BaseSpinner from './components/BaseSpinner'

export default {
	name: 'App',
	components: {
		BaseSpinner,
	},
	mounted() {
		console.log(this.$firebase)

	}
}
</script>
