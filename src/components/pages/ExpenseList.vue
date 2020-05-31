<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col>
				<div id="expense-list">
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Sidebar from '../layout/Sidebar'

export default {
	name: 'ExpenseList',
	components: {
		Sidebar,
	},
}
</script>

<style lang="scss" scoped>
#expense-list {}
</style>
