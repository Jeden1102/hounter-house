<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/logo1.svg" alt="" />
    </router-link>
    <div class="nav-links">
      <button
        :class="[{ active: mobileMenuShow }, 'toggle']"
        @click="toggleMenu"
      >
        <span>Explore</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </button>
      <Transition name="fade">
        <div class="nav-links--links" v-if="mobileMenuShow">
          <BaseButton component="home" variant="transparent"
            >About us</BaseButton
          >
          <BaseButton component="home" variant="transparent"
            >Article</BaseButton
          >
          <button
            :class="[{ active: menuExpand }, 'menu-expand']"
            @click="expandMenu"
          >
            <span>Property</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </button>
          <div v-if="menuExpand" class="submenu">
            <BaseButton component="home" variant="transparent"
              >House</BaseButton
            >
            <BaseButton component="home" variant="transparent"
              >Apartaments</BaseButton
            >
          </div>
          <BaseButton component="home" variant="transparent"
            >Contact</BaseButton
          >
          <BaseButton component="home" variant="success">Sign up!</BaseButton>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "../../components/ui/BaseButton.vue";
let mobileMenuShow = ref(false);
let menuExpand = ref(false);
function toggleMenu() {
  mobileMenuShow.value = !mobileMenuShow.value;
}
function expandMenu() {
  menuExpand.value = !menuExpand.value;
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: fit-content;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  height: 60px;
  padding: 0 20px;
  @media (min-width: 992px) {
    background: unset;
  }
  .toggle {
    all: unset;
    padding: 6px 12px;
    border: 1px solid $font-color;
    border-radius: 20px;
    display: flex;
    gap: 7px;
    svg {
      transition: 0.3s;
    }
    &.active {
      svg {
        transition: 0.3s;
        transform: rotate(180deg);
      }
    }
  }
  .nav-links {
    position: relative;
    &--links {
      gap: 8px;
      position: absolute;
      left: -120px;
      top: 40px;
      display: flex;
      flex-direction: column;
      background: $font-color;
      width: 150%;
      padding: 30px;
      border-radius: 15px;
      .submenu {
        display: flex;
        gap: 8px;
        margin-left: 15px;
        flex-direction: column;
      }
      .menu-expand {
        all: unset;
        border: 1px solid rgba(255, 255, 255, 0.3);
        background: rgba(255, 255, 255, 0.1);
        padding: 12px 24px;
        gap: 8px;
        border-radius: 32px;
        display: flex;
        width: -moz-fit-content;
        width: fit-content;
        align-items: center;
        cursor: pointer;
        transition: 0.2s;
        svg {
          color: white;
        }
        span {
          color: white;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>