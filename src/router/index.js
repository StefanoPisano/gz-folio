import * as VueRouter from 'vue-router'


import Header from '@/components/Greetings';
import About from '@/components/About';
import Experience from '../components/Experience';
import Contacts from "@/components/Contacts";
import Blog from "@/components/Blog";

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
	},
	{
		path: "/blog",
		name: "Blog",
		component: Blog,
	}
];


const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
});

export default router
