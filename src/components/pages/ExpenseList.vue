<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col id="expesne-list" v-if="!loading">
				<DateNavigation />
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
			<b-col v-else-if="loading">
				<div class="screen-loading">
					<font-awesome-icon icon="spinner" class="fa-spin" size="lg" />
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import DateNavigation from '@/components/util/DateNavigation'
import ExpenseListItem from '@/components/util/ExpenseListItem'
import Sidebar from '@/components/layout/Sidebar'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ExpenseList',
	components: {
		DateNavigation,
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
@import '@/assets/scss/app';

#expesne-list {
	padding: 0;
	@include small-desktop {
		padding: 2px !important;
	}
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
				@include small-desktop {
					font-size: 0.875rem;
				}
			}
		}
	}
	.container {
		overflow: hidden auto;
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: 1rem;
		@include small-desktop {
			margin: 0 !important;
			height: 100%;
			max-width: 100%;
			padding: 10px 0;
			font-size: 0.875rem;
		}
		#expenseListItem:last-of-type {
			margin-bottom: 0;
		}
	}
}

.fullscreen {
	text-align: center;
}
</style>
