<script setup lang="ts"></script>

<template>
  <div class="rate-edit-table-loader--overlay">
    <div class="rate-edit-table-loader" />
  </div>
</template>

<style scoped lang="scss">
.rate-edit-table-loader {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: relative;
  transform: scale(0.5);

  &:after {
    content: ' ';
    display: block;
    margin: 8px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 6px solid lightgrey;
    border-color: lightgrey transparent lightgrey transparent;
    animation: rate-edit-table-loader 1.2s linear infinite;
  }

  &--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.7);
  }
}
@keyframes rate-edit-table-loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
