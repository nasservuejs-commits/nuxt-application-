
export default defineEventHandler(async (event) => {
  const code = getRouterParam(event, 'code')

  if (!code || !/^[A-Z]{3}$/.test(code)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid currency code'
    })
  }

  const response = await $fetch<{
    data: Record<string, {
      code: string
      value: number
    }>
  }>('https://api.currencyapi.com/v3/latest', {
    headers: {
      apikey: getCurrencyApiKey()
    },
    query: {
      currencies: code,
      base_currency: 'IQD'
    }
  })

  return response.data
})
