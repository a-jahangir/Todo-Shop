import axios from 'axios'
import Swal from 'sweetalert2'
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
    },
    createTasks (state, newTasks) {
      state.tasks.unshift(newTasks)
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
    },
    filterTasks ({ commit }, limit) {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        .then(function (response) {
          commit('setTasks', response.data)
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    async storeTask ({ commit }, title) {
      await axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title: title,
          completed: false
        })
        .then(function (response) {
          commit('createTasks', response.data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(function (response) {
          console.log(response)
        })
    }
  },
  modules: {
  }
})
