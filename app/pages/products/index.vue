  <script setup lang="ts">
    definePageMeta({
      layout: 'products'
    })
    interface Users {
      id: number;
      title: string;
      price: number;
      image: string;
    }
    const { data: products } = await useFetch<Users[]>(
      'https://fakestoreapi.com/products'
    )
    useHead({
      title: 'Nuxt | Merch',
      meta: [{ name: 'description', content: 'Browse our products.' }]
    })
  </script> 
  <template>
    <div>
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product  in products" :key="product.id">
          <ProductCard :product="product"/>
        </div>
      </div>
    </div>
  </template>

  <style scoped>
  
  </style>