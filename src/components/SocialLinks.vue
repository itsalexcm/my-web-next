<template>
  <div class="social">
    <a :href="`mailto:${site.email}`" class="social-link text regular">{{ site.email }} ↗</a>
    <span class="text large">·</span>
    <a
      :href="site.linkedin"
      class="social-link text regular"
      target="_blank"
      rel="noopener noreferrer"
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
.social-link {
  color: var(--accent-secondary);
  border-bottom: 1px solid var(--accent-secondary);
  padding-bottom: var(--spacing-1x);
  &:hover {
    color: var(--text-primary);
    border-bottom-color: var(--text-primary);
  }
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
