<template>
  <div class="home">
    <HomeHero />
    <HomeFeatured />
    <HomeProduct />
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
