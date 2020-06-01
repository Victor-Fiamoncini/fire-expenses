import { randomBytes } from 'crypto'
import firebase from '../../../services/firebase'
import store from '../../'
import * as uid from '../../../utils/uid'

import ExpenseTypes from './types'

export async function actionStoreExpense({ commit }, payload) {
	commit(ExpenseTypes.SET_LOADING, true)
	let url = ''

	try {
		const database = firebase.database().ref(uid.getUid())
		const id = database.push().key

		if (payload.receipt) {
			const snapshot = await firebase
				.storage()
				.ref(uid.getUid())
				.child(`${randomBytes(16).toString('hex')}-${payload.receipt.name}`)
				.put(payload.receipt)

			url = await snapshot.ref.getDownloadURL()
		}

		const newExpense = {
			id,
			createdAt: new Date().getTime(),
			...payload,
			receipt: url,
		}

		await database.child(id).set(newExpense)

		commit(ExpenseTypes.SET_EXPENSE, newExpense)
		commit(ExpenseTypes.SET_LOADING, false)

		store.dispatch('message/actionSetMessage', {
			text: 'Despesa cadastrada com sucesso',
			type: 'success',
		})

		return true
	} catch (err) {
		store.dispatch('message/actionSetMessage', {
			text: 'Erro ao cadastrar despesa',
			type: 'danger',
		})
	}
}

export function actionIndexExpenses({ commit }) {
	try {
		const database = firebase.database().ref(uid.getUid())

		database.on('value', (snapshot) => {
			const values = snapshot.val()
			let expenses = []

			if (values) {
				expenses = Object.keys(values).map((id) => values[id])
			}

			commit(ExpenseTypes.SET_EXPENSES, expenses)
		})
	} catch (err) {
		store.dispatch('message/actionSetMessage', {
			text: 'Erro ao obter as despesas',
			type: 'danger',
		})
	}
}
