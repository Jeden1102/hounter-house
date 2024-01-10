<template>
  <a
    :class="[
      'base-btn',
      variant,
      { 'icon-first': iconFirst },
      { 'icon-only': iconOnly },
    ]"
    v-if="url"
    :type="type"
    :href="url"
    :target="target ? target : '_blank'"
    @click="emitClick"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </a>
  <router-link
    :class="[
      'base-btn',
      variant,
      { 'icon-first': iconFirst },
      { 'icon-only': iconOnly },
    ]"
    v-if="component"
    :to="{ name: component }"
    @click="emitClick"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </router-link>
  <button
    :class="[
      'base-btn',
      variant,
      { 'icon-first': iconFirst },
      { 'icon-only': iconOnly },
    ]"
    v-if="!url && !component"
    @click="emitClick"
  >
    <font-awesome-icon :icon="icon" />
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{
  variant?: string;
  active?: boolean;
  icon?: string;
  url?: string;
  type?: string;
  component?: string;
  iconFirst?: boolean;
  iconOnly?: boolean;
  target?: string;
}>();

const emits = defineEmits(["button-click"]);

const emitClick = () => {
  emits("button-click");
};
</script>

<style scoped lang="scss">
.base-btn {
  all: unset;
  padding: 12px 24px;
  gap: 8px;
  border-radius: 32px;
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  opacity: 0.95;
  transition: 0.2s;
  flex-direction: row-reverse;
  width: fit-content;
  height: fit-content;

  &.icon-first {
    flex-direction: row;
  }
  &.icon-only {
    gap: 0;
  }
  svg {
    width: 16px;
    height: 16px;
  }
  &:hover {
    opacity: 1;
    transform: translateY(-2px);
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
    border: 1px solid rgba(136, 139, 151, 0.4);
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