import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2TouchEvents from 'vue2-touch-events'
import customPlugin from './plugins/custom'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// require styles
import 'swiper/dist/css/swiper.css'

import store from './store'
Vue.use(BootstrapVue);
Vue.use(customPlugin)
Vue.use(Vue2TouchEvents)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
