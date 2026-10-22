// Resolve the CurrencyAPI key at request time so it is never baked into the build output.
export function getCurrencyApiKey(): string {
  const key = useRuntimeConfig().currencyApiKey || process.env.CURRENCYAPI_KEY

  if (!key) {
    throw createError({
      statusCode: 500,
      statusMessage: 'CurrencyAPI key is not configured'
    })
  }

  return key
}
