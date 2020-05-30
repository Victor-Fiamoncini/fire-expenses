<template>
	<b-modal
		id="new-expense"
		size="lg"
		title="Cadastrar nova dispesa"
		ok-title="Cadastrar dispesa"
		v-on:ok.prevent="okDa"
	>
		<b-row>
			<b-form-group class="col-8" label="Descrição" label-for="description">
				<b-form-input type="text" id="description" trim required />
			</b-form-group>
			<b-form-group class="col-4" label="Valor" label-for="value">
				<b-form-input type="number" id="value" trim required />
			</b-form-group>
		</b-row>
	</b-modal>
</template>

<script>
export default {
	name: 'NewExpense',
	data: () => ({
		showModal: false,
	}),
	methods: {
		okDa() {
			console.log(1231331231)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
