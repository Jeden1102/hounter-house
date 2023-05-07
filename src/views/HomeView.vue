<template>
  <div class="home">
    <HomeHero />
    <HomeFeatured />
    <HomeProduct />
    <!--
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
    <BaseHeading :variant="'primary'">Our recommendation</BaseHeading>
    <BaseHeading :variant="'secondary'">Feature house</BaseHeading>
    <BaseAvatar :variant="'sm'" :url="'profile1.jpg'" />
    <BaseInput />
    -->
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/ui/BaseButton.vue";
import BaseBadge from "../components/ui/BaseBadge.vue";
import BaseHeading from "../components/ui/BaseHeading.vue";
import BaseAvatar from "../components/ui/BaseAvatar.vue";
import BaseInput from "../components/ui/BaseInput.vue";
import HomeHero from "../components/Home/HomeHero.vue";
import HomeFeatured from "../components/Home/HomeFeatured.vue";
import HomeProduct from "../components/Home/HomeProduct.vue";
</script>
