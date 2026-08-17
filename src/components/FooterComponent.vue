<template>
  <footer>
    <div class="footer-inner">
      <p class="text regular">© {{ new Date().getFullYear() }} Designed, written, and coded by <router-link to="/about" class="text regular menu-link" :class="{ selected: route.path === '/about' }">Alex Cerezo</router-link></p>
      <SocialLinks />
    </div>
  </footer>
</template>

<script setup>
import { useRoute } from 'vue-router';
import SocialLinks from './SocialLinks.vue';

const route = useRoute()
</script>

<style lang="scss" scoped>
footer {
  padding: var(--spacing-30x) var(--spacing-10x) var(--spacing-10x);
  margin: 0 auto;
  width: 100%;
  max-width: var(--width-xl);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.footer-inner {
  width: 100%;
  padding-top: var(--spacing-10x);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-link {
  color: var(--accent-secondary);
  border-bottom: 1px solid var(--accent-secondary);
  padding-bottom: var(--spacing-1x);
  &.selected {
    border-bottom-color: var(--accent-secondary);
  }
}
:deep(.social) {
  margin: 0;
}
@include mobile {
  footer {
    padding-top: var(--spacing-6x);
  }
  .footer-inner {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  :deep(.social) {
    margin-top: var(--spacing-4x);
  }
}
</style>
