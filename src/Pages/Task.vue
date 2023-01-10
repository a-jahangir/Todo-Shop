<template>
    <div class="container mt-5">
        <createTask />
        <hr>
        <filterTasks />
        <div class="row g-3">
            <div v-for="task in tasks" :key="task.id" class="col-md-4">
                <div class="card" :class="{'bg-light' : task.completed}">
                    <div class="card-body">
                        <del v-if="task.completed">{{ task.title }}</del>
                        <div v-else>{{ task.title }}</div>
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

const store = useStore()
const tasks = computed(() => store.state.tasks)

function getTasks () {
  store.dispatch('getTasks')
}
getTasks()
</script>
