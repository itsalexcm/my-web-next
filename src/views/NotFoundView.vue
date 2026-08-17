<template>
  <LayoutComponent>
    <div class="not-found">
      <h1 class="hero-heading">Page not found</h1>
      <p class="text hero">That page doesn’t exist. Head back to work or about.</p>
      <router-link to="/" class="btn-pill text regular">← Back to work</router-link>
    </div>
  </LayoutComponent>
</template>

<script setup>
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>

<style lang="scss" scoped>
.not-found {
  max-width: var(--width-md);
  margin: 0 auto;
  text-align: center;

  p {
    margin: var(--spacing-10x) 0 var(--spacing-8x);
  }
}
</style>
