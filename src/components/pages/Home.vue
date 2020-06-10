<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col>
				<div id="home">
					<b-row v-if="getInformationValues.length">
						<b-col cols="6" class="home-box">
							<small>Você gastou</small>
							<div
								class="value"
								v-money-format="getInformationValues.totalSpent"
							/>
							<small>em {{ getInformationValues.length }} compras</small>
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A média de gastos é de</small>
							<div
								class="value"
								v-money-format="getInformationValues.average"
							/>
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A maior despesa foi de</small>
							<div
								class="value"
								v-money-format="getInformationValues.biggest.value"
							/>
							<small v-date-format="getInformationValues.biggest.createdAt" />
						</b-col>
						<b-col cols="6" class="home-box">
							<small>A menor despesa foi de</small>
							<div
								class="value"
								v-money-format="getInformationValues.lowest.value"
							/>
							<small v-date-format="getInformationValues.lowest.createdAt" />
						</b-col>
					</b-row>
					<div class="not-found-message" v-else>
						<p>Não há despesas cadastradas</p>
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
	async created() {
		await this.actionFetchExpenses()
	},
	methods: {
		...mapActions('expense', ['actionFetchExpenses']),
	},
	computed: {
		...mapGetters('expense', ['expenses']),

		getInformationValues() {
			const { expenses } = this

			const values = {
				totalSpent: 0,
				average: 0,
				biggest: {},
				lowest: {},
				length: expenses.length ? expenses.length : 0,
			}

			if (expenses.length > 0) {
				values.totalSpent = expenses
					.map(expense => parseFloat(expense.value))
					.reduce((acc, expense) => acc + expense, 0)

				values.average = values.totalSpent / expenses.length
				values.biggest = expenses.sort(
					(a, b) => Number(b.value) - Number(a.value)
				)[0]
				values.lowest = expenses.sort(
					(a, b) => Number(a.value) - Number(b.value)
				)[0]
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
		position: relative;
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
