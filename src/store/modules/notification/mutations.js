import { v4 } from 'uuid'
import Types from './types'

export default {
	[Types.SET_NOTIFICATION]: (state, payload) => {
		state.notifications = [
			...state.notifications,
			{
				id: v4(),
				...payload,
			},
		]
	},
	[Types.REMOVE_NOTIFICATION]: (state, payload) => {
		state.notifications = state.notifications.filter(
			notification => notification.id !== payload.id
		)
	},
}
