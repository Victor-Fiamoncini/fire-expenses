<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col id="expesne-list" v-if="!loading">
				<b-container v-if="expenses.length > 0">
					<ExpenseListItem
						v-for="expense in expenses"
						:key="expense.id"
						:expense="expense"
					/>
				</b-container>
				<div class="not-found-message" v-else>
					<p>Não há despesas cadastradas</p>
				</div>
			</b-col>
			<b-col v-else>
				<div class="screen-loading">
					<font-awesome-icon icon="spinner" class="fa-spin" size="lg" />
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ExpenseListItem from '../util/ExpenseListItem'
import Sidebar from '../layout/Sidebar'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ExpenseList',
	components: {
		ExpenseListItem,
		Sidebar,
	},
	async created() {
		await this.actionFetchExpenses()
	},
	methods: {
		...mapActions('expense', ['actionFetchExpenses']),
	},
	computed: {
		...mapGetters('expense', ['expenses', 'loading']),
	},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app';

#expesne-list {
	padding: 0;
	.months-navigation {
		display: flex;
		width: 100%;
		background: $featured;
		.month-link {
			padding: 15px;
			text-align: center;
			transition: all 0.3s;
			cursor: pointer;
			&.active {
				background: $featured-light;
			}
			&:hover {
				background: $featured-dark;
			}
			.value-label {
				color: $dark-medium;
				font-size: 1rem;
			}
		}
	}
	.container {
		overflow: hidden auto;
		height: 100vh;
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: 1rem;
		#expenseListItem:last-of-type {
			margin-bottom: 0;
		}
	}
}

.fullscreen {
	text-align: center;
}
</style>
