<template>
	<nav class="nav flex-column">
		<a class="nav-link active" href="#">Active</a>
		<a class="nav-link" href="#">Link</a>
		<a class="nav-link" href="#">Link</a>
		<a class="nav-link" href="#" v-on:click.prevent="doLogout">
			Logout
		</a>
	</nav>
</template>

<script>
import { mapActions } from 'vuex'


export default {
	name: 'Sidebar',
	methods: {
		...mapActions('auth', ['actionUnsetSession']),

		async doLogout() {
			await this.actionUnsetSession()
		},
	},
}
</script>

<style lang="scss" scoped>
</style>
