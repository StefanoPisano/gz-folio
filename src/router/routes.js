import RouterToggle from '@/router/routing-toggle.json';

const components = ["GZGreetings", "GZAbout", "GZExperience", "GZProjects", "GZContacts", "GZBlog"];
const routes = components
	.filter(v => RouterToggle.find(ft => v === ft.name && ft.enabled))
	.map(v => {
		const route = RouterToggle.find(ft => v === ft.name);
		return {
			...route,
			name: v,
		};
	});


export default routes
