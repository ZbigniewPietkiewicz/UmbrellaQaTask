<script setup lang="ts">
import type { SelectOptionType } from '@/@types/SelectOptionType'

defineProps<{
  label?: string
  options: SelectOptionType[]
  modelValue?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'select', value: string): void
}>()
</script>

<template>
  <label>
    <span v-if="label">{{ label }}</span>
    <select
      :value="modelValue"
      @change="(e:Event) => {
        $emit('update:modelValue', (e.target as HTMLSelectElement)?.value)
        $emit('select', (e.target as HTMLSelectElement)?.value)
      }"
    >
      <option value="" />
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </select>
    <button
      v-if="!!modelValue"
      @click.prevent="
        () => {
          $emit('update:modelValue', '')
          $emit('select', '')
        }
      "
    >
      &times;
    </button>
  </label>
</template>
