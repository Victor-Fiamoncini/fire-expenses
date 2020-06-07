<template>
	<b-row id="expense-list-item">
		<b-col cols="3">
			<p v-date-format="expense.createdAt" />
		</b-col>
		<b-col cols="7">
			<p>{{ expense.description }}</p>
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
}
</style>
