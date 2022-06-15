import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Reactive from '../views/Refs and Reactive.vue'
import Computed from '../views/computed.vue'
import Props from '../views/props.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: Reactive
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed
  },
  {
    path: '/props',
    name: 'props',
    component: Props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
