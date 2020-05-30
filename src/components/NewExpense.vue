<template>
	<b-modal
		id="new-expense"
		size="lg"
		title="Cadastrar nova dispesa"
		ok-title="Cadastrar dispesa"
		v-on:ok.prevent="doOk"
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
			</b-row>
		</b-form>
	</b-modal>
</template>

<script>
export default {
	name: 'NewExpense',
	data: () => ({
		showModal: false,
		form: {
			description: 'Super mercado 20/05',
			value: 130.00,
		},
	}),
	methods: {
		async doOk() {
			await this.doStoreExpense()
		},
		async doStoreExpense() {
			console.log(1231331231)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
