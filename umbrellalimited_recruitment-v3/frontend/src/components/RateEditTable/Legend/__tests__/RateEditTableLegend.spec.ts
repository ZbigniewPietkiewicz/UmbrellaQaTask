import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import RateEditTableLegend from '../RateEditTableLegend.vue'

describe('RateEditTable Legend', () => {
  it('renders properly', () => {
    const testLabel = 'Test label'
    const wrapper = mount(RateEditTableLegend, {
      props: { label: testLabel, axis: 'x' }
    })
    // label is present
    expect(wrapper.text()).toContain(testLabel)
    expect(wrapper.classes().includes('rate-edit-table-legend--x'))

    // axis classes
    wrapper.setProps({ axis: 'y' })
    expect(wrapper.classes().includes('rate-edit-table-legend--y'))
  })
})
