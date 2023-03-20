<template>
  <div class="home">
    <BaseButton
      :url="'https://google/com'"
      :variant="'primary'"
      :icon="'fa-solid fa-house'"
      :iconFirst="true"
      >Outer Link</BaseButton
    >
    <BaseButton :component="'about'" :variant="'success'"
      >Inner Link</BaseButton
    >
    <BaseButton :component="'about'" :variant="'error'">Inner Link</BaseButton>
    <BaseButton :variant="'transparent'">Just a button</BaseButton>
    <BaseBadge :variant="'primary'">Test Badge</BaseBadge>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/ui/BaseButton.vue";
import BaseBadge from "../components/ui/BaseBadge.vue";
</script>
