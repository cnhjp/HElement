import { App } from 'vue';
import Button from './button.vue';

export default {
  install(app: App) {
    app.component(Button.name, Button);
  },
};
