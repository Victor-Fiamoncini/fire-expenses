<template>
	<div id="notification-list">
		<NotificationListItem
			v-for="notification in notifications"
			:key="notification.id"
			:notification="notification"
		/>
	</div>
</template>

<script>
import NotificationListItem from '@/components/layout/NotificationListItem'
import { mapGetters } from 'vuex'

export default {
	name: 'NotificationList',
	components: {
		NotificationListItem,
	},
	computed: {
		...mapGetters('notification', ['notifications']),
	},
}
</script>

<style lang="scss" scoped>
#notification-list {
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 10000;
	width: 100%;
	max-width: 320px;
}
</style>
