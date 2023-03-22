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
      <img src="@/assets/home/hero.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "../ui/BaseInput.vue";
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  &::before {
    content: "";
    width: 700px;
    height: 700px;
    position: absolute;
    left: -200px;
    top: -300px;
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
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    margin-left: 100px;
  }

  &__left {
    max-width: 600px;
    h1 {
      font-weight: 600;
      font-size: 40px;
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
        width: calc(100% - 150px);
      }
    }
  }
  &__right {
    img {
      width: 100%;
      max-width: 553px;
    }
  }
}
</style>