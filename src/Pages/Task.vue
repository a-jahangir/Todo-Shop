<template>
    <div class="container mt-5">
        <createTask />
        <hr>
        <filterTasks />
        <div class="row g-3">
            <div v-for="task in tasks" :key="task.id" class="col-md-4">
                <div class="card" :class="{ 'bg-light': task.completed }">
                    <div class="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <del v-if="task.completed">{{ task.title }}</del>
                            <div v-else>{{ task.title }}</div>
                        </div>
                        <div class="d-flex align-items-center">
                        <updateTask :task="task"/>
                        <deleteTask :id="task.id"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import filterTasks from '../components/Tasks/Filtertasks.vue'
import createTask from '../components/Tasks/Create.vue'
import updateTask from '../components/Tasks/updateTask.vue'
import deleteTask from '../components/Tasks/deleteTask.vue'

const store = useStore()
const tasks = computed(() => store.getters['task/allTasks'])

function getTasks () {
  store.dispatch('task/getTasks')
}
getTasks()
</script>
