
export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
    const { data } = await $fetch<{ data: unknown }>('https://api.currencyapi.com/v3/countries', {
      headers: {
        apikey: config.currencyApiKey
      }
    })

    return data
})
