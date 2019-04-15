import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../pages/home/home'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/home/home'], resolve)
    },
    {
      path: '/shop',
      name: 'shop',
      component: resolve => require(['../pages/shop/shop'], resolve)
    },
    {
      path: '/singleCard',
      name: 'singleCard',
      component: resolve => require(['../pages/singleCard/singleCard'], resolve)
    },
    {
      path: '/center',
      name: 'center',
      component: resolve => require(['../pages/center/center'], resolve)
    }
  ]
})
