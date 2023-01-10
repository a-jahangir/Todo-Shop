<template>
    <div class="row">
        <div class="col-md-2 mb-4">
            <h6>Number Of Tasks:</h6>
            <select v-model="number" @change="filterTasks" class="form-select form-select-sm">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const number = ref()

function filterTasks () {
  store.dispatch('task/filterTasks', number.value)
}

</script>
