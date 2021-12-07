import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import HContainer from './components/container';
import HButton from './components/button';

const app = createApp(App);

app.config.globalProperties.$HELEMENT = {
  size: 'large',
};

app.use(router)
  .use(HContainer)
  .use(HButton)
  .mount('#app');
