import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Currencies from '../views/Currencies/Currencies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/currencies',
    name: 'home',
    component: Currencies
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Currencies
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/currencies'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
