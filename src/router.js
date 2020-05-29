import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('./pages/Home'),
		},
		{
			path: '/logon',
			name: 'Logon',
			component: () => import('./pages/Logon'),
		},
	],
})

export default router
