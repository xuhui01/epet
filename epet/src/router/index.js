import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/main.vue'
import category from '../pages/category/category.vue'
import cart from '../pages/cart/cart.vue'
import login from '../pages/login/login.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: main
    },
    {
      path: '/main',
      component: main
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/login',
      component: login
    }
  ]
})
