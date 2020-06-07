import Types from './types'

export default {
	[Types.SET_UID]: (state, payload) => {
		state.uid = payload
	},
	[Types.SET_USER]: (state, payload) => {
		state.user = payload
	},
	[Types.SET_LOADING]: (state, payload) => {
		state.loading = payload
	},
	[Types.SET_MESSAGE]: (state, payload) => {
		state.message = payload
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
	[Types.REMOVE_MESSAGE]: state => {
		state.message = {}
	},
}
