<script setup lang="ts"></script>

<template>
  <div class="rate-edit-table-filter">
    <div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.rate-edit-table-filter {
  position: sticky;
  left: 1rem;
  height: 60px;
  display: inline-block;

  > div {
    position: absolute;
    left: 0;
    width: 300px;
    display: inline-flex;
    gap: 1rem;
  }

  label {
    display: block;
    white-space: nowrap;

    > span {
      display: block;
      font-size: 12px;
    }
  }
  select {
    border: 1px solid lightgrey;
    padding: 0.5rem 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: 0;
    box-shadow: none;
    outline: none;
    font-size: 16px;
    margin-left: 0.25rem;
    cursor: pointer;
  }
}
</style>
