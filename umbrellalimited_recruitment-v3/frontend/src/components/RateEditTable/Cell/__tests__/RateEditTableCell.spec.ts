import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RateEditTableCell from '../RateEditTableCell.vue'

describe('RateEditTable Cell', () => {
  const testRate = {
    id: 0,
    sourceCountry: 'PL',
    destinationCountry: 'DE',
    rate: 2
  }

  it('renders properly', () => {
    const wrapper: any = mount(RateEditTableCell, {
      props: { rate: testRate }
    })

    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
    expect(Number(input.element.value)).toBe(testRate.rate)
  })

  it('renders empty on missing rate', async () => {
    const wrapper: any = mount(RateEditTableCell, {
      props: {}
    })

    expect(wrapper.find('input').exists()).toBe(false)
  })
})
