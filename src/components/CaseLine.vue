<template>
  <figure class="case-quote">
    <div class="case-quote__mark" aria-hidden="true">“</div>
    <blockquote v-if="text" class="case-quote__text">{{ text }}</blockquote>
    <figcaption v-if="author" class="case-quote__author text caption">{{ author }}</figcaption>
    <span class="quote-separator"></span>
  </figure>
</template>

<script setup>
defineProps({
  text: { type: String, default: '' },
  author: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.case-quote {
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  max-width: var(--width-sm);
}
.quote-separator {
  display: block;
  margin: 0 auto;
  width: 80px;
  height: 5px;
  background-color: var(--text-primary);
  transition: background-color .3s ease;
}
.case-quote__mark {
  font-family: ui-serif, Georgia, serif;
  color: var(--text-accent);
  font-size: calc(var(--font-size-xl) * 3);
  line-height: 1;
  margin-top: var(--spacing-6x);
}
.case-quote__text {
  margin: calc(var(--spacing-8x) * -1) 0 var(--spacing-8x) 0;
  font-size: var(--font-size-lg);
  line-height: var(--line-height-xl);
  font-style: italic;
  color: var(--text-caption);
}
.case-quote__author {
  color: var(--accent-secondary);
  margin: calc(var(--spacing-4x) * -1) 0 var(--spacing-8x);
}
</style>
