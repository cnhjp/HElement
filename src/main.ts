import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import HContainer from './components/container';

createApp(App)
    .use(router)
    .use(HContainer)
    .mount('#app');
