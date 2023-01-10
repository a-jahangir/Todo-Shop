import Swal from 'sweetalert2'

function updateLocalStorage (cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const cart = {
  namespaced: true,

  state: {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
    }
  }

}

export default cart
