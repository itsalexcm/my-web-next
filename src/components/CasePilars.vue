<template>
  <div class="case-pilars">
    <div
      class="pilar-item"
      v-for="(item, index) in content"
      :key="index"
    >
      <div class="pilar-icon" v-html="item.icon"></div>
      <h4 class="panel-heading">{{ item.label }}</h4>
      <p class="text regular">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    content: {
      type: Array,
      required: true
    }
  });
</script>

<style lang="scss" scoped>
.case-pilars {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-10x);
}
.pilar-item {
  flex: 1 1 300px;
}
.pilar-icon {
  display: inline-flex;
  background-color: var(--bg-secondary);
  border-radius: var(--spacing-4x);
  padding: var(--spacing-4x);
  margin-bottom: var(--spacing-6x);
  transition: background-color .3s ease;
  :deep(svg) {
    width: 30px;
    height: 30px;
  }
}
@include mobile {
  .pilar-item {
    flex: 1 1 100%;
  }
}
</style>