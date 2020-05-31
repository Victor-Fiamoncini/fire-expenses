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
			component: () => import('./components/pages/Logon'),
			meta: {
				requiresAuth: false,
				title: 'Logon',
			},
		},
		{
			path: '/painel',
			name: 'Home',
			component: () => import('./components/pages/Home'),
			meta: {
				icon: 'home',
				requiresAuth: true,
				title: 'Home',
			},
		},
		{
			path: '/painel/lista-gastos',
			name: 'Gastos',
			component: () => import('./components/pages/ExpenseList'),
			meta: {
				icon: 'list',
				requiresAuth: true,
				title: 'Lista de Dispesas',
			},
		},
	],
})

window.popStateDetected = false
window.addEventListener('popstate', () => {
	window.popStateDetected = true
})

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} - Fire Expenses`

	store.dispatch('auth/actionCheckUid')
	const hasUid = store.getters['auth/uid']

	if (window.popStateDetected) {
		return next(false)
	}

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!hasUid) {
			return next({ name: 'Logon' })
		} else {
			return next()
		}
	} else {
		if (hasUid) {
			return next({ to: 'Home' })
		} else {
			next()
		}
	}
})

export default router
