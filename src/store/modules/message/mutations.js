import MessageTypes from './types'

export default {
	[MessageTypes.SET_MESSAGE]: (state, payload) => {
		state.messages = [...state.messages, payload]
	},
	[MessageTypes.REMOVE_MESSAGE]: (state, payload) => {
		state.messages = state.messages.filter((message) => message.id !== payload)
	},
}
