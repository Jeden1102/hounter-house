<template>
  <div class="container-wide home-featured">
    <BaseHeading :variant="'secondary'">Our recommendation</BaseHeading>
    <div class="home-featured__heading">
      <BaseHeading :variant="'primary'">Featured house</BaseHeading>
      <div class="categories">
        <BaseButton
          :variant="getButtonVariant('House')"
          :icon="'fa-solid fa-house'"
          :iconFirst="true"
          @button-click="activeCategory = 'House'"
          >House</BaseButton
        >
        <BaseButton
          :variant="getButtonVariant('Villa')"
          :icon="'fa-solid fa-landmark'"
          :iconFirst="true"
          @button-click="activeCategory = 'Villa'"
          >Villa</BaseButton
        >
        <BaseButton
          :variant="getButtonVariant('Apartment')"
          :icon="'fa-solid fa-building'"
          :iconFirst="true"
          @button-click="activeCategory = 'Apartment'"
          >Apartment</BaseButton
        >
      </div>
      <div class="slide-actions">
        <BaseButton
          :variant="'success'"
          :icon="'fa-solid fa-chevron-left'"
          :iconFirst="true"
          :iconOnly="true"
          @button-click="changeSlide(0)"
        ></BaseButton>
        <BaseButton
          :variant="'success'"
          :icon="'fa-solid fa-chevron-right'"
          :iconFirst="true"
          :iconOnly="true"
          @button-click="changeSlide(1)"
        ></BaseButton>
      </div>
    </div>
    <div class="home-featured__slide">
      <div class="carousel">
        <carousel
          :breakpoints="breakpoints"
          ref="featuredCarousel"
          :items-to-show="1"
          :wrapAround="true"
          :transition="500"
          :gap="20"
        >
          <slide
            v-for="offer in filteredOffers"
            :key="offer"
            class="carousel__slide"
          >
            <HomeFeaturedSlide :offer="offer" />
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseHeading from "../ui/BaseHeading.vue";
import BaseButton from "../ui/BaseButton.vue";
import HomeFeaturedSlide from "./HomeFeaturedSlide.vue";
import { ref, computed, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import axios from "axios";
const featuredCarousel = ref(null);
const breakpoints = {
  1400: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 2,
    snapAlign: "start",
  },
};
const offers = ref([]);

const filteredOffers = computed(() => {
  if (activeCategory.value === "") return offers.value;
  return offers.value.filter(
    (offer) => offer.category === activeCategory.value
  );
});
const activeCategory = ref("");
function getButtonVariant(variant: string) {
  if (variant === activeCategory.value) {
    return "success-light";
  }
  return "base";
}
function changeSlide(direction: number) {
  if (featuredCarousel.value) {
    if (direction) {
      featuredCarousel.value.next();
    } else {
      featuredCarousel.value.prev();
    }
  }
}
onMounted(() => {
  axios
    .get("/offers.json")
    .then((res) => {
      offers.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scoped lang="scss">
.home-featured {
  margin-top: 40px;
  &__heading {
    display: flex;
    flex-direction: column;
    gap: 12px;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    .categories {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .slide-actions {
      display: flex;
      gap: 12px;
    }
  }
}
</style>