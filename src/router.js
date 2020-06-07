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
				title: 'Logon',
			},
		},
		{
			path: '/cadastro',
			name: 'Register',
			component: () => import('./components/pages/Register'),
			meta: {
				title: 'Cadastro',
			},
		},
		{
			path: '/painel',
			name: 'Home',
			component: () => import('./components/pages/Home'),
			meta: {
				requiresAuth: true,
				title: 'Home',
			},
		},
		{
			path: '/painel/lista',
			name: 'Expenses',
			component: () => import('./components/pages/ExpenseList'),
			meta: {
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

	if (to.matched.some(route => route.meta.requiresAuth)) {
		if (!hasUid) {
			return router.push({ name: 'Logon' })
		} else {
			return next()
		}
	} else {
		if (hasUid) {
			return router.push({ name: 'Home' })
		} else {
			next()
		}
	}
})

export default router
