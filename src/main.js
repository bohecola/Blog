import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import "./scss/app.scss"

import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

Vue.use(Message)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
