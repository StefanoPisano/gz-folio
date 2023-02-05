import * as VueRouter from 'vue-router'


import Header from '../components/Header.vue';
import About from '../components/About.vue';
import Experience from '../components/Experience.vue';
import Contacts from "@/components/Contacts";

const routes = [
	{
		path: "/",
		alias: ["/stefanopisano-me", "/"],
		name: "Greetings",
		component: Header,
	},
	{
		path: "/stefanopisano-me/about",
		name: "About",
		component: About,
	},
	{
		path: "/stefanopisano-me/experience",
		name: "Experience",
		component: Experience,
	},
	{
		path: "/stefanopisano-me/contacts",
		name: "Contacts",
		component: Contacts,
	}
];


const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes,
});

export default router
