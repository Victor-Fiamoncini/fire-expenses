import Types from './types'

export function actionStoreNotification({ commit }, payload) {
	commit(Types.SET_NOTIFICATION, payload)
}

export function actionRemoveNotification({ commit }, payload) {
	commit(Types.REMOVE_NOTIFICATION, payload)
}
