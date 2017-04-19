import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
