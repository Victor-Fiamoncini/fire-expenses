<template>
	<div>
		<b-modal
			id="new-expense"
			size="lg"
			title="Cadastrar nova dispesa"
			hide-footer
			v-model="show"
		>
			<b-form @submit.prevent="doStoreExpense">
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
							type="text"
							id="value"
							trim
							required
							v-model="form.value"
						/>
					</b-form-group>
					<b-form-group class="col-12 text-center">
						<b-form-file
							type="file"
							accept=".jpeg, .png, .pdf"
							placeholder="Adicionar recido"
							drop-placeholder="Solte o arquivo aqui"
							v-model="form.receipt"
							@change="doInputFileHandle"
						/>
					</b-form-group>
					<div class="modal-footer w-100 px-3 pb-0">
						<b-button
							class="mr-2"
							type="submit"
							variant="primary"
							:disabled="loading"
						>
							<template v-if="loading">
								<font-awesome-icon icon="spinner" class="fa-spin" />
								Cadastrando...
							</template>
							<template v-else>
								Cadastrar despesa
							</template>
						</b-button>
						<b-button
							class="mr-0"
							variant="secondary"
							type="button"
							@click="doCloseModal"
						>
							Cancelar
						</b-button>
					</div>
				</b-row>
			</b-form>
		</b-modal>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'NewExpense',
	data: () => ({
		show: false,
		form: {
			description: 'Super mercado 20/05',
			receipt: null,
			value: 130.0,
		},
	}),
	computed: {
		...mapGetters('expense', ['loading', 'message']),
	},
	methods: {
		...mapActions('expense', ['actionStoreExpense']),

		doCloseModal() {
			this.show = false
		},
		doInputFileHandle({ target }) {
			this.form.receipt = target.files[0]
		},
		async doStoreExpense() {
			if (await this.actionStoreExpense(this.form)) {
				this.show = false
			}
		},
	},
}
</script>
