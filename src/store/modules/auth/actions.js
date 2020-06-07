import firebase from '../../../services/firebase'
import router from '../../../router'
import * as uid from '../../../utils/uid'

import Types from './types'

export async function actionLogon({ commit, dispatch }, payload) {
	try {
		commit(Types.SET_LOADING, true)

		const response = await firebase
			.auth()
			.signInWithEmailAndPassword(payload.email, payload.password)

		dispatch('actionSetUid', response.user.uid)

		commit(Types.SET_LOADING, false)

		router.push({ name: 'Home' })
	} catch (err) {
		dispatch('actionUnsetSession')
		commit(Types.SET_MESSAGE, {
			text: 'Credenciais inválidas',
			type: 'danger',
		})
	}
}

export function actionCheckUid({ dispatch }) {
	if (!uid.getUid()) {
		dispatch('actionUnsetSession')
	}

	dispatch('actionSetUid', uid.getUid())
}

export function actionSetUid({ commit }, payload) {
	uid.setUid(payload)

	commit(Types.SET_UID, payload)
}

export async function actionUnsetSession({ commit }) {
	uid.destroyUid()

	commit(Types.REMOVE_UID)
	commit(Types.REMOVE_USER)
	commit(Types.REMOVE_LOADING)
	commit(Types.REMOVE_MESSAGE)

	await firebase.auth().signOut()
}
