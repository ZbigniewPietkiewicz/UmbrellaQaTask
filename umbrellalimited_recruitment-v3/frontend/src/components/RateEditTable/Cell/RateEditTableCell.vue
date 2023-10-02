<script setup lang="ts">
import type { RateResourceInterface } from '@/@interfaces/RateResourceInterface'

import RateEditTableLoader from '@/components/RateEditTable/Loader/RateEditTableLoader.vue'
import { useRateForm } from '@/composable/RateForm'
import { computed } from 'vue'

const props = defineProps<{
  rate?: RateResourceInterface
}>()
defineEmits<{
  (e: 'editing', value: boolean): void
}>()

const { rateValue, isSaving, isSuccess, isError, isRateValid, onSubmit } = useRateForm(props.rate)

const maxLength = computed(() => {
  const dotIndex = rateValue.value.toString().indexOf('.')
  if (dotIndex < 0) {
    return 3
  }
  return (rateValue.value.toString().indexOf('.') || 0) + 3
})
</script>

<template>
  <div class="rate-edit-table-cell">
    <input
      v-if="rate"
      v-model="rateValue"
      @focus="(e) => {
        (e.target as HTMLInputElement)?.select();
        $emit('editing', true)
      }"
      :class="{ invalid: !isRateValid, success: isSuccess, error: isError }"
      :maxlength="maxLength"
      @keydown.enter="onSubmit"
      @keydown.esc="(e) => (e.target as HTMLInputElement)?.blur()"
      @blur="
        () => {
          onSubmit()
          $emit('editing', false)
        }
      "
      :disabled="isSaving"
    />
    <RateEditTableLoader v-if="isSaving" />
  </div>
</template>

<style lang="scss">
.rate-edit-table-cell {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  &:empty {
    background-color: #dadada;
    cursor: no-drop;
  }

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid transparent;
    outline: none;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.4s background-color;

    &:focus {
      background-color: lightblue;
    }

    &.invalid {
      border-color: red;
    }
    &.success {
      background-color: #c4e8c4;
    }
    &.error {
      background-color: red;
      color: white;
    }
  }
}
</style>
