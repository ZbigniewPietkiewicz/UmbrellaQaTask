import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'

export interface ApiUpdateResponseInterface extends RateResourceInterface {
  error?: boolean
  errorMsg?: string
}
