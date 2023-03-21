<template>
  <img :src="getImageUrl(url)" alt="" :class="variant" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";

function getImageUrl(url: string) {
  return require(`@/assets/avatars/${url}`);
}
const props = defineProps<{
  variant?: string;
  url: string;
}>();
</script>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  &.sm {
    width: 30px;
    height: 30px;
  }
  &.md {
    width: 40px;
    height: 40px;
  }
  &.lg {
    width: 50px;
    height: 50px;
  }
}
</style>