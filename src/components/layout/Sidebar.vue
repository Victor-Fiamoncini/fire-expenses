<template>
	<b-col xl="2" lg="12" class="navigation-sidebar pt-3 pl-3 pr-0">
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
			<b-nav-item v-b-modal.new-expense outline>
				<font-awesome-icon icon="wallet" />
				Nova Dispesa
			</b-nav-item>
			<b-nav-item v-b-modal.delete-account outline>
				<font-awesome-icon icon="trash-alt" />
				Excluir conta
			</b-nav-item>
			<b-nav-item class="logout" v-on:click.prevent="doLogout">
				<font-awesome-icon icon="sign-out-alt" />
				Logout
			</b-nav-item>
		</b-nav>
		<DeleteAccount />
		<NewExpense />
	</b-col>
</template>

<script>
import DeleteAccount from '../util/DeleteAccount'
import NewExpense from '../util/NewExpense'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Sidebar',
	components: {
		DeleteAccount,
		NewExpense,
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
	position: relative;
	@include small-desktop {
		padding: 20px 10px !important;
		text-align: center;
		height: 100%;
	}
	h1 {
		font-size: 1.75rem;
		margin: 0 0 20px;
		@include small-desktop {
			font-size: 1.5rem;
		}
		> svg {
			color: $featured;
		}
	}
	.nav {
		margin-left: -15px;
		@include small-desktop {
			flex-wrap: wrap;
			justify-content: center;
			flex-direction: row !important;
		}
		.nav-item.logout {
			position: absolute;
			bottom: 20px;
			width: 100%;
			@include small-desktop {
				width: auto;
				position: inherit;
			}
		}
		.nav-link {
			color: $light;
			font-weight: 600;
			transition: all 0.3s;
			@include small-desktop {
				position: inherit;
				font-size: 0.875rem;
			}
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
