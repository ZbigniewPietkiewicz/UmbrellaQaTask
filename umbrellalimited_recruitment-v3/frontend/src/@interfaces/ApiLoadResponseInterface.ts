import type { RatesResourceInterface } from '@/@interfaces/RatesResourceInterface'

export interface ApiLoadResponseInterface {
  sourceCountries: string[]
  rates: RatesResourceInterface[]
}
