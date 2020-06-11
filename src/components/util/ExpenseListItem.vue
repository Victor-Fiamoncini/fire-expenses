<template>
	<div>
		<b-row id="expense-list-item">
			<b-col cols="6">
				<div class="description">
					<span>{{ expense.description }}</span>
					<small v-date-format="expense.createdAt" />
				</div>
			</b-col>
			<b-col cols="2">
				<small class="value" v-money-format="expense.value" />
			</b-col>
			<b-col cols="2" class="text-right">
				<b-button
					variant="primary"
					v-if="expense.receipt"
					@click="doOpenReceipt"
				>
					<font-awesome-icon icon="paperclip" />
					Ver recibo
				</b-button>
			</b-col>
			<b-col cols="2" class="text-right">
				<b-button
					outline
					v-b-modal="`delete-expense-${expense.id}`"
					variant="danger"
				>
					<font-awesome-icon icon="trash-alt" />
					Deletar
				</b-button>
			</b-col>
		</b-row>
		<DeleteExpense :expenseId="expense.id" />
	</div>
</template>

<script>
import DeleteExpense from './DeleteExpense'

export default {
	name: 'ExpenseListItem',
	props: ['expense'],
	components: {
		DeleteExpense,
	},
	methods: {
		doOpenReceipt() {
			window.open(this.expense.receipt, '_blank')
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app';

#expense-list-item {
	border-bottom: 1px solid $featured;
	margin: 10px 0 20px;
	padding: 10px 4px;
	display: flex;
	align-items: center;
	.description {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		span {
			display: inline-block;
			color: $featured;
			font-size: 1.125rem;
			margin: 0 0 6px;
		}
	}
	small {
		font-size: 1rem;
	}
}
</style>
