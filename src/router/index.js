import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../views/LoginComponent'

import { globalAuthGuard } from '../guards/auth.guard'; 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/about',
    meta: { authRequired: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginComponent
  },
  {
    path: '/about',
    name: 'About',
    meta: { authRequired: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(globalAuthGuard);

export default router
