import Vue from 'vue'
import Router from 'vue-router'

import Logon from '../pages/Logon'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Logon',
			component: Logon,
		},
	],
})

export default router
