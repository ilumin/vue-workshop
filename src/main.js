import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import store from './vuex/store'

import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000'

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
