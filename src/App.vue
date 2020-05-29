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
	methods: {},
}
</script>
