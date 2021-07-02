import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Board from '@/views/Board.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},

	{
		path: '/Board',
		name: 'Board',
		component: Board,
	}

]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
