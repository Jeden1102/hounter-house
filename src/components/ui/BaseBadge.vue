<template>
  <div :class="['base-badge', variant, { 'icon-first': iconFirst }]">
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  variant?: string;
  icon?: string;
  iconFirst?: boolean;
}>();
</script>

<style scoped lang="scss">
.base-badge {
  display: flex;
  width: fit-content;
  flex-direction: row-reverse;
  padding: 8px 16px;
  gap: 10px;
  border-radius: 32px;
  &.icon-first {
    flex-direction: row;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  &.success-light {
    background: $light-green;
    color: $secondary-green;
  }
  &.success {
    background: $primary-green;
    color: white;
  }
  &.base {
    background: white;
    color: #888b97;
  }
  &.transparent {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
  }
  &.primary {
    color: #1d4ed8;
    background: #dbeafe;
  }
  &.error {
    background: #fee2e2;
    color: #ef4444;
  }
}
</style>