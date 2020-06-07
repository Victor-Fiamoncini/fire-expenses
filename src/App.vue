<template>
	<div id="wrapper">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss">
@import './assets/scss/app';

#wrapper {
	min-height: 100vh;
	color: $light;
	background-color: $dark-medium;
}
</style>
