<template>
  <div :class="['case-media', layout === 'wrap' ? 'case-media-wrap' : '']">
    <ZoomableImage
      v-for="(image, index) in images"
      :key="index"
      :src="image.src"
      :alt="image.alt"
      :img-class="[
        layout === 'wrap' ? 'wrap' : '',
        image.transparent === 'yes' || transparent === 'yes' ? 'transparent' : '',
        image.borderRadius ? `radius-${image.borderRadius}` : '',
      ]"
      :eager="index === 0"
    />
    <div v-if="caption" class="case-caption">
      <p class="text regular caption">{{ caption }}</p>
    </div>
  </div>
</template>

<script setup>
import ZoomableImage from '@/components/ZoomableImage.vue'

defineProps({
  images: Array,
  caption: String,
  transparent: String,
  layout: {
    type: String,
    default: '',
    validator: (value) => ['', 'wrap'].includes(value)
  }
});
</script>

<style lang="scss" scoped>
.case-media {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.case-media-wrap {
  display: flex;
  flex-direction: row;
  column-gap: var(--spacing-8x);
}
</style>
