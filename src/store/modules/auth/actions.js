import firebase from '../../../services/firebase'
import router from '../../../router'
import * as uid from '../../../utils/uid'

import AuthTypes from './types'

export async function actionLogon({ commit, dispatch }, payload) {
	commit(AuthTypes.SET_LOADING, true)
	const { email, password } = payload

	try {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)

		dispatch('actionSetUid', res.user.uid)
		commit(AuthTypes.SET_LOADING, false)

		router.push({ name: 'Home' })
	} catch (err) {
		dispatch('actionUnsetSession')
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
	commit(AuthTypes.SET_UID, payload)
}

export async function actionUnsetSession({ commit }) {
	uid.destroyUid()

	commit(AuthTypes.REMOVE_UID)
	commit(AuthTypes.REMOVE_USER)
	commit(AuthTypes.REMOVE_MESSAGE)
	commit(AuthTypes.REMOVE_LOADING)

	await firebase.auth().signOut()
}
