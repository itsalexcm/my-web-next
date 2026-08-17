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
        @transitionend="onCloneTransitionEnd"
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
const phase = ref('idle');
let geometry = null;
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

const startBox = (scaled, animate) => {
  const { start, tx, ty, scale } = geometry;
  cloneStyle.value = {
    position: 'absolute',
    top: `${start.top}px`,
    left: `${start.left}px`,
    width: `${start.width}px`,
    height: `${start.height}px`,
    transformOrigin: 'top left',
    transition: animate ? 'transform 0.3s ease-in-out' : 'none',
    transform: scaled
      ? `translate(${tx}px, ${ty}px) scale(${scale})`
      : 'translate(0, 0) scale(1)'
  };
};

const finalBox = () => {
  const { end } = geometry;
  cloneStyle.value = {
    position: 'absolute',
    top: `${end.top}px`,
    left: `${end.left}px`,
    width: `${end.width}px`,
    height: `${end.height}px`,
    transformOrigin: 'top left',
    transform: 'none',
    transition: 'none'
  };
};

const measure = (rect) => {
  const scale = Math.min(window.innerWidth / rect.width, window.innerHeight / rect.height);
  const width = rect.width * scale;
  const height = rect.height * scale;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  return {
    start: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
    end: { top, left, width, height },
    scale,
    tx: left - rect.left,
    ty: top - rect.top
  };
};

const openZoom = async () => {
  const rect = rootEl.value?.getBoundingClientRect();
  if (!rect) return;

  geometry = measure(rect);
  isOpen.value = true;
  phase.value = 'in';
  addListeners();
  startBox(false, false);

  await nextTick();

  if (prefersReducedMotion()) {
    finalBox();
    phase.value = 'shown';
    return;
  }

  requestAnimationFrame(() => {
    startBox(true, true);
  });
};

const onCloneTransitionEnd = (event) => {
  if (event.propertyName !== 'transform') return;
  if (phase.value === 'in') {
    finalBox();
    phase.value = 'shown';
  }
};

const closeZoom = () => {
  if (!isOpen.value || phase.value === 'out') return;
  removeListeners();

  if (prefersReducedMotion() || !geometry) {
    isOpen.value = false;
    phase.value = 'idle';
    return;
  }

  phase.value = 'out';
  startBox(true, false);

  requestAnimationFrame(() => {
    startBox(false, true);
  });

  closeTimer = window.setTimeout(() => {
    isOpen.value = false;
    phase.value = 'idle';
    closeTimer = null;
  }, 300);
};

onBeforeUnmount(() => {
  removeListeners();
  if (closeTimer) window.clearTimeout(closeTimer);
});
</script>
