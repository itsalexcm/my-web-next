<template>
  <div class="case-meta">
    <div
      v-for="(item, index) in content"
      :key="index"
      class="meta-item"
    >
      <h4 class="panel-heading">{{ item.label }}</h4>
      <p v-if="item.text" class="text regular">{{ item.text }}</p>
      <ul v-else-if="item.list" class="text regular">
        <li
          v-for="(entry, entryIndex) in item.list"
          :key="entryIndex"
        >
          {{ entry }}
        </li>
      </ul>
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
.case-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-10x);
  margin: var(--spacing-30x) auto 0 auto;
}
.meta-item {
  flex: 1 1 250px;
}
@include mobile {
  .meta-item {
    flex: 1 1 100%;
  }
}
</style>
