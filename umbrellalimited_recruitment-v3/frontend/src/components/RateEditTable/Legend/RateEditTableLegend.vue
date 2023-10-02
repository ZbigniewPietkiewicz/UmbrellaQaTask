<script setup lang="ts">
defineProps<{
  axis: 'x' | 'y'
  label: string
}>()
</script>

<template>
  <div class="rate-edit-table-legend" :class="`rate-edit-table-legend--${axis}`">
    <span>{{ label }}</span>
  </div>
</template>

<style lang="scss">
.rate-edit-table-legend {
  text-align: center;
  position: sticky;
  font-size: 12px;
  letter-spacing: 1px;

  color: grey;

  &--x {
    height: var(--table-legend-size);
    max-width: 100vw;
    width: 100%;
    position: sticky;
    left: 0;
    padding: 0.5rem 0;
  }
  &--y {
    width: var(--table-legend-size);
    position: absolute;
    top: 0;
    left: calc(var(--table-legend-size) * -1);
    bottom: 0;
    > span {
      writing-mode: vertical-rl;
      display: inline-block;
      text-orientation: mixed;
      transform: rotate(180deg);
      position: sticky;
      top: 0;
      height: 100%;
      max-height: 100vh;
    }
  }
}
</style>
