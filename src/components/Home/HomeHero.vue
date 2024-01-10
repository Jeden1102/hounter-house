<template>
  <div class="hero">
    <div class="hero__left">
      <h1>Find the place to live <span>your dreams</span> easily here</h1>
      <p>
        Everything you need about finding your place to live will be here, where
        it will be easier for you
      </p>
      <BaseInput />
    </div>
    <div class="hero__right">
      <img
        rel="preload"
        class="hero__right--img"
        src="@/assets/home/hero.webp"
        alt="White building with sky cloud background."
        width="553"
        height="520"
      />
      <div class="carousel">
        <carousel
          :breakpoints="breakpoints"
          ref="myCarousel"
          :items-to-show="1.5"
          :wrapAround="true"
          :transition="500"
        >
          <slide class="carousel__slide">
            <div class="images">
              <BaseAvatar url="profile1.jpg" variant="lg" />
            </div>
            <div class="description">
              <h6>1K+ People</h6>
              <p>Successfully Getting Home</p>
            </div>
          </slide>
          <slide class="carousel__slide">
            <div class="images">
              <BaseAvatar url="house.png" variant="lg" />
            </div>
            <div class="description">
              <h6>56 houses</h6>
              <p>Sold already</p>
            </div>
          </slide>
          <slide class="carousel__slide">
            <div class="images">
              <BaseAvatar url="profile2.jpg" variant="lg" />
            </div>
            <div class="description">
              <h6>4mln users</h6>
              <p>On our platform</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable */
import BaseInput from "../ui/BaseInput.vue";
import BaseAvatar from "../ui/BaseAvatar.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { onMounted, ref } from "vue";
const myCarousel = ref(null);
const breakpoints = {
  1024: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
};
onMounted(() => {
  setTimeout(() => {
    // Carousel display fix workaround.
    window.dispatchEvent(new Event("resize"));
  }, 1000);
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  padding: 0 20px;
  margin-top: -100px;
  &::before {
    content: "";
    width: 900px;
    height: 900px;
    position: absolute;
    left: -500px;
    top: -500px;
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    background: #dffdff;
    background: -webkit-linear-gradient(top left, #dffdff, #e0fff4);
    background: -moz-linear-gradient(top left, #dffdff, #e0fff4);
    background: linear-gradient(to bottom right, #dffdff, #e0fff4);
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    margin-left: 100px;
  }
  @media (min-width: 1200px) {
    margin-left: 200px;
  }

  &__left {
    max-width: 600px;
    h1 {
      font-weight: 600;
      font-size: 2.5rem;
      line-height: 50px;
      text-transform: capitalize;
      span {
        color: white;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
          1px 1px 0 #000;
      }
    }
    p {
      line-height: 28px;
      color: #626687;
      opacity: 0.75;
      margin: 32px 0;
    }
    ::v-deep .base-input__wrapper {
      width: 100%;
      input {
        width: calc(100% - 160px);
      }
    }
  }
  &__right {
    position: relative;
    .carousel {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      margin-bottom: 16px;
      &__slide {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 24px;
        gap: 16px;
        background: #ffffff;
        box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
        border-radius: 32px;
        margin: 0 6px;
        .description {
          h6 {
            font-weight: 600;
            font-size: 1rem;
            line-height: 24px;
            color: #1b1c57;
          }
          p {
            font-size: 0.75rem;
            line-height: 20px;
            color: #68799f;
          }
        }
      }
    }

    @media (min-width: 992px) {
      transform: translate(20px, -100px);
    }
    &--img {
      max-width: 553px;
      z-index: -1;
      @media (min-width: 992px) {
        max-width: unset;
        min-width: 553px;
        min-height: 700px;
        width: 100%;
      }
    }
  }
}
</style>