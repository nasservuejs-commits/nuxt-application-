<script setup lang="ts"></script>
<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container flex mx-auto p-4 justify-between">
        <NuxtLink class="font-bold" :to="{ name: 'index' }">Nuxt app</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'products' }" class="btn">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
  </div> 
  <div class="container mx-auto p-4">   
    <slot />
  </div>
</template>
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>