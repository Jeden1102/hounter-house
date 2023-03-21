<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/logo1.svg" alt="" />
    </router-link>
    <BaseButton :variant="'transparent'">Just a button</BaseButton>
    <router-link to="/">About us</router-link>
    <router-link to="/about">Article</router-link>
    <router-link to="/about">Property</router-link>
  </nav>
</template>

<script setup lang="ts">
import BaseButton from "../../components/ui/BaseButton.vue";
</script>

<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100px;
  padding-bottom: 100px;
}
</style>