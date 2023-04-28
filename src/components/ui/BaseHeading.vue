<template>
  <p :class="variant"><slot></slot></p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  variant?: string;
}>();
</script>

<style scoped lang="scss">
.primary {
  font-weight: 600;
  font-size: 2rem;
  line-height: 40px;
  /* identical to box height */
  color: #1b1c57;
  text-transform: capitalize;
}
.secondary {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 18px;
  text-transform: capitalize;
  color: #f59e0b;
  position: relative;
  padding-left: 30px;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 24px;
    height: 2px;
    background: #f59e0b;
  }
}
</style>