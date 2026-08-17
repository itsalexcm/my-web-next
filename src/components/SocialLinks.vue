<template>
  <div class="social">
    <a :href="`mailto:${site.email}`" class="text-link text regular">{{ site.email }} <span class="arrow arrow-out" aria-hidden="true"></span></a>
    <span class="text large">·</span>
    <a
      :href="site.linkedin"
      class="text-link text regular"
    >Linkedin</a>
  </div>
</template>

<script setup>
import { site } from '@/data/site.js';
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  gap: var(--spacing-4x);
  margin-top: var(--spacing-4x);
}
span {
  color: var(--accent-secondary);
}
@include mobile {
  .social {
    flex-wrap: wrap;
  }
}
</style>
