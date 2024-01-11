<template>
  <div class="featured">
    <div class="image">
      <BaseBadge :variant="offer.badgeType" :icon="offer.badgeIcon" :iconFirst="true">{{ offer.badgeText }}</BaseBadge>
      <p class="description">
        {{ offer.description }}
      </p>
      <img width="488" height="416" :src="getImageUrl(offer.img)" alt="Home view" loading="lazy" />
    </div>
    <h4>{{ offer.title }}</h4>
    <p>{{ offer.price }}</p>
    <div class="person">
      <BaseAvatar :url="offer.avatarImg" variant="lg" />
      <div class="person__details">
        <p>{{ offer.name }}</p>
        <span>{{ offer.place }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseAvatar from "../ui/BaseAvatar.vue";
import BaseBadge from "../ui/BaseBadge.vue";
import { defineProps } from "vue";
import { Offer } from '../../types/intefaces';
defineProps<{
  offer: Offer;
}>();
function getImageUrl(url: string) {
  return require(`@/assets/home/${url}`);
}
</script>

<style lang="scss" scoped>
.featured {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    .image {
      img {
        filter: blur(3px) brightness(0.5);
        transition: 0.3s;
      }

      .description {
        bottom: 20px;
        transition: 0.3s;
        color: white;
      }
    }
  }

  @media (min-width: 768px) {
    margin-top: 32px;
  }

  .image {
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    width: 320px;
    height: 382px;

    .description {
      position: absolute;
      left: 0;
      transition: 0.3s;
      bottom: -300px;
      padding: 15px;
      z-index: 2;
    }

    img {
      transition: 0.3s;
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
  }
}
</style>