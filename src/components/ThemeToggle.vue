<template>
  <button
    type="button"
    class="toggle"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <svg v-if="theme === 'dark'" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="var(--text-primary)"/>
      <path d="M12 5V3" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 21V19" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M16.9498 7.05093L18.364 5.63672" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M5.63608 18.3634L7.05029 16.9492" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M19 12L21 12" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M3 12L5 12" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M16.9498 16.9491L18.364 18.3633" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
      <path d="M5.63608 5.63657L7.05029 7.05078" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 4V4C15.2931 4 15.4397 4 15.5799 4.04196C16.1934 4.22551 16.4787 4.931 16.1653 5.48943C16.0937 5.61708 15.8753 5.82826 15.4386 6.25062C13.935 7.70471 13 9.74291 13 12C13 14.2569 13.9349 16.2945 15.4384 17.7483C15.8759 18.1714 16.0947 18.383 16.1664 18.5108C16.4796 19.0691 16.1943 19.7743 15.5812 19.958C15.4408 20 15.2939 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4Z" fill="var(--text-primary)"/>
    </svg>
  </button>
</template>

<script setup>
  import { useTheme } from '@/composables/useTheme.js';

  const { theme, toggleTheme } = useTheme();
</script>

<style lang="scss" scoped>
  .toggle {
    position: relative;
    padding: 5px;
    border: none;
    border-radius: 100%;
    background-color: transparent;
    z-index: 0;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      width: 30px;
      height: 30px;
    }
  }
</style>
