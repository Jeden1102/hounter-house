<template>
  <div class="home">
    <BaseButton :url="'https://google/com'" :variant="'primary'"
      >Outer Link</BaseButton
    >
    <BaseButton :component="'about'" :variant="'success'"
      >Inner Link</BaseButton
    >
    <BaseButton :component="'about'" :variant="'error'">Inner Link</BaseButton>
    <BaseButton :variant="'transparent'">Just a button</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/ui/BaseButton.vue";
</script>
