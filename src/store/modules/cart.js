const cart = {
  namespaced: true,

  state: {
    cart: []
  },

  mutations: {
    add (state, product) {
      state.cart.push({
        ...product,
        quantity: 1
      })
      console.log(state.cart)
    }
  },

  actions: {
    addToCart ({ commit }, product) {
      commit('add', product)
    }
  }

}

export default cart
