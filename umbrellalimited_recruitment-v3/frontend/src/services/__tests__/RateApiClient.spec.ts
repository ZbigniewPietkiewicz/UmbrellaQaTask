import { describe, it, expect, vi, beforeEach } from 'vitest'

import type { ApiLoadResponseInterface } from '../../@interfaces/ApiLoadResponseInterface'
import { RateApiClient } from '../RateApiClient'

// mock fetch
global.fetch = vi.fn()

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}
describe('Rate Api Client service', () => {
  beforeEach(() => {
    // @ts-expect-error mocking fetch
    fetch.mockClear()
  })
  it('loads resources', async () => {
    // mock setup
    const mockedCountriesList: ApiLoadResponseInterface = {
      sourceCountries: ['PL'],
      rates: [
        {
          sourceCountry: 'PL',
          destinationCountries: [{ id: 1, sourceCountry: 'PL', destinationCountry: 'PL', rate: 1 }]
        }
      ]
    }
    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse(mockedCountriesList))

    // test
    const results = await RateApiClient.load()

    expect(results.sourceCountries.length).toBe(1)
    expect(results.sourceCountries[0]).toBe('PL')
    expect(results.rates[0].sourceCountry).toBe('PL')
    expect(results.rates[0].destinationCountries.length).toBe(1)
  })

  it('handles update errors', async () => {
    // mock setup
    const mockUpdateResults = {
      id: 0,
      sourceCountry: 'PL',
      destinationCountry: 'PL',
      rate: 2.3,
      error: true,
      errorMsg: 'Test error message'
    }
    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse(mockUpdateResults))

    //test

    await expect(
      RateApiClient.update({
        id: 0,
        sourceCountry: '',
        destinationCountry: '',
        rate: 0
      })
    ).rejects.toThrow('Test error message')
  })

  it('handles update', async () => {
    // mock setup
    const mockUpdateResults = {
      id: 1,
      sourceCountry: 'PL',
      destinationCountry: 'PL',
      rate: 1,
      error: false
    }

    // @ts-expect-error mocking fetch
    fetch.mockResolvedValue(createFetchResponse(mockUpdateResults))

    //test
    const payloadTest = {
      id: 1,
      sourceCountry: 'PL',
      destinationCountry: 'PL',
      rate: 2
    }

    const response = await RateApiClient.update(payloadTest)
    await expect(response).toStrictEqual(mockUpdateResults)

    expect(fetch).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API}/api/${payloadTest.id}/update/json`,
      {
        method: 'PATCH',
        body: JSON.stringify(payloadTest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    )
  })
})
