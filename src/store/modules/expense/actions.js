import { randomBytes } from 'crypto'
import firebase from '../../../services/firebase'
import store from '../../index'
import * as uid from '../../../utils/uid'

import ExpenseTypes from './types'

export async function actionStoreExpense({ commit }, payload) {
	try {
		let url = ''
		const database = firebase.datasbase().ref(uid.getUid())
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

		await database.child(id).set(newExpense, (err) => {
			if (err) {
				console.log(err)
			}

			commit(ExpenseTypes.SET_EXPENSE, newExpense)
		})
	} catch (err) {
		store.dispatch('message/actionSetMessage', {
			text: 'Erro ao cadastrar a despesa',
			type: 'danger',
		})
	}
}
