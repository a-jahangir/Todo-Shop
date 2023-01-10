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
    },
    updateTask (state, updateTask) {
      const index = state.tasks.findIndex(task => task.id === updateTask.id)
      if (index !== -1) {
        state.tasks.splice(index, 1, updateTask)
      }
    },
    removeTask (state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
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
            title: 'Task Created',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    async updateTask ({ commit }, task) {
      await axios
        .put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
          id: task.id,
          title: task.title,
          completed: !task.completed
        })
        .then(function (response) {
          commit('updateTask', response.data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Task Edited',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(function (response) {
          console.log(response)
        })
    },
    async deleteTask ({ commit }, id) {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(function () {
          commit('removeTask', id)
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Task Deleted',
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
