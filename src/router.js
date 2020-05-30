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
			meta: {
				title: 'Logon',
			},
		},
		{
			path: '/painel',
			name: 'Home',
			component: () => import('./pages/Home'),
			meta: {
				auth: true,
				icon: 'home',
				title: 'Home',
			},
		},
		{
			path: '/lista-gastos',
			name: 'Gastos',
			component: () => import('./pages/ExpenseList'),
			meta: {
				auth: true,
				icon: 'list',
				title: 'Lista de Dispesas',
			},
		},
	],
})

router.beforeEach(async (to, from, next) => {
	document.title = `${to.meta.title} - Fire Expenses`

	store.dispatch('auth/actionCheckUid')
	const hasUid = store.getters['auth/uid']

	if (to.matched.some((record) => record.meta.auth)) {
		if (hasUid) {
			return next()
		} else {
			next({ name: 'Logon' })
		}
	} else {
		if (hasUid) {
			return next({ name: 'Home' })
		} else {
			next()
		}
	}
})

export default router
