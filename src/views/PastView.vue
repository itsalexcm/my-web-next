<template>
  <LayoutComponent>
    <div class="past-work">
      <div class="past-top">
        <div class="about-content">
          <h1 class="hero-heading">Past work</h1>
          <div class="past-overview">
            <p class="text hero">
              Some other design samples I’ve contributed to over the last decade, including landing pages, UI components, and other visual work.
            </p>
          </div>
        </div>
      </div>
      <div class="past-content">
        <img
          v-for="(image, index) in pastWork"
          :key="image.src"
          :src="image.src"
          :alt="image.alt"
          :loading="index === 0 ? 'eager' : 'lazy'"
          decoding="async"
        >
      </div>
    </div>
  </LayoutComponent>
</template>

<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
import { pastWork } from '@/data/site.js'
</script>

<style lang="scss" scoped>
.past-work {
  display: block;
}
.past-top {
  max-width: var(--width-md);
  text-align: center;
  margin: 0 auto var(--spacing-30x) auto;
}
.past-overview {
  margin-top: var(--spacing-10x);
}
.past-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20x);
  margin-bottom: 0;
  overflow: hidden;
  transition: background-color .3s ease;
}
</style>
