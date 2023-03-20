<template>
  <TheNavigation />
  <router-view />
</template>
<script setup lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
.container-wide {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 10px 0;
  @media (min-width: 768px) {
    width: calc(90% - 20px);
    padding: 40px 0;
  }
  @media (min-width: 1024px) {
    width: calc(80% - 20px);
  }
  @media (min-width: 1400px) {
    width: calc(80% - 20px);
    padding: 40px 0;
    max-width: 1400px;
  }
}
.container {
  width: calc(100% - 20px);
  margin: 0 auto;
  padding: 10px 0;
  @media (min-width: 768px) {
    width: calc(80% - 20px);
    padding: 40px 0;
  }
  @media (min-width: 1024px) {
    width: calc(70% - 20px);
  }
  @media (min-width: 1400px) {
    width: calc(70% - 20px);
    padding: 40px 0;
    max-width: 1200px;
  }
}
#app {
  font-family: "Cormorant Garamond", serif;
  font-size: 20px;
}
</style>
