<template>
  <div class="base-input__wrapper">
    <input type="text" placeholder="Search a place!" />
    <BaseButton url="#" :variant="'success'" :icon="'fa-solid fa-chevron-right'" :iconFirst="false" target="_self">Search
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>

<style scoped lang="scss" >
.base-input {
  &__wrapper {
    position: relative;
    width: fit-content;

    ::v-deep .base-btn {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translate(0, -50%);
      height: 24px;
    }

    input {
      padding: 4px 150px 4px 24px;
      background: #ffffff;
      height: 56px;
      border: 1px solid #e0e3eb;
      border-radius: 32px;

      &::placeholder {
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 22px;
        color: #888b97;
      }
    }
  }
}
</style>