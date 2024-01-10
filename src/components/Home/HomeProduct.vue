<template>
  <div class="container-wide home-product">
    <div class="home-product__details">
      <BaseHeading variant="secondary">Ready to sell</BaseHeading>
      <BaseHeading variant="primary">Let’s tour and see our house!</BaseHeading>
      <h4>
        Houses recommended by our partners that have been curated to become the
        home of your dreams!
      </h4>
      <h5>House details</h5>
      <div class="details">
        <div class="detail">
          <font-awesome-icon icon="fa-solid fa-bed" />
          <span>4 Bedrooms</span>
        </div>
        <div class="detail">
          <font-awesome-icon icon="fa-solid fa-bath" />
          <span>2 Bathrooms</span>
        </div>
        <div class="detail">
          <font-awesome-icon icon="fa-solid fa-car-side" />
          <span>1 Carpoort</span>
        </div>
        <div class="detail">
          <font-awesome-icon icon="fa-solid fa-stairs" />
          <span>2 Floors</span>
        </div>
      </div>
      <div class="seller">
        <BaseAvatar variant="lg" url="profile1.jpg" />
        <div class="seller__info">
          <h6>Janko Chanowski</h6>
          <p>Building manager</p>
        </div>
        <BaseButton variant="success">Contact now</BaseButton>
      </div>
    </div>
    <div class="home-product__gallery">
      <Carousel id="gallery" :items-to-show="1" v-model="currentSlide" :wrapAround="false" :transition="500" :gap="20">
        <Slide v-for="slide in slides" :key="slide">
          <div class="carousel__item">
            <template v-if="checkExtension(slide) === 'jpg'">
              <img :src="getImageUrl(slide)" alt="" />
            </template>
            <template v-else>
              <video height="416" autoplay muted loop>
                <source :src="getImageUrl(slide)" type="video/mp4" />
              </video>
            </template>
          </div>
        </Slide>
      </Carousel>

      <Carousel id="thumbnails" :items-to-show="3" v-model="currentSlide" ref="carousel" :wrapAround="true"
        :transition="500" :gap="20">
        <Slide v-for="(slide, idx) in slides" :key="slide">
          <div class="carousel__item" @click="slideTo(idx)">
            <template v-if="checkExtension(slide) === 'jpg'">
              <img :src="getImageUrl(slide)" alt="" />
            </template>
            <template v-else>
              <div class="video-container">
                <img :src="getImageUrl('home-product-video.png')" alt="">
                <span><font-awesome-icon icon="fa-solid fa-video" /></span>
              </div>
            </template>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import BaseHeading from "../ui/BaseHeading.vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseAvatar from "../ui/BaseAvatar.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import { ref } from "vue";
const slides = [
  "home-product-0.mp4",
  "home-product-1.jpg",
  "home-product-2.jpg",
  "home-product-3.jpg",
  "home-product-4.jpg",
  "home-product-5.jpg",
  "home-product-6.jpg",
];
function checkExtension(url: string) {
  return url.split(".")[1];
}
function getImageUrl(url: string) {
  return require(`@/assets/home/${url}`);
}
const currentSlide = ref(0);
function slideTo(val: number) {
  currentSlide.value = val;
}
</script>
  
<style scoped lang="scss">
.home-product {
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &__details {
    h4 {
      font-size: 16px;
      line-height: 28px;
      color: #626687;
      font-weight: 400;
      opacity: 0.75;
      margin: 20px 0;
    }

    h5 {
      font-size: 18px;
    }

    .details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      max-width: 440px;
      margin: 16px 0;

      .detail {
        display: flex;
        gap: 12px;

        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          text-transform: capitalize;
          color: #3c4563;
        }
      }
    }

    .seller {
      border-top: 1px solid rgb(204, 204, 204);
      display: flex;
      gap: 16px;
      flex-direction: column;
      padding-top: 8px;

      @media(min-width:768px) {
        flex-direction: row;
        padding-top: 32px;
        align-items: center;
      }

      &__info {
        h6 {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #0e1735;
        }
      }
    }
  }

  &__gallery {
    max-width: 500px;

    .carousel__slide {
      border: 6px solid transparent;
    }

    #gallery {
      .carousel__item {
        img {
          height: 416px;
          width: 100%;
        }

      }
    }

    #thumbnails {
      .carousel__item {
        width: 100%;
        height: 100%;
        margin: 12px 0;

        .video-container {
          position: relative;
          height: 100%;

          span {
            display: grid;
            place-content: center;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 36px;
            height: 36px;
            background-color: rgba(255, 255, 255, .5);
            border-radius: 4px;

            svg {
              path {
                fill: white;
              }
            }
          }
        }

        button {
          width: 100%;
          height: 100%;
          background: none;
          border: none;
          outline: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 16px;
          font-size: 1.3rem;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      .carousel__slide {
        &--active {
          border: 2px solid $font-color;
        }
      }
    }
  }
}
</style>