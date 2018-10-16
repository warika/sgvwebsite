import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Product from './views/Product.vue'
import Journey from './views/Journey.vue'
import Contact from './views/Contact.vue'
import MyStyle from './views/MyStyle.vue'
// import ProductGroup from './views/ProductGroup.vue'
// import ProductDetail from './views/ProductDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        // {path: '', redirect: '/home'},
        {path: 'home', name: 'home', component: Home},
        {path: 'about', name: 'about', component: About},
        {path: 'product', name: 'product', component: Product},
        {path: 'journey', name: 'journey', component: Journey},
        {path: 'contact', name: 'contact', component: Contact},
        {path: 'mystyle', component: MyStyle},
        // {path: 'product/:group', component: ProductGroup},
        // {path: 'product/:code', component: ProductDetail}

      ]
    }
  ]
})
