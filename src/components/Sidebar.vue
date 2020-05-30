<template>
	<div class="col-2 navigation-sidebar">
		<nav class="nav flex-column">
			<a class="nav-link active" href="#">Active</a>
			<a class="nav-link" href="#">Link</a>
			<a class="nav-link" href="#">Link</a>
			<a class="nav-link" href="#" v-on:click.prevent="doLogout">
				Logout
			</a>
		</nav>
	</div>
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
@import '../assets/scss/app';

.navigation-sidebar {
	background: $dark-low;
	padding-right: 0;
	.nav {
		margin-left: -15px;
		height: 100vh;
		.nav-link {
			color: $light;
			font-weight: 600;
			transition: all .3s;
			&.active {
				color: $featured;
				background: transparent;
			}
			&:hover {
				color: $dark;
				background: $featured;
			}
		}
	}
}
</style>
