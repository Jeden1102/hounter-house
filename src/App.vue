<template>
  <TheNavigation />
  <div class="view">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import TheNavigation from "@/components/Layout/TheNavigation.vue";
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app {
  font-family: $font-primary;
  font-size: 16px;
  color: $font-color;
  font-weight: 500;
  overflow-x: hidden;
}
.view {
  padding-top: 100px;
}
</style>
