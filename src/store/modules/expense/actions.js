import { randomBytes } from 'crypto'
import firebase from '../../../services/firebase'
import * as uid from '../../../utils/uid'

import Types from './types'

export async function actionStoreExpense({ commit, dispatch }, payload) {
	let url = ''
	const { description, receipt, value } = payload

	try {
		commit(Types.SET_LOADING)

		if (receipt) {
			const filename = `${randomBytes(16).toString('hex')}-${receipt.name}`

			const file = await firebase
				.storage()
				.ref(uid.getUid())
				.child(filename)
				.put(receipt)

			url = await file.ref.getDownloadURL()
		}

		const newExpense = {
			createdAt: new Date().getTime(),
			description,
			receipt: url,
			user: uid.getUid(),
			value,
		}

		await firebase.firestore().collection('expenses').add(newExpense)

		commit(Types.SET_EXPENSE, newExpense)
		commit(Types.REMOVE_LOADING)

		dispatch('actionFetchExpenses')
		return true
	} catch (err) {
		commit(Types.REMOVE_LOADING)
		alert('Erro ao cadastrar despesa, tente novamente')
	}
}

export async function actionFetchExpenses({ commit }) {
	try {
		commit(Types.SET_LOADING)

		const expenses = await firebase
			.firestore()
			.collection('expenses')
			.where('user', '==', uid.getUid())
			.get()

		let serializedExpenses = []

		expenses.forEach(expense => {
			serializedExpenses = [
				...serializedExpenses,
				{ id: expense.id, ...expense.data() },
			]
		})

		commit(Types.REMOVE_LOADING)
		commit(Types.SET_EXPENSES, serializedExpenses)
	} catch (err) {
		alert('Erro ao obter as suas despesas')
	}
}

export async function actionDeleteExpense({ commit, dispatch }, payload) {
	try {
		commit(Types.SET_LOADING)
		await firebase.firestore().collection('expenses').doc(payload.id).delete()
		commit(Types.REMOVE_LOADING)

		dispatch('actionFetchExpenses')
		return true
	} catch (err) {
		alert('Erro ao excluír essa despesa, tente novamente')
	}
}
