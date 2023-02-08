import router from './router'
import App from './App.vue'
import {createApp} from "vue";
import Loading from 'vue3-loading-screen'

const app = createApp(App);

app.use(Loading, {
	bg: '#41b883ad',
	slot: `
		<div class="px-5 py-3 bg-gray-800 rounded">
      		<h3 class="text-3xl text-white"><img width="64" src="../loading.svg" alt="Loading..."/></h3>
    	</div>
  `,
	size: 3,
	icon_color: 'white',
});

app.use(router).mount('#app');