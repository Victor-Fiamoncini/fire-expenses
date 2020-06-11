<template>
	<b-modal
		:id="`delete-expense-${expenseId}`"
		size="md"
		title="Excluír despesa"
		hide-footer
		v-model="show"
	>
		<b-row>
			<b-col>
				<p>Você tem certeza?</p>
			</b-col>
			<div class="modal-footer w-100 px-3 pb-0">
				<b-button
					class="mr-2"
					type="submit"
					variant="primary"
					@click="doDeleteExpense"
				>
					Sim, excluír
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
	</b-modal>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'DeleteExpense',
	props: ['expenseId'],
	data: () => ({
		show: false,
	}),
	methods: {
		...mapActions('expense', ['actionDeleteExpense']),

		doCloseModal() {
			this.show = false
		},
		async doDeleteExpense() {
			if (await this.actionDeleteExpense({ id: this.$props.expenseId })) {
				this.doCloseModal()
			}
		},
	},
}
</script>
