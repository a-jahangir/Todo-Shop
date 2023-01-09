import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import TaskIndex from '../Pages/Task.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/tasks', name: 'tasks', component: TaskIndex }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
