<template>
  <div class="work">
    <ul class="work-list">
      <li v-for="(project, index) in projects" :key="project.id">
        <router-link :to="`/work/${project.id}`">
          <div class="work-item">
            <div class="work-thumbnail">
              <img
                class="case-img"
                :src="project.thumbnail"
                :alt="project.title"
                :loading="index === 0 ? 'eager' : 'lazy'"
                decoding="async"
              />
            </div>
            <div class="work-content">
              <div v-if="project.tags && project.tags.length" class="case-tags">
                <span
                  v-for="(tag, i) in project.tags"
                  :key="`tag-${i}`"
                  class="tag-item text mini"
                >{{ tag }}</span>
              </div>
              <h3 class="work-title">{{ project.title }}</h3>
              <p class="work-desc text regular">{{ project.intro }}</p>
              <p class="btn-pill work-button text regular">Case study →</p>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  projects: Array
});
</script>

<style lang="scss" scoped>
.work-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: var(--spacing-20x);
  margin: 0;
  padding: 0;
}
.work-item {
  display: flex;
  align-items: center;
  color: var(--text-primary);
}
.work-thumbnail {
  flex: 2;
  border-radius: var(--spacing-4x);
  .case-img {
    object-fit: cover;
  }
}
.work-content {
  flex: 1;
  margin: 0 0 0 var(--spacing-16x);
}
.work-title {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-xl);
  font-weight: var(--font-weight-bold);
  max-width: var(--width-sm);
  margin-bottom: 0;
}
.work-desc {
  margin-top: var(--spacing-2x);
}
.work-button {
  margin-top: var(--spacing-6x);
}
@include mobile {
  .work-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .work-content {
    margin: var(--spacing-8x) 0 0 0;
  }
  .work-desc {
    margin-top: 0;
  }
}
</style>
