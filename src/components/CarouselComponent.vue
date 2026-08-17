<template>
  <div :class="['carousel-container', props.customClass || '']">
    <div class="carousel-track" :style="trackStyle">
      <div class="carousel-group" v-for="n in groupCount" :key="n">
        <template v-if="props.images && props.images.length">
          <img
            v-for="(image, i) in props.images"
            :key="i"
            :src="image.src"
            :alt="image.alt"
            loading="lazy"
            decoding="async"
          />
        </template>
        <template v-else-if="props.items && props.items.length">
          <div class="carousel-item" v-for="(it, i) in props.items" :key="i">
            <slot name="item" :item="it" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'

const props = defineProps({
  customClass: String,
  images: { type: Array, default: null },
  items: { type: Array, default: null },
  speed: { type: Number, default: 30 }
})

const reduceMotion = ref(false)
let motionQuery = null

const updateMotion = () => {
  reduceMotion.value = Boolean(motionQuery?.matches)
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateMotion()
  motionQuery.addEventListener('change', updateMotion)
})

onBeforeUnmount(() => {
  motionQuery?.removeEventListener('change', updateMotion)
})

const groupCount = computed(() => (reduceMotion.value ? 1 : 2))
const trackStyle = computed(() => (
  reduceMotion.value ? {} : { animationDuration: props.speed + 's' }
))
</script>

<style lang="scss" scoped>
.carousel-container {
  &.margin-top {
    margin-top: var(--spacing-30x);
  }
  position: relative;
  overflow: hidden;
  width: 100%;
  mask-image:
    linear-gradient(
      to right,
      rgba(var(--bg-primary-rgb), 0) 0%,
      rgb(var(--bg-primary-rgb)) 12.5%,
      rgb(var(--bg-primary-rgb)) 87.5%,
      rgba(var(--bg-primary-rgb), 0) 100%);
}
.carousel-track {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  animation: scroll-left linear infinite;
}
.carousel-container:hover .carousel-track {
  animation-play-state: paused;
}
.carousel-group {
  display: flex;
}
.carousel-track img {
  height: 600px;
  margin-right: var(--spacing-8x);
  flex-shrink: 0;
  object-fit: contain;
  min-width: 100px;
}
.carousel-item {
  margin-right: var(--spacing-8x);
  flex-shrink: 0;
  min-width: 280px;
}
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@include mobile {
  .carousel-track img {
    height: 400px;
  }
}
</style>
