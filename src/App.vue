<template>
  <KonamiEffect />
  <router-view/>
</template>

<script setup>
import KonamiEffect from '@/components/KonamiEffect.vue';
import { useTheme } from '@/composables/useTheme.js';

useTheme();
</script>
