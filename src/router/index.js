import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ()=> import('../layouts/default.vue'),
      children: [
        { path: '/dashboard', component: ()=> import('../views/Dashboard.vue')},
        { path: 'products', component: ()=> import('../views/Products.vue')},
        { path: 'foods', component: ()=> import('../views/Foods.vue')},
        { path: 'units', component: ()=> import('../views/Units.vue')},
        { path: 'orders', component: ()=> import('../views/Orders.vue')},
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('../views/auth/login.vue'),
    }
  ],
})

export default router
