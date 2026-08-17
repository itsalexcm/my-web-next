<template>
  <HeaderComponent />
  <main :data-project="caseData?.id">
    <div class="fade-in" :key="route.fullPath">
      <slot />
    </div>
  </main>
  <FooterComponent />
</template>

<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { runFadeIn } from '@/composables/useFadeIn.js'

defineProps({
  caseData: Object
})
const route = useRoute()

const playFadeIn = async () => {
  await nextTick()
  runFadeIn()
}

onMounted(playFadeIn)
watch(() => route.fullPath, playFadeIn)
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  max-width: var(--width-xl);
  box-sizing: border-box;
  padding: var(--spacing-20x) var(--spacing-10x);
}
</style>
