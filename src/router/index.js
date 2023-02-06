import * as VueRouter from 'vue-router'


import Header from '../components/Greetings.vue';
import About from '../components/About.vue';
import Experience from '../components/Experience.vue';
import Contacts from "@/components/Contacts";

const routes = [
	{
		path: "/",
		name: "Greetings",
		component: Header,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
	{
		path: "/experience",
		name: "Experience",
		component: Experience,
	},
	{
		path: "/contacts",
		name: "Contacts",
		component: Contacts,
	}
];


const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

export default router
