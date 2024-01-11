<template>
  <img
    :src="getImageUrl(url)"
    alt="Avatar icon"
    :width="imgSize"
    :height="imgSize"
    :class="variant"
    loading="lazy"
  />
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  variant: string;
  url: string;
}>();

function getImageUrl(url: string) {
  return require(`@/assets/avatars/${url}`);
}

const imgSize = computed(() => {
  const maping = { sm: 30, md: 40, lg: 50 };
  return maping[props.variant as keyof typeof maping];
});
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