import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home.vue'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(Router)
const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/baby-thunder-cake/',
			name: 'home',
			component: Home
		},
		{
			path: '/baby-thunder-cake/dashboard',
			name: 'dashboard',
			component: Dashboard
		}
	]
})


export default router