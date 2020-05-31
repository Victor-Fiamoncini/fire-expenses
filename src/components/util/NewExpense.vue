<template>
	<b-modal
		id="new-expense"
		size="lg"
		title="Cadastrar nova dispesa"
		ok-title="Cadastrar dispesa"
		v-on:ok.prevent="doOk"
		v-model="show"
	>
		<b-form v-on:submit.stop.prevent="doStoreExpense">
			<b-row>
				<b-form-group class="col-8" label="Descrição" label-for="description">
					<b-form-input
						type="text"
						id="description"
						trim
						required
						v-model="form.description"
					/>
				</b-form-group>
				<b-form-group class="col-4" label="Valor" label-for="value">
					<b-form-input
						type="number"
						id="value"
						trim
						required
						v-model="form.value"
					/>
				</b-form-group>
				<b-form-group class="col-12 text-center">
					<b-form-file
						type="file"
						accept="image/jpeg, image/png"
						placeholder="Adicionar recido"
						drop-placeholder="Solte o arquivo aqui"
						v-model="form.receipt"
						v-on:change="doInputFileHandle"
					/>
				</b-form-group>
			</b-row>
		</b-form>
	</b-modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'NewExpense',
	data: () => ({
		show: false,
		form: {
			description: 'Super mercado 20/05',
			receipt: [],
			value: 130.00,
		},
	}),
	methods: {
		...mapActions('expense', ['actionStoreExpense']),

		doInputFileHandle({ target }) {
			this.form.receipt = target.files[0]
		},
		async doOk() {
			await this.doStoreExpense()
		},
		async doStoreExpense() {
			if (await this.actionStoreExpense(this.form)) {
				this.show = false
			}
		},
	},
}
</script>
