<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col id="expesne-list">
				<b-container>
					<ExpenseListItem
						v-for="expense in expenses"
						v-bind:key="expense.id"
						v-bind:expense="expense"
					/>
				</b-container>
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
	created() {
		this.actionIndexExpenses()
	},
	methods: {
		...mapActions('expense', ['actionIndexExpenses']),
	},
	computed: {
		...mapGetters('expense', ['expenses']),
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
		padding-top: 15px;
		padding-bottom: 15px;
		font-size: 1rem;
	}
}

.fullscreen {
	text-align: center;
}
</style>
