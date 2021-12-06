import { App } from 'vue';

import HContainer from './container.vue';
import HHeader from './header.vue';
import HMain from './main.vue';
import HFooter from './footer.vue';
import HAside from './aside.vue';

export default {
  install(app: App) {
    app.component(HContainer.name, HContainer);
    app.component(HHeader.name, HHeader);
    app.component(HMain.name, HMain);
    app.component(HFooter.name, HFooter);
    app.component(HAside.name, HAside);
  },
};
