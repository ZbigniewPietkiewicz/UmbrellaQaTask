<script setup lang="ts">
import RateEditTable from '@/components/RateEditTable/RateEditTable.vue'
</script>

<template>
  <main>
    <RateEditTable x-legend-label="Kraj docelowy" y-legend-label="Kraj źródłowy" />
  </main>
</template>

<style lang="scss">
main {
  padding: 1rem;
}
#app {
  @media (max-width: 1024px) {
    overflow: auto;
    height: 100vh;
  }
}
</style>
