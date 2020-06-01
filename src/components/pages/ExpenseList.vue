<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col id="expesne-list">
				<div class="months-navigation">
					<div
						class="month-link"
						v-for="(month, i) in groupByMonth"
						v-bind:key="i"
						v-bind:class="{ active: defineActiveMonth(month.month) }"
						v-on:click="changeActiveMonth"
					>
						<div class="month-label">{{ month.month }}</div>
						<div class="value-label" v-money-format="month.total" />
					</div>
				</div>
				<b-container>
					<ExpenseListItem />
					<ExpenseListItem />
					<ExpenseListItem />
				</b-container>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import ExpenseListItem from '../util/ExpenseListItem'
import Sidebar from '../layout/Sidebar'

import moment from 'moment'
import groupby from 'lodash.groupby'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ExpenseList',
	components: {
		ExpenseListItem,
		Sidebar,
	},
	data: () => ({
		activeMonth: '',
		groupedMonths: [],
	}),
	created() {
		this.actionIndexExpenses()
	},
	methods: {
		...mapActions('expense', ['actionIndexExpenses']),

		setActiveMonth(groupedMonths) {
			this.groupedMonths = groupedMonths[groupedMonths.length - 1]
		},
		defineActiveMonth(month) {
			return moment(month, 'MM/YYYY').isSame(moment(), 'month')
		},
		changeActiveMonth(month) {
			this.activeMonth = month
		}
	},
	computed: {
		...mapGetters('expense', ['expenses']),

		groupByMonth() {
			const { expenses } = this
			let groupedMonths = []

			const addCurrentMonth = () => {
				groupedMonths.push({
					data: '',
					total: 0,
					month: moment().format('MM/YYYY')
				})
			}

			if (expenses.length > 0) {
				const months = groupby(expenses, expense => moment(expense.createdAt).format('MM/YYYY'))
				const pattern = 'MM/YYYY HH'

				const sortedMonths = Object.keys(months).sort((a, b) => {
					if (moment(`${a} 01`, pattern).isBefore(moment(`${b} 01`, pattern)))
						return -1

					return +1
				})

				groupedMonths = sortedMonths.map(month => ({
					month,
					data: months[month],
					total: months[month]
						.map(expense => expense.value)
						.reduce((acc, expense) => Number(acc) + Number(expense), 0)
				}))

				const lastMonth = moment(groupedMonths[groupedMonths.length - 1].month, 'MM/YYYY')

				if (!lastMonth.isSame(moment(), 'month')) {
					addCurrentMonth()
				}
			} else {
				addCurrentMonth()
			}

			this.setActiveMonth(groupedMonths)

			return groupedMonths
		},
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
			transition: all .3s;
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
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: 1rem;
	}
}

.fullscreen {
	text-align: center;
}
</style>
