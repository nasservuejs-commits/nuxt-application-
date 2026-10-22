<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string
}
const { product } = defineProps<{ product: Product }>()
</script> 
<template>
  <div class="card">
    <div class="grid grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7">
      </div>
      <div class="p -7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 pb-2 mb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex cursor-pointer">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
 img {
  max-width: 400px;
 }
</style>