import { describe, it, expect, vi, beforeEach } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import { useRateResource } from '../RateResource'
import { defineComponent } from 'vue'

const mockedApiResponse = {
  sourceCountries: ['PL', 'EN'],
  rates: [
    {
      sourceCountry: 'PL',
      destinationCountries: [{ id: 1, sourceCountry: 'PL', destinationCountry: 'EN', rate: 1.24 }]
    }
  ]
}
// TODO Dry fetch mocking
// mock fetch
global.fetch = vi.fn()

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}
describe('Rate Resource Composable', () => {
  beforeEach(() => {
    // @ts-expect-error mocking fetch
    fetch.mockClear()
  })
  it('loads resources', async () => {
    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse(mockedApiResponse))
    let rateResource: any
    const testComponent = defineComponent({
      setup() {
        rateResource = useRateResource()
      },
      template: '<div/>'
    })
    mount(testComponent)
    expect(rateResource).to.not.be.undefined
    expect(rateResource?.isLoading.value).toBe(true)

    await flushPromises()
    expect(rateResource?.countries.value.length).toBe(2)
    expect(rateResource?.rates.value.length).toBe(1)
    expect(rateResource?.isLoading.value).toBe(false)

    expect(rateResource?.getRate('PL', 'EN')).toStrictEqual(
      mockedApiResponse.rates[0].destinationCountries[0]
    )
    expect(rateResource?.getRate('PL', 'PL')).to.be.undefined
  })
})
