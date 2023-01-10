import { createStore } from 'vuex'
import task from './modules/task'
import product from './modules/product'
import cart from './modules/cart'

export default createStore({
  modules: {
    task,
    product,
    cart
  }
})
