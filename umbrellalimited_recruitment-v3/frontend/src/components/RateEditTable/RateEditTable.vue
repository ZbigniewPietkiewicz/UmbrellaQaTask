<script setup lang="ts">
import RateEditTableFilter from '@/components/RateEditTable/Filter/RateEditTableFilter.vue'
import RateEditTableFilterSelect from '@/components/RateEditTable/Filter/RateEditTableFilterSelect.vue'
import RateEditTableWrapper from '@/components/RateEditTable/Wrapper/RateEditTableWrapper.vue'
import RateEditTableLegend from '@/components/RateEditTable/Legend/RateEditTableLegend.vue'
import { useRateResource } from '@/composable/RateResource'
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import RateEditTableCell from '@/components/RateEditTable/Cell/RateEditTableCell.vue'

defineProps<{
  xLegendLabel?: string
  yLegendLabel?: string
}>()

const { countries, isLoading, error, getRate } = useRateResource()
const options = computed(() => countries.value?.map((v) => ({ label: v, value: v })) || [])
const filter: Ref<{ source: string; destination: string }> = ref({ source: '', destination: '' })
const sourceCountries = computed(
  () => countries.value?.filter((c) => !filter.value.source || c == filter.value.source) || []
)
const destinationCountries = computed(
  () =>
    countries.value?.filter((c) => !filter.value.destination || c == filter.value.destination) || []
)
</script>

<template>
  <div v-if="error">{{ error }}</div>

  <div v-else-if="isLoading" style="text-align: center">Wczytywanie...</div>

  <RateEditTableWrapper v-else :source="sourceCountries" :destination="destinationCountries">
    <template #filter>
      <RateEditTableFilter>
        <RateEditTableFilterSelect
          :label="yLegendLabel"
          :options="options"
          v-model="filter.source"
        />
        <RateEditTableFilterSelect
          :label="xLegendLabel"
          :options="options"
          v-model="filter.destination"
        />
      </RateEditTableFilter>
    </template>
    <template #legend>
      <RateEditTableLegend v-if="xLegendLabel" :label="xLegendLabel" axis="x" />
      <RateEditTableLegend v-if="yLegendLabel" :label="yLegendLabel" axis="y" />
    </template>

    <template #cell="{ column, row, setLock }">
      <RateEditTableCell :rate="getRate(row, column)" @editing="(value) => setLock(value)" />
    </template>
  </RateEditTableWrapper>
</template>
