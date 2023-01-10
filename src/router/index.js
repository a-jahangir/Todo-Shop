import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Pages/Home.vue'
import TaskIndex from '../Pages/Task.vue'
import ProductIndex from '../Pages/Product.vue'
import CartIndex from '../Pages/Cart.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/tasks', name: 'tasks', component: TaskIndex },
  { path: '/products', name: 'products', component: ProductIndex },
  { path: '/cart', name: 'cart', component: CartIndex }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
