import AuthTypes from './types'

export default {
	[AuthTypes.SET_UID]: (state, payload) => (state.uid = payload),
	[AuthTypes.SET_USER]: (state, payload) => (state.user = payload),
	[AuthTypes.SET_ERRORS]: (state, payload) => (state.errors = payload),
	[AuthTypes.SET_LOADING]: (state, payload) => (state.loading = payload),
}
