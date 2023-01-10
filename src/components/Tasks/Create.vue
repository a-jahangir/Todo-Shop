<template>
    <div class="row">
        <div class="col-md-12 mb-4">
            <h4>Create Task:</h4>
            <form @submit.prevent="storeTask" class="row">
                <div class="col-md-6">
                    <input v-model.lazy.trim="title" type="text" class="form-control">
                    <div class="form-text text-danger">
                        {{ titleErrorText }}
                    </div>
                </div>
                <div class="col-auto">
                    <button class="btn btn-dark">
                        Create
                        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const title = ref('')
const titleErrorText = ref('')
const loading = ref(false)

async function storeTask () {
  if (title.value === '') {
    titleErrorText.value = 'Title required'
  } else {
    loading.value = true
    titleErrorText.value = ''
    await store.dispatch('task/storeTask', title.value)
    loading.value = false
  }
}

</script>
