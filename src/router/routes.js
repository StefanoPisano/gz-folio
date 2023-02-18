
import RouterToggle from '@/router/routing-toggle.json';
import Greetings from '@/components/greetings/Greetings.vue';
import About from '@/components/about/About.vue';
import Experience from '@/components/experience/Experience.vue';
import Contacts from "@/components/contacts/Contacts.vue";
import Blog from "@/components/blog/Blog.vue";

const components = [Greetings, About, Experience, Contacts, Blog];
const routes = components
	.filter(v => RouterToggle.find(ft => v.name === ft.name && ft.enabled))
	.map(v => {
		const route = RouterToggle.find(ft => v.name === ft.name);
		return {
			...route,
			name: v.name,
			component: v
		};
	});


export default routes
