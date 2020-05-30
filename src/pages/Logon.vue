<template>
	<form v-on:submit.prevent="doLogon">
		<div class="card">
			<h1>VFinances</h1>
			<div class="card-body">
				<div class="form-group">
					<input
						type="email"
						class="form-control"
						placeholder="E-mail"
						required
						v-model="form.email"
					/>
				</div>
				<div class="form-group">
					<input
						type="password"
						class="form-control"
						placeholder="Senha"
						required
						v-model="form.password"
					/>
				</div>
				<button class="btn btn-primary btn-block" v-bind:disabled="loading">
					<template v-if="loading">
						<i class="fa fa-spinner fa-spin"></i>
						Entrando...
					</template>
					<template v-else>
						<i class="fa fa-sign-in-alt"></i>
						Entrar
					</template>
				</button>
			</div>
		</div>
	</form>
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
		...mapGetters('auth', ['loading'])
	},
	methods: {
		...mapActions('auth', ['actionLogon']),

		async doLogon() {
			await this.actionLogon(this.form)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

form {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
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
