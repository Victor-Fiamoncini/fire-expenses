<template>
	<div id="wrapper">
		<router-view />
		<NotificationList />
	</div>
</template>

<script>
import NotificationList from '@/components/layout/NotificationList'

export default {
	name: 'App',
	components: {
		NotificationList,
	},
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

#wrapper {
	min-height: 100vh;
	color: $light;
	background-color: $dark-medium;
}
</style>
