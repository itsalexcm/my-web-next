<template>
  <div
    ref="rootEl"
    class="case-img"
    :class="[imgClass, { hidden: isOpen }]"
  >
    <img
      :src="src"
      :alt="alt"
      class="case-img-zoom"
      :loading="eager ? 'eager' : 'lazy'"
      decoding="async"
    >
    <button
      type="button"
      class="case-img-open"
      :aria-label="`Enlarge image${alt ? `: ${alt}` : ''}`"
      @click="openZoom"
    />
  </div>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="case-img-fullscreen"
      role="dialog"
      aria-modal="true"
      :aria-label="alt || 'Enlarged image'"
    >
      <div
        class="case-img case-img-bis"
        :class="imgClass"
        :style="cloneStyle"
      >
        <img :src="src" :alt="alt">
      </div>
      <button
        type="button"
        class="case-img-close"
        aria-label="Close enlarged image"
        @click="closeZoom"
      />
    </div>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref } from 'vue';

defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  imgClass: { type: [String, Array, Object], default: '' },
  eager: { type: Boolean, default: false }
});

const rootEl = ref(null);
const isOpen = ref(false);
const cloneStyle = ref({});
let closeTimer = null;
let listening = false;

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const onKeydown = (event) => {
  if (event.key === 'Escape') closeZoom();
};

const addListeners = () => {
  if (listening) return;
  listening = true;
  window.addEventListener('keydown', onKeydown);
  window.addEventListener('scroll', closeZoom, { passive: true });
  window.addEventListener('resize', closeZoom);
};

const removeListeners = () => {
  if (!listening) return;
  listening = false;
  window.removeEventListener('keydown', onKeydown);
  window.removeEventListener('scroll', closeZoom);
  window.removeEventListener('resize', closeZoom);
};

const openZoom = async () => {
  const rect = rootEl.value?.getBoundingClientRect();
  if (!rect) return;

  isOpen.value = true;
  addListeners();
  cloneStyle.value = {
    position: 'absolute',
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    transform: 'translate(0, 0) scale(1)'
  };

  await nextTick();

  if (prefersReducedMotion()) return;

  const scale = Math.min(window.innerWidth / rect.width, window.innerHeight / rect.height);
  const translateX = (window.innerWidth - rect.width * scale) / 2 - rect.left;
  const translateY = (window.innerHeight - rect.height * scale) / 2 - rect.top;

  requestAnimationFrame(() => {
    cloneStyle.value = {
      ...cloneStyle.value,
      transition: 'transform 0.3s ease-in-out',
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`
    };
  });
};

const closeZoom = () => {
  if (!isOpen.value) return;
  removeListeners();

  if (prefersReducedMotion()) {
    isOpen.value = false;
    return;
  }

  cloneStyle.value = {
    ...cloneStyle.value,
    transition: 'transform 0.3s ease-in-out',
    transform: 'translate(0, 0) scale(1)'
  };

  closeTimer = window.setTimeout(() => {
    isOpen.value = false;
    closeTimer = null;
  }, 300);
};

onBeforeUnmount(() => {
  removeListeners();
  if (closeTimer) window.clearTimeout(closeTimer);
});
</script>
