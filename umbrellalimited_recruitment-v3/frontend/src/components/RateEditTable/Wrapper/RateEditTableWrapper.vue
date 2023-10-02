<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

defineProps<{
  source: string[]
  destination: string[]
}>()

const xy: Ref<{ x: number; y: number }> = ref({ x: -1, y: -1 })
const locked: Ref<{ x: number; y: number } | null> = ref(null)

function setLock(value: boolean) {
  locked.value = value ? { x: xy.value.x, y: xy.value.y } : null
}
</script>
<template>
  <div class="rate-edit-table">
    <div class="rate-edit-table-wrapper">
      <slot />

      <table>
        <caption>
          <slot name="filter" />
          <slot name="legend" />
        </caption>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th
              v-for="(th, hIndex) in destination"
              :key="th"
              :class="{ active: locked ? locked.x === hIndex : xy.x === hIndex }"
            >
              {{ th }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, yIndex) in source"
            :key="row"
            @mouseenter="xy.y = yIndex"
            @mouseleave="xy.y = -1"
          >
            <th :class="{ active: locked ? locked.y === yIndex : xy.y === yIndex }">
              {{ row }}
            </th>
            <td
              v-for="(column, xIndex) in destination"
              :key="`${row}.${column}`"
              @mouseenter="xy.x = xIndex"
              @mouseleave="xy.x = -1"
              :class="{
                active: locked
                  ? (locked.x === xIndex && yIndex < locked.y) ||
                    (locked.y === yIndex && xIndex < locked.x)
                  : (xy.x === xIndex && yIndex < xy.y) || (xy.y === yIndex && xIndex < xy.x)
              }"
            >
              <slot name="cell" v-bind="{ row, column, setLock }" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
.rate-edit-table {
  position: relative;

  &-wrapper {
    padding-left: var(--table-legend-size);
  }

  table {
    position: relative;
    border: none;
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    z-index: 2;
    align-self: flex-start;

    caption {
      text-align: left;
    }
    th {
      font-weight: bold;
    }
    td,
    th {
      width: 60px;
      min-width: 60px;
      max-width: 60px;
      height: 60px;
      text-align: center;
      vertical-align: middle;
      position: relative;
      border: 1px solid lightgrey;
      z-index: 3;
      &.active {
        background-color: #f4f4f4;
      }
    }

    thead {
      tr {
        th {
          background-color: white;
          position: sticky;
          top: 0;
          z-index: 3;

          &.active {
            background-color: #ddd;
          }

          &:first-child {
            z-index: 5;
            left: -1px;
          }
        }
      }
    }
    tbody {
      tr {
        th:first-child {
          position: sticky;
          left: -1px;
          background-color: white;
          z-index: 2;
          &.active {
            background-color: #ddd;
          }
        }

        td {
          position: relative;
          background-color: white;
          z-index: 1;
          &:hover {
            background-color: lightgrey;
          }
        }
      }
    }
  }
}
</style>
