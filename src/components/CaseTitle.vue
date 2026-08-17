<template>
  <div class="case-title">
    <div class="title-content">
      <h3 class="title-heading" v-if="title">{{ title }}</h3>
      <div v-if="text" class="title-overview">
        <p class="text hero">{{ text }}</p>
      </div>
      <div v-if="thanks" class="thanks">
        <p class="text regular">{{ thanks }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  thanks: String
});
</script>

<style lang="scss" scoped>
.case-title {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  max-width: var(--width-md);
  text-align: center;
  margin: var(--spacing-30x) auto;
  &:last-child {
    margin-bottom: 0;
  }
  .thanks {
    p {
      color: var(--accent-secondary);
    }
  }
  .title-overview {
    margin-top: var(--spacing-10x);
  }
}
</style>