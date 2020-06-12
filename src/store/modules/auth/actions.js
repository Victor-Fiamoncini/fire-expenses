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
		commit(Types.REMOVE_LOADING)
		dispatch('actionUnsetSession')
		dispatch(
			'notification/actionStoreNotification',
			{
				message: 'Credenciais inválidas',
				type: 'danger',
			},
			{ root: true }
		)
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

		dispatch(
			'notification/actionStoreNotification',
			{
				message: `Seja bem vindo(a) ${name}, seu cadastro foi concluído!`,
				type: 'success',
			},
			{ root: true }
		)

		router.push({ name: 'Home' })
	} catch (err) {
		commit(Types.REMOVE_LOADING)
		dispatch('actionUnsetSession')
		dispatch(
			'notification/actionStoreNotification',
			{
				message: 'Credenciais inválidas',
				type: 'danger',
			},
			{ root: true }
		)
	}
}

export async function actionDeleteAccount({ commit, dispatch }) {
	try {
		commit(Types.SET_LOADING)
		await firebase.auth().currentUser.delete()

		dispatch('actionUnsetSession')
		dispatch(
			'notification/actionStoreNotification',
			{
				message: 'Conta excluída com sucesso',
				type: 'success',
			},
			{ root: true }
		)

		router.push({ name: 'Logon' })
	} catch (err) {
		console.log(err.message)

		commit(Types.REMOVE_LOADING)
		dispatch(
			'notification/actionStoreNotification',
			{
				message:
					'Erro ao excluir sua conta, tente mais tarde ou faça login novamente',
				type: 'danger',
			},
			{ root: true }
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
	commit(Types.REMOVE_LOADING)

	await firebase.auth().signOut()
}
