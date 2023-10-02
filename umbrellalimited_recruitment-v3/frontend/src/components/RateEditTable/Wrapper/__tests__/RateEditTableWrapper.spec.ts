import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import RateEditTableWrapper from '../RateEditTableWrapper.vue'

const testValues = ['1', '2', '3']
describe('RateEditTable Wrapper', () => {
  it('renders properly', () => {
    const wrapper = mount(RateEditTableWrapper, {
      props: { source: testValues, destination: testValues }
    })
    // label is present
    expect(wrapper.findAll('tbody tr').length).toBe(testValues.length)
    expect(wrapper.findAll('thead th').length).toBe(testValues.length + 1)
  })
  //
  // it('renders active class on hover', async () => {
  //   const wrapper = mount(RateEditTableWrapper, {
  //     props: { xValues: testValues, yValues: testValues }
  //   })
  //
  //   const tr = wrapper.findAll('tbody tr')[0]
  //   const td = wrapper.findAll('tbody td')[0]
  //   await tr.trigger('mouseenter')
  //   await td.trigger('mouseenter')
  //   await wrapper.vm.$nextTick()
  //   console.log(td.classes())
  //   expect(td.classes().includes('active')).toBe(true)
  // })
})
