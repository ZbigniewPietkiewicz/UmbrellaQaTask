import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { RateApiClient } from '@/services/RateApiClient'
import type { RatesResourceInterface } from '@/@interfaces/RatesResourceInterface'
import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'

// simple composable state - in bigger scope project it would be state module (ex. pina)
const rates: Ref<RatesResourceInterface[] | null> = ref(null)
const countries: Ref<string[] | null> = ref([])
const isLoading: Ref<boolean> = ref(false)
export function useRateResource() {
  const error = ref('')

  onMounted(async () => {
    if (isLoading.value) {
      return
    }
    if (rates.value === null) {
      try {
        isLoading.value = true
        const result = await RateApiClient.load()
        rates.value = result.rates || []
        countries.value = result.sourceCountries || []

        isLoading.value = false
      } catch (e: any) {
        console.error(e)
        error.value = `Błąd pobierania danych z API: ${e.message || 'nieznany'}`
      }
    }
  })

  function getRate(source: string, destination: string): RateResourceInterface | undefined {
    return rates.value
      ?.find((r: RatesResourceInterface) => r.sourceCountry === source)
      ?.destinationCountries.find(
        (c: RateResourceInterface) => c.destinationCountry === destination
      )
  }

  return {
    countries,
    rates,
    isLoading,
    error,
    getRate
  }
}
