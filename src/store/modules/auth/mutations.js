import Types from './types'

export default {
	[Types.SET_UID]: (state, payload) => {
		state.uid = payload
	},
	[Types.SET_USER]: (state, payload) => {
		state.user = payload
	},
	[Types.SET_LOADING]: state => {
		state.loading = true
	},
	[Types.REMOVE_UID]: state => {
		state.uid = ''
	},
	[Types.REMOVE_USER]: state => {
		state.user = {}
	},
	[Types.REMOVE_LOADING]: state => {
		state.loading = false
	},
}
