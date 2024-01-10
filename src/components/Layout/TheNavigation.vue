<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/logo1.svg" alt="" />
    </router-link>
    <div class="nav-links">
      <button
        :class="[{ active: mobileMenuShow }, 'toggle']"
        @click="toggleMenu"
        v-if="windowWidth < 992"
      >
        <span>Explore</span>
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </button>
      <Transition name="fade">
        <div
          :class="[
            { 'nav-links--links--mobile': windowWidth < 992 },
            'nav-links--links',
          ]"
          v-if="mobileMenuShow || windowWidth > 992"
        >
          <BaseButton component="home" variant="transparent"
            >About us</BaseButton
          >
          <div class="relative">
            <button
              :class="[{ active: menuExpand }, 'menu-expand']"
              @click="expandMenu"
            >
              <span>Property</span>
              <font-awesome-icon icon="fa-solid fa-chevron-down" />
            </button>
            <Transition name="fade">
              <div v-if="menuExpand" class="submenu">
                <BaseButton component="home" variant="transparent"
                  >House</BaseButton
                >
                <BaseButton component="home" variant="transparent"
                  >Apartaments</BaseButton
                >
              </div>
            </Transition>
          </div>

          <BaseButton component="home" variant="transparent"
            >Contact</BaseButton
          >
          <BaseButton component="home" variant="success-light"
            >Sign up!</BaseButton
          >
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import BaseButton from "../../components/ui/BaseButton.vue";
let mobileMenuShow = ref(false || window.innerWidth > 992);
let menuExpand = ref(false);
let windowWidth = ref(window.innerWidth);
function toggleMenu() {
  mobileMenuShow.value = !mobileMenuShow.value;
}
function watchWindowWidth() {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
}
onMounted(() => {
  watchWindowWidth();
});
function expandMenu() {
  menuExpand.value = !menuExpand.value;
}
</script>

<style lang="scss" scoped>
nav {
  height: fit-content;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  height: 60px;
  padding: 15px 20px;
  max-width: 100vw;
  position: relative;
  z-index: 999;
  @media (min-width: 992px) {
    background: unset;
    justify-content: space-between;
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
      &--mobile {
        position: absolute;
        left: -120px;
        top: 40px;
        background: $font-color;
        flex-direction: column;
      }
      gap: 8px;

      display: flex;
      width: 150%;
      padding: 30px;
      border-radius: 15px;
      margin-right: 50px;
      .submenu {
        display: flex;
        gap: 8px;
        flex-direction: column;
        margin: 15px 0 0 15px;
        background: $font-color;
        padding: 15px;
        @media (min-width: 992px) {
          position: absolute;
          border-radius: 10px;
        }
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
        &.active {
          transition: 0.2s;
          svg {
            transition: 0.2s;
            transform: rotate(180deg);
          }
        }
        svg {
          transition: 0.2s;
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