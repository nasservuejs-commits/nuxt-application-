<script setup lang="ts">
const id = useRoute().params.id as string

interface Users {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const url = 'https://fakestoreapi.com/products/' + id
const { data: product } = await useFetch<Users>(url, { key: id })
    if (!product.value) {
      throw createError({ status: 404, message: 'Page not found', fatal: true})
    }
definePageMeta({
  layout: 'products'
})
</script>

<template>
  <div v-if="product">
    <Head>
      <Title>Nuxt | {{ product.title }}</Title>
      <Meta  name="description" :content="product.description"/>
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<style scoped></style>