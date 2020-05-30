export const setUid = (uid) => {
	if (uid) {
		localStorage.setItem('uid', uid)
	}
}

export const getUid = () => localStorage.getItem('uid')

export const destroyUid = () => localStorage.removeItem('uid')
