const API = import.meta.env.VITE_API
const defaultFetchOptions = {
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}
export const SimpleApiClient = {
  get: async (path: string) => {
    const response = await fetch(`${API}${path}`, defaultFetchOptions)
    return await response.json()
  },
  patch: async (path: string, payload: any) => {
    const response = await fetch(`${API}${path}`, {
      ...defaultFetchOptions,
      method: 'PATCH',
      body: JSON.stringify(payload)
    })
    return await response.json()
  }
}
