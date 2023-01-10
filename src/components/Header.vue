<template>
    <header>
        <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary shadow-sm" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Jahangir</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/tasks">Tasks</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/products">Shop</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link p-1 me-3" to="/cart">
                                <span class="badge rounded-pill bg-primary me-1">{{ counterCartItems }}</span>
                                <i class="bi bi-basket-fill" style="font-size:23px"></i>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counterCartItems = computed(() => store.getters['cart/count'])

</script>

<style scoped>
.router-link-active {
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
}
</style>
