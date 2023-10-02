import { SimpleApiClient } from '@/services/SimpleApiClient'
import type { ApiLoadResponseInterface } from '@/@interfaces/ApiLoadResponseInterface'
import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'
import type { ApiUpdateResponseInterface } from '@/@interfaces/ApiUpdateResponseInterface'
export const RateApiClient = {
  load: async (): Promise<ApiLoadResponseInterface> => {
    return await SimpleApiClient.get('/api/load')
  },
  update: async (payload: RateResourceInterface): Promise<ApiUpdateResponseInterface> => {
    const response = await SimpleApiClient.patch(`/api/${payload.id}/update/json`, payload)
    if (response.error) {
      throw new Error(response.errorMsg ?? 'Unknown error')
    }
    return response
  }
}
