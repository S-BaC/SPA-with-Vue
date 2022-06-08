import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import jobs from '../views/jobs.vue'
import jobDetails from '../views/jobDetails.vue'
import notFound from '../views/pgNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: jobDetails,
    props: true
  },

  // Redirecting
  {
    path: '/alljobs',
    redirect:'jobs'
  },

  // Not Found
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
