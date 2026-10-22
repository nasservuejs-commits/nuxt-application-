<script setup lang="ts"></script>
<template>
  <div>
    <header class="shadow-sm bg-white ">
      <nav class="container mx-auto p-4">
        <NuxtLink :to="{ name: 'index' }" class="font-bold">Nuxt app</NuxtLink>
      </nav>
    </header>
  </div> 
  <div class="container mx-auto p-4">  
    <slot />
  </div> 
  <footer class="container mx-auto p-4 flex justify-between border-t-2">
     <ul class="flex gap-4">
        <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'products' }">Products</NuxtLink></li>
      </ul>
  </footer>
</template>
<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>