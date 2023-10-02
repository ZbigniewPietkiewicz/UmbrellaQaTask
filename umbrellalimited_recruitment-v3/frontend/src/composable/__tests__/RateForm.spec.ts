import { describe, it, expect, vi, beforeEach } from 'vitest'

import { useRateForm } from '../RateForm'
import { flushPromises } from '@vue/test-utils'

const mockedRateResource = { id: 0, sourceCountry: 'PL', destinationCountry: 'PL', rate: 2 }
const mockedApiUpdateResponse = {
  ...mockedRateResource,
  error: true,
  errorMsg: 'This is error test'
}
// TODO Dry fetch mocking
// mock fetch
global.fetch = vi.fn()

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}
describe('Rate Form Composable', () => {
  beforeEach(() => {
    // @ts-expect-error mocking fetch
    fetch.mockClear()
  })
  it('loads and validates resource', async () => {
    const { rateValue, isRateValid } = useRateForm(mockedRateResource)

    expect(rateValue.value).toBe(2)
    expect(isRateValid.value).toBe(true)

    rateValue.value = 200
    expect(isRateValid.value).toBe(false)
    rateValue.value = '23s'
    expect(isRateValid.value).toBe(false)
    rateValue.value = -2
    expect(isRateValid.value).toBe(false)
  })

  it('handles update errors', async () => {
    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse(mockedApiUpdateResponse))

    const { onSubmit, isError, isSuccess, rateValue } = useRateForm(mockedRateResource)

    rateValue.value = 6
    await onSubmit()
    await flushPromises()
    expect(isError.value).toBe(true)
    expect(isSuccess.value).toBe(false)
  })
  it('handles update success', async () => {
    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse({ ...mockedApiUpdateResponse, error: false }))

    const { onSubmit, isSaving, isSuccess, isError, rateValue } = useRateForm(mockedRateResource)

    rateValue.value = 6
    expect(isSaving.value).toBe(false)
    await onSubmit()
    expect(isSaving.value).toBe(true)
    await flushPromises()
    expect(isError.value).toBe(false)
    expect(isSuccess.value).toBe(true)
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 351)
    )
    expect(isSaving.value).toBe(false)
  })
})
