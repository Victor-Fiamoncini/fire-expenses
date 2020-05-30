<template>
	<b-col cols="2" class="navigation-sidebar">
		<h1>
			Fire Expenses <font-awesome-icon icon="dollar-sign" />
		</h1>
		<b-nav vertical>
			<router-link
				exact
				exact-active-class="active"
				class="nav-link"
				v-for="(route, i) in routerLinks"
				v-bind:key="i"
				v-bind:to="{ name: route.name }"
			>
				<font-awesome-icon v-bind:icon="route.meta.icon" />
				{{ route.meta.title }}
			</router-link>
			<b-nav-item v-b-modal.new-expense>
				<font-awesome-icon icon="wallet" />
				Nova Dispesa
			</b-nav-item>
			<b-nav-item v-on:click.prevent="doLogout">
				<font-awesome-icon icon="sign-out-alt" />
				Logout
			</b-nav-item>
		</b-nav>
		<NewExpense />
	</b-col>
</template>

<script>
import NewExpense from './NewExpense'
import { mapActions } from 'vuex'

export default {
	name: 'Sidebar',
	components: {
		NewExpense,
	},
	computed: {
		routerLinks() {
			return this.$router.options.routes.filter(route => route.name !== 'Logon')
		},
	},
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
	padding: 15px 0 0 15px;
	h1 {
		font-size: 1.75rem;
		margin: 0 0 20px;
		> svg {
			color: $featured;
		}
	}
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
			> svg {
				display: inline-block;
				margin-right: 10px !important;
			}
		}
	}
}
</style>
