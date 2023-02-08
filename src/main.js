import router from './router/routes'
import App from './App.vue'
import {createApp} from "vue";


createApp(App).use(router).mount('#app');