import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Logon',
			component: () => import('./pages/Logon'),
		},
		{
			path: '/dashboard',
			name: 'Home',
			component: () => import('./pages/Home'),
			meta: {
				requiresAuth: true,
			},
		},
	],
})

router.beforeEach(async (to, from, next) => {
	document.title = `VFinances - ${to.name}`

	store.dispatch('auth/actionCheckUid')
	const hasUid = store.getters['auth/uid']

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (hasUid) {
			next()
		} else {
			next({ name: 'Logon' })
		}
	} else {
		if (hasUid) {
			next({ name: 'Home' })
		} else {
			next()
		}
	}
})

export default router
