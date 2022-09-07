<template>
  <div class="index">
    <button @click="toggle()">toggle</button>
  </div>
</template>

<script setup>
import { useToggle, useDark } from '@vueuse/core';

const isDark = useDark();
const toggle = useToggle(isDark);
</script>

<style lang="scss">
.index {
  @include flex-center;
  height: calc(100% - 80px);
}
</style>
