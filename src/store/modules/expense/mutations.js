import Types from './types'

export default {
	[Types.SET_EXPENSE]: (state, payload) => {
		state.expense = payload
	},
	[Types.SET_EXPENSES]: (state, payload) => {
		state.expenses = payload
	},
	[Types.SET_LOADING]: (state, payload) => {
		state.loading = payload
	},
	[Types.SET_MESSAGE]: (state, payload) => {
		state.message = payload
	},
	[Types.REMOVE_EXPENSE]: state => {
		state.expense = {}
	},
	[Types.REMOVE_EXPENSES]: state => {
		state.expenses = []
	},
	[Types.REMOVE_LOADING]: state => {
		state.loading = false
	},
	[Types.REMOVE_MESSAGE]: state => {
		state.message = {}
	},
}
