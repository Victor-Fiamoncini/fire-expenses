<template>
	<b-row id="expense-list-item">
		<b-col cols="2">
			10/02/2020
		</b-col>
		<b-col cols="8">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. In corporis, labore illum commodi iusto earum error rem iure reiciendis! Quis!
		</b-col>
		<b-col cols="2">
			R$ 100
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'ExpenseListItem',
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app';

#expense-list-item {
	border-bottom: 1px solid $featured;
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	align-items: center;
}
</style>
