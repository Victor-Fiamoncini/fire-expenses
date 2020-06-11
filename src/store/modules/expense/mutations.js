import Types from './types'

export default {
	[Types.SET_EXPENSES]: (state, payload) => {
		state.expenses = payload
	},
	[Types.SET_DATES]: (state, payload) => {
		state.dates = payload
	},
	[Types.SET_LOADING]: state => {
		state.loading = true
	},
	[Types.REMOVE_EXPENSES]: state => {
		state.expenses = []
	},
	[Types.REMOVE_DATES]: state => {
		state.dates = []
	},
	[Types.REMOVE_LOADING]: state => {
		state.loading = false
	},
}
