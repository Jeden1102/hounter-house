<template>
  <TheNavigation />
  <router-view />
</template>
<script setup lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app {
  font-family: $font-primary;
  font-size: 20px;
  background: rgb(37, 37, 37);
  color: $font-color;
  font-weight: 500;
}
</style>
