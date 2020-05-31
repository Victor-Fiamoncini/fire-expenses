import MessageTypes from './types'

export default {
	[MessageTypes.SET_MESSAGE]: (state, payload) => state.messages.push(payload),
	[MessageTypes.REMOVE_MESSAGE]: (state) => state.messages.shift(),
}
