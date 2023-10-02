import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'

export interface RatesResourceInterface {
  sourceCountry: string
  destinationCountries: RateResourceInterface[]
}
