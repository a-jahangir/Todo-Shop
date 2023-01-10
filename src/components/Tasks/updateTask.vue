<template>
    <i v-if="props.task.completed" @click="changeCompleted(task)" class="bi bi-check-all" style="font-size:22px"></i>
    <i v-else @click="changeCompleted(task)" class="bi bi-check" style="font-size:22px"></i>
    <i v-if="loading" class="spinner-border spinner-border-sm"></i>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  task: Object
})
const loading = ref(false)
const store = useStore()

async function changeCompleted (task) {
  loading.value = true
  await store.dispatch('task/updateTask', task)
  loading.value = false
}

</script>
