<template>
	<b-row id="expense-list-item">
		<b-col cols="10">
			<div class="description">
				<span>{{ expense.description }}</span>
				<b-button
					variant="primary"
					v-if="expense.receipt"
					@click="doOpenReceipt"
				>
					<font-awesome-icon icon="paperclip" />
					Abrir comprovante
				</b-button>
			</div>
			<small v-date-format="expense.createdAt" />
		</b-col>
		<b-col cols="2">
			<p class="value" v-money-format="expense.value" />
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'ExpenseListItem',
	props: ['expense'],
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
		justify-content: space-between;
		align-items: center;
	}
	small {
		font-size: 0.875rem;
	}
}
</style>
