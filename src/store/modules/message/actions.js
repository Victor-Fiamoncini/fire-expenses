import { v4 } from 'uuid'

import MessageTypes from './types'

export function actionSetMessage({ commit, dispatch }, payload) {
	const id = v4()

	commit(MessageTypes.SET_MESSAGE, { ...payload, id })

	setTimeout(() => {
		dispatch('actionRemoveMessage', id)
	}, 6000)
}

export function actionRemoveMessage({ commit }, payload) {
	commit(MessageTypes.REMOVE_MESSAGE, payload)
}
