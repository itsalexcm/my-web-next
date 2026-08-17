<template>
    <LayoutComponent :case-data="caseData">
    <article class="case">
      <div class="case-top">
        <div v-if="caseData?.tags && caseData?.tags.length" class="case-tags">
          <span
            v-for="(tag, tIdx) in caseData?.tags"
            :key="'btag-' + tIdx"
            class="tag-item text mini"
          >{{ tag }}</span>
        </div>
        <h1 class="hero-heading">{{ caseData?.title }}</h1>
        <div class="case-overview">
          <p class="text hero">{{ caseData?.subtitle }}</p>
        </div>
      </div>
      <component
        v-for="(block, index) in caseData?.components"
        :is="getComponent(block.type)"
        :key="`${block.type}-${index}`"
        v-bind="block.data"
      />
    </article>
    <div class="case-nav" v-if="prevCase || nextCase">
      <RouterLink
        v-if="prevCase"
        :to="`/work/${prevCase.id}`"
        class="btn-pill nav-button prev text regular"
      >
        <span class="arrow arrow-back" aria-hidden="true"></span> Prev
      </RouterLink>
      <RouterLink
        v-if="nextCase"
        :to="`/work/${nextCase.id}`"
        class="btn-pill nav-button next text regular"
      >
        Next <span class="arrow" aria-hidden="true"></span>
      </RouterLink>
    </div>
  </LayoutComponent>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { projects } from '@/data/projects.js'
  import LayoutComponent from '@/components/LayoutComponent.vue'
  import CaseTitle from '@/components/CaseTitle.vue'
  import CaseBlock from '@/components/CaseBlock.vue'
  import CaseMeta from '@/components/CaseMeta.vue'
  import CasePilars from '@/components/CasePilars.vue'
  import CaseMedia from '@/components/CaseMedia.vue'
  import CaseLine from '@/components/CaseLine.vue'
  import CarouselComponent from '@/components/CarouselComponent.vue'

  const route = useRoute()
  const caseData = computed(() => projects.find(p => p.id === route.params.id))
  const caseIndex = computed(() => projects.findIndex(p => p.id === route.params.id))
  const prevCase = computed(() => projects[caseIndex.value - 1] || null)
  const nextCase = computed(() => projects[caseIndex.value + 1] || null)

  const componentMap = {
    CaseTitle,
    CaseBlock,
    CaseMeta,
    CasePilars,
    CaseMedia,
    CaseLine,
    CarouselComponent
  }

  const getComponent = (type) => componentMap[type] || null
</script>

<style lang="scss" scoped>
.case {
  display: block;
}
.case-top {
  max-width: var(--width-md);
  text-align: center;
  margin: 0 auto var(--spacing-30x) auto;
  :deep(.case-tags) {
    justify-content: center;
  }
}
.case-overview {
  margin-top: var(--spacing-10x);
}
.case-nav {
  display: flex;
  justify-content: center;
  gap: var(--spacing-6x);
  margin: var(--spacing-30x) auto 0 auto;
  padding-top: var(--spacing-20x);
}
.nav-button {
  &.prev {
    text-align: left;
  }
  &.next {
    text-align: right;
  }
}
</style>
