import routes from './router/routes'
import App from './App.vue'
import {createApp} from "vue";
import Loading from 'vue3-loading-screen'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeadphones)


const app = createApp(App);
app.config.globalProperties.$theme = 'default'
app.config.globalProperties.$routes = routes


app.use(Loading, {
	bg: '#41b883ad',
	slot: `
		<div class="px-5 py-3 bg-gray-800 rounded">
      		<h3 class="text-3xl text-white"><img width="64" src="./loading.svg" alt="Loading..."/></h3>
    	</div>
  `,
	size: 3,
	icon_color: 'white',
});

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app');