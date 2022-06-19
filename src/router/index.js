import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Learning from '../pages/Learning.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/learning',
		name: 'learning',
		component: Learning,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
