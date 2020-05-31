import ExpenseTypes from './types'

export default {
	[ExpenseTypes.SET_EXPENSE]: (state, payload) => (state.expense = payload),
	[ExpenseTypes.SET_EXPENSES]: (state, payload) => (state.expenses = payload),
	[ExpenseTypes.SET_LOADING]: (state, payload) => (state.loading = payload),
}
