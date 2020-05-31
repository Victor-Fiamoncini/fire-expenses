import AuthTypes from './types'

export default {
	[AuthTypes.SET_UID]: (state, payload) => (state.uid = payload),
	[AuthTypes.SET_USER]: (state, payload) => (state.user = payload),
	[AuthTypes.SET_LOADING]: (state, payload) => (state.loading = payload),
	[AuthTypes.REMOVE_UID]: (state) => (state.uid = ''),
	[AuthTypes.REMOVE_USER]: (state) => (state.user = {}),
	[AuthTypes.REMOVE_LOADING]: (state) => (state.loading = false),
}
