<template>
	<b-col cols="2" class="navigation-sidebar pt-3 pl-3 pr-0">
		<h1>Fire Expenses <font-awesome-icon icon="dollar-sign" /></h1>
		<b-nav vertical>
			<router-link
				exact
				exact-active-class="active"
				class="nav-link"
				to="/painel"
			>
				<font-awesome-icon icon="home" />
				Home
			</router-link>
			<router-link
				exact
				exact-active-class="active"
				class="nav-link"
				to="/painel/lista"
			>
				<font-awesome-icon icon="list" />
				Lista de Dispesas
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
import NewExpense from '../util/NewExpense'
import { mapActions } from 'vuex'

export default {
	name: 'Sidebar',
	components: {
		NewExpense,
	},
	computed: {
		routes() {
			return this.$router.options.routes.filter(route => route.name !== 'Logon')
		},
	},
	methods: {
		...mapActions('auth', ['actionUnsetSession']),

		async doLogout() {
			await this.actionUnsetSession()

			this.$router.replace({ name: 'Logon' })
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app';

.navigation-sidebar {
	height: 100vh;
	background: $dark-low;
	h1 {
		font-size: 1.75rem;
		margin: 0 0 20px;
		> svg {
			color: $featured;
		}
	}
	.nav {
		margin-left: -15px;
		.nav-link {
			color: $light;
			font-weight: 600;
			transition: all 0.3s;
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
