
export default defineEventHandler(async () => {
    const { data } = await $fetch<{ data: unknown }>('https://api.currencyapi.com/v3/countries', {
      headers: {
        apikey: getCurrencyApiKey()
      }
    })

    return data
})
