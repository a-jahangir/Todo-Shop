import Swal from 'sweetalert2'

function updateLocalStorage (cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = {
  namespaced: true,

  state: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },

  getters: {
    count (state) {
      return state.cart.length
    },
    allItems (state) {
      return state.cart
    },
    totalAmount (state) {
      return state.cart.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    }
  },

  mutations: {
    add (state, product) {
      const item = state.cart.find(p => p.id === product.id)
      if (!item) {
        state.cart.push({
          ...product,
          quantity: 1
        })
      } else {
        item.quantity++
      }
      updateLocalStorage(state.cart)
    },
    increment (state, id) {
      const item = state.cart.find(p => p.id === id)
      if (item) {
        item.quantity++
      }
      updateLocalStorage(state.cart)
    },
    decrement (state, id) {
      const item = state.cart.find(p => p.id === id)
      if (item) {
        if (item.quantity > 1) {
          item.quantity--
        }
      }
      updateLocalStorage(state.cart)
    },
    remove (state, id) {
      state.cart = state.cart.filter(cart => cart.id !== id)
      updateLocalStorage(state.cart)
    },
    clear (state, id) {
      state.cart = []
      updateLocalStorage(state.cart)
    }
  },

  actions: {
    addToCart ({ commit }, product) {
      commit('add', product)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Added',
        showConfirmButton: false,
        timer: 1500
      })
    },
    increment ({ commit }, id) {
      commit('increment', id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Updated',
        showConfirmButton: false,
        timer: 1500
      })
    },
    decrement ({ commit }, id) {
      commit('decrement', id)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Updated',
        showConfirmButton: false,
        timer: 1500
      })
    },
    remove ({ commit }, id) {
      commit('remove', id)
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Product Deleted',
        showConfirmButton: false,
        timer: 1500
      })
    },
    clear ({ commit }) {
      commit('clear')
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Product List Cleared',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}

export default cart
