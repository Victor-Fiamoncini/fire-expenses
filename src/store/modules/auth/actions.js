import firebase from '../../../services/firebase'
import router from '../../../router'
import * as uid from '../../../utils/uid'

import AuthTypes from './types'

export async function actionLogon({ commit }, { email, password }) {
	commit(AuthTypes.SET_LOADING, true)

	try {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)

		uid.setUid(res.user.uid)

		commit(AuthTypes.SET_LOADING, false)

		router.push({ name: 'Home' })
	} catch (err) {
		console.log(err)
		uid.destroyUid()
	}
}

export function actionCheckUid({ dispatch, state }) {
	if (state.uid) {
		return state.uid
	}

	if (!uid.getUid()) {
		dispatch('actionUnsetSession')

		return false
	}

	dispatch('actionSetUid', uid.getUid())
}

export function actionSetUid({ commit }, payload) {
	uid.setUid(payload)
	commit(AuthTypes.SET_UID, payload)
}

export function actionUnsetSession() {
	uid.destroyUid()
}
