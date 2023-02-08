import * as VueRouter from 'vue-router'

import RouterToggle from '@/router/routing-toggle.json';
import Greetings from '@/components/Greetings.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Contacts from "@/components/Contacts";

const components = [Greetings, About, Experience, Contacts];
const routes = components
	.filter(v => RouterToggle.find(ft => v.name === ft.name && ft.enabled))
	.map(v => {
		const route = RouterToggle.find(ft => v.name === ft.name);
		return {
			label: route.label,
			path: route.path,
			name: v.name,
			component: v
		};
	});
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});

export default router
