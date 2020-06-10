import firebase from '../../../services/firebase'
import router from '../../../router'
import * as uid from '../../../utils/uid'

import Types from './types'

export async function actionLogon({ commit, dispatch }, payload) {
	const { email, password } = payload

	try {
		commit(Types.SET_LOADING)

		const response = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)

		dispatch('actionSetUid', response.user.uid)
		commit(Types.REMOVE_LOADING)

		router.push({ name: 'Home' })
	} catch (err) {
		dispatch('actionUnsetSession')
		alert('Credenciais inválidas')
	}
}

export async function actionRegister({ commit, dispatch }, payload) {
	const { name, email, password } = payload

	try {
		commit(Types.SET_LOADING)

		const { user } = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)

		await user.updateProfile({ displayName: name })

		dispatch('actionSetUid', user.uid)
		commit(Types.REMOVE_LOADING)

		alert(`Seja bem vindo(a) ${name}, seu cadastro foi concluído!`)

		router.push({ name: 'Home' })
	} catch (err) {
		dispatch('actionUnsetSession')
		alert('Credenciais inválidas')
	}
}

export async function actionDeleteUser({ commit, dispatch }) {
	try {
		commit(Types.SET_LOADING)
		await firebase.auth().currentUser.delete()
		commit(Types.REMOVE_LOADING)

		dispatch('actionUnsetSession')
		alert('Usuário excluído com sucesso')

		router.push({ name: 'Logon' })
	} catch (err) {
		alert(
			'Erro ao excluir seu usuário, tente mais tarde ou faça login novamente'
		)
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

	await firebase.auth().signOut()
}
