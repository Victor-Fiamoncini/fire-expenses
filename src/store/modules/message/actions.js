import MessageTypes from './types'

export function actionSetMessage({ commit, dispatch }, payload) {
	commit(MessageTypes.SET_MESSAGE, payload)

	setTimeout(() => {
		dispatch('actionRemoveMessage')
	}, 6000)
}

export function actionRemoveMessage({ commit }) {
	commit(MessageTypes.REMOVE_MESSAGE)
}
