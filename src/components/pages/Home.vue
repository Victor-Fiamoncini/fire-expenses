<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col>
				<div id="home">
					<b-row v-if="getValues.length">
						<b-col cols="6" class="home-box">
							<small>Você gastou</small>
							<div class="value" v-money-format="getValues.totalSpent" />
							<small>em {{ getValues.length }} compras</small>
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A média de gastos é de</small>
							<div class="value" v-money-format="getValues.average" />
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A maior despesa foi de</small>
							<div class="value" v-money-format="getValues.biggest.value" />
							<small v-date-format="getValues.biggest.createdAt" />
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A menor despesa foi de</small>
							<div class="value" v-money-format="getValues.lowest.value" />
							<small v-date-format="getValues.lowest.createdAt" />
						</b-col>
					</b-row>
					<div class="not-found-message" v-else>
						<p>Não há despesas cadastradas </p>
					</div>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Sidebar from '../layout/Sidebar'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Home',
	components: {
		Sidebar,
	},
	created() {
		this.actionIndexExpenses()
	},
	methods: {
		...mapActions('expense', ['actionIndexExpenses']),
	},
	computed: {
		...mapGetters('expense', ['expenses']),

		getValues() {
			const { expenses } = this

			const values = {
				totalSpent: 0,
				average: 0,
				biggest: {},
				lowest: {},
				length: expenses.length ? expenses.length : false
			}

			if (expenses.length) {
				values.totalSpent = expenses
					.map(expense => parseFloat(expense.value))
					.reduce((acc, expense) => acc + expense, 0)

				values.average = values.totalSpent / expenses.length
				values.biggest = expenses.sort((a, b) => Number(b.value) - Number(a.value))[0]
				values.lowest = expenses.sort((a, b) => Number(a.value) - Number(b.value))[0]
			}

			return values
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/app.scss';

#home {
	height: 100vh;
	.home-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
		height: 50vh;
		.value {
			color: $featured;
		}
		small {
			font-size: 1.25rem;
		}
	}
}
</style>
