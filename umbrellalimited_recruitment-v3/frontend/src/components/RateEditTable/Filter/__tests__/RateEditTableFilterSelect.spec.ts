import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import RateEditTableFilterSelect from '../RateEditTableFilterSelect.vue'

describe('RateEditTable Filter Select', () => {
  const testOptions = [1, 2, 3].map((v) => ({ label: `Label ${v}`, value: `value-${v}` }))

  it('renders properly', () => {
    const testLabel = 'Select test label'
    const wrapper: any = mount(RateEditTableFilterSelect, {
      props: { options: testOptions, label: testLabel }
    })
    // label is present
    expect(wrapper.text()).toContain(testLabel)

    // all props options are present + empty option
    expect(wrapper.findAll('option').length).toBe(testOptions.length + 1)
  })

  it('updates modelValue', async () => {
    const wrapper: any = mount(RateEditTableFilterSelect, {
      props: {
        options: testOptions,
        modelValue: 'value-2',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })
    await wrapper.find('select').setValue('value-3')
    expect(wrapper.props('modelValue')).toBe('value-3')
  })

  it('emits selected option value to parent', async () => {
    const wrapper: any = mount(RateEditTableFilterSelect, {
      props: { options: testOptions }
    })

    await wrapper.find('select').setValue('value-1')
    expect(wrapper.emitted('update:modelValue')?.[0]?.[0]).toBe('value-1')
  })

  it('shows clear button if value selected', async () => {
    const wrapper: any = mount(RateEditTableFilterSelect, {
      props: {
        options: testOptions,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('select').setValue('value-1')
    expect(wrapper.find('button').exists()).toBe(true)
  })
})
