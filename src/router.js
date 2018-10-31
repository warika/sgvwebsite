import Vue from 'vue'

import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import Journey from './views/Journey.vue'
import Contact from './views/Contact.vue'
import Firstpage from './views/Firstpage.vue'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Firstpage
    },
    {
      path: '/',
      component: Main,
      children: [
        {path: 'home', name: 'home', component: Home},
        {path: 'about', name: 'about', component: About},
        {path: 'product', name: 'product', component: Product},
        {path: 'journey', name: 'journey', component: Journey},
        {path: 'contact', name: 'contact', component: Contact},
      ]
    },
    {
      path: '*', redirect: '/home'
    }
  ]
})
