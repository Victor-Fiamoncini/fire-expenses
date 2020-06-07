import { randomBytes } from 'crypto'
import firebase from '../../../services/firebase'
import * as uid from '../../../utils/uid'

import Types from './types'

export async function actionStoreExpense({ commit }, payload) {
	try {
		let url = ''
		commit(Types.SET_LOADING, true)

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

		commit(Types.SET_EXPENSE, newExpense)
		commit(Types.SET_LOADING, false)

		return true
	} catch (err) {
		console.log(err)
	}
}

export function actionIndexExpenses({ commit }) {
	try {
		const database = firebase.database().ref(uid.getUid())

		database.on('value', snapshot => {
			const values = snapshot.val()
			let expenses = []

			if (values) {
				expenses = Object.keys(values).map(id => values[id])
			}

			commit(Types.SET_EXPENSES, expenses)
		})
	} catch (err) {
		console.log(err)
	}
}
