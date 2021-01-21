import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import "./scss/app.scss"

import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

// v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import createTipPlugin from '@kangc/v-md-editor/lib/plugins/tip/index';

import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
import 'prismjs/components/prism-json';

VMdPreview.use(vuepressTheme);
VMdPreview.use(createTipPlugin());

Vue.use(Message)
Vue.use(VMdPreview);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
