import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks
    }
  },
  actions: {
    getTasks ({ commit }) {
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
          commit('setTasks', response.data)
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  modules: {
  }
})
