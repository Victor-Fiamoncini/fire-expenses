<template>
	<div>
		<form @submit.prevent="doLogonRequest">
			<b-card>
				<h1>Fire Expenses <font-awesome-icon icon="dollar-sign" /></h1>
				<b-card-body>
					<b-form-group>
						<b-form-input
							type="email"
							trim
							required
							placeholder="E-mail"
							v-model="form.email"
						/>
					</b-form-group>
					<b-form-group>
						<b-form-input
							type="password"
							trim
							required
							placeholder="Senha"
							v-model="form.password"
						/>
					</b-form-group>
					<b-button
						block
						variant="primary"
						:disabled="loading"
						@click.prevent="doLogonRequest"
					>
						<template v-if="loading">
							<font-awesome-icon icon="spinner" class="fa-spin" />
							Entrando...
						</template>
						<template v-else>
							<font-awesome-icon icon="sign-in-alt" />
							Entrar
						</template>
					</b-button>
					<router-link to="/cadastro" class="guest-link">
						Ainda não possui conta? Cadastre-se aqui
					</router-link>
				</b-card-body>
			</b-card>
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Logon',
	data: () => ({
		form: {
			email: 'victor@mail.com',
			password: 'adminadmin',
		},
	}),
	computed: {
		...mapGetters('auth', ['loading']),
	},
	methods: {
		...mapActions('auth', ['actionLogon']),

		async doLogonRequest() {
			await this.actionLogon(this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/variables';

form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	h1 {
		svg {
			color: $featured;
		}
	}
	.card {
		width: 40%;
		padding-top: 18px;
		h1 {
			text-align: center;
			color: $darker;
		}
	}
}
</style>
