<template>
	<b-alert
		fade
		dismissible
		:show="dismissCountdown"
		:variant="notification.type"
		@dismissed="dismissCountdown = 0"
		@dismiss-count-down="doChangeCountdown"
	>
		<p>{{ notification.message }}</p>
		<b-progress
			height="4px"
			:variant="notification.type"
			:max="seconds"
			:value="dismissCountdown"
		></b-progress>
	</b-alert>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'NotificationListItem',
	props: ['notification'],
	data: () => ({
		seconds: 5,
		dismissCountdown: 5,
	}),
	methods: {
		...mapActions('notification', ['actionRemoveNotification']),

		doChangeCountdown(dismissCountdown) {
			this.dismissCountdown = dismissCountdown

			if (this.dismissCountdown === 0) {
				this.actionRemoveNotification(this.$props.notification)
			}
		},
	},
}
</script>
