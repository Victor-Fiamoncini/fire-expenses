<template>
	<div id="home">
		<b-row>
			<b-col cols="6" class="home-box">
				<small>Você gastou</small>
				<div class="value">R$ 900.00</div>
				<small>em 30 compras</small>
			</b-col>
			<b-col cols="6" class="home-box">
				<small>A média de gastos é de</small>
				<div class="value">R$ 91.31</div>
			</b-col>
			<b-col cols="6" class="home-box">
				<small>A maior despesa foi de</small>
				<div class="value">R$ 92.00</div>
				<small>No dia 02/02/2020</small>
			</b-col>
			<b-col cols="6" class="home-box">
				<small>A menor despesa foi de</small>
				<div class="value">R$ 12.00</div>
				<small>No dia 06/02/2020</small>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Home',
	methods: {
		...mapActions('expense', ['actionIndexExpenses']),
	},
	computed: {
		...mapGetters('expense', ['expenses']),

		totals() {
			const values = {
				totalSpent: 0,
				average: 0,
				biggest: {},
				lowest: {},
			}


			return values
		},
	},
	created() {
		this.actionIndexExpenses()

		console.log(this.$props.expenses)

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
