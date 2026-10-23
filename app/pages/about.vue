
<script setup lang="ts">
const { data, pending, error } = await useFetch(
  '/api/currency/USD'
)
</script>

<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet aperiam minima unde nemo harum quam maxime optio quos corrupti.
    </p>
  </div>

  <div v-if="pending">
    <p>Loading exchange rate...</p>
  </div>

  <div v-else-if="error">
    <p>Failed to load exchange rate: {{ error.message }}</p>
  </div>

  <div v-else-if="data">
    <p>{{ data }}</p>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
