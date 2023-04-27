<template>
  <div class="featured">
    <div class="image">
      <BaseBadge :variant="'error'" :icon="'fa-solid fa-fire'" :iconFirst="true"
        >Popular</BaseBadge
      >
      <img src="../../assets/home/home-featured-1.png" alt="" />
    </div>
    <h4>Roselands House</h4>
    <p>35.0000.000$</p>
    <div class="person">
      <BaseAvatar url="profile1.jpg" variant="lg" />
      <div class="person__details">
        <p>Diana Rosell</p>
        <span>Oklahoma, Minessota</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseAvatar from "../ui/BaseAvatar.vue";
import BaseBadge from "../ui/BaseBadge.vue";
</script>

<style lang="scss" scoped>
.featured {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    margin-top: 32px;
  }
  .image {
    position: relative;
    img {
      margin-bottom: 16px;
    }
    .base-badge {
      position: absolute;
      left: 15px;
      bottom: 30px;
    }
  }

  h4 {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #0e1735;
  }
  p {
    font-weight: 300;
  }
  .person {
    display: flex;
    align-items: center;
    gap: 12px;
    &__details {
    }
  }
}
</style>