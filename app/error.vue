<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>()
</script>


<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{ error.status }}</p>
    <p class="mt-6 text-6xl ">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7 cursor-pointer" @click="clearError({ redirect: '/' })">Go Home...</button>
  </div>
</template>


<style scoped>

</style>