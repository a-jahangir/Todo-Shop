<template>
    <i @click="deleteTask" class="bi bi-trash-fill ms-3"></i>
    <i v-if="loading" class="spinner-border spinner-border-sm"></i>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  id: Number
})
const loading = ref(false)
const store = useStore()

async function deleteTask () {
  loading.value = true
  await store.dispatch('deleteTask', props.id)
  loading.value = false
}

</script>
