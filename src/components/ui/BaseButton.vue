<template>
  <a
    :class="['base-btn', variant, { 'icon-first': iconFirst }]"
    v-if="url"
    :type="type"
    :href="url"
    target="_blank"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </a>
  <router-link
    :class="['base-btn', variant, { 'icon-first': iconFirst }]"
    v-if="component"
    :to="{ name: component }"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </router-link>
  <button
    :class="['base-btn', variant, { 'icon-first': iconFirst }]"
    v-if="!url && !component"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  variant?: string;
  active?: boolean;
  icon?: string;
  url?: string;
  type?: string;
  component?: string;
  iconFirst?: boolean;
}>();
</script>

<style scoped lang="scss">
.base-btn {
  all: unset;
  padding: 12px 24px;
  gap: 8px;
  border-radius: 32px;
  display: flex;
  width: fit-content;
  cursor: pointer;
  opacity: 0.95;
  transition: 0.2s;
  flex-direction: row-reverse;
  &.icon-first {
    flex-direction: row;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  &:hover {
    opacity: 1;
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