<template>
  <a
    :class="['base-btn', variant]"
    v-if="url"
    :type="type"
    :href="url"
    target="_blank"
  >
    <slot></slot>
  </a>
  <router-link
    :class="['base-btn', variant]"
    v-if="component"
    :to="{ name: component }"
  >
    <slot></slot>
  </router-link>
  <button :class="['base-btn', variant]" v-if="!url && !component">
    <slot></slot>
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
}>();
</script>

<style scoped lang="scss">
.base-btn {
  all: unset;
  padding: 10px 20px;
  border-radius: 32px;
  background: #d1fae5;
  color: #047857;
  font-weight: bold;
}
</style>