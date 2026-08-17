<template>
  <div :class="['case-block', direction || '', align || '', customMargin || '', customMargin0 || '']">
    <h2 class="block-heading" v-if="title">{{ title }}</h2>
    <div :class="['block-content', directionContent || '', alignContent || '']">
      <template
        v-for="(block, index) in content"
        :key="index"
        >
        <div :class="['block-item', block.customWidth || '']">
          <h3 v-if="block.title">{{ block.title }}</h3>
          <p
            v-for="(txt, i) in block.texts || [block.text]"
            :key="'text-' + i"
            :class="['text regular', block.margin || '']"
            v-html="txt"
          ></p>
          <component
            v-if="block.list && block.list.length"
            :is="block.listType === 'ol' ? 'ol' : 'ul'"
            :start="block.start"
            class="text regular list"
          >
            <li
              v-for="(item, i) in block.list"
              :key="i"
              v-html="item"
            ></li>
          </component>
          <p
            v-if="block.textAfterList"
            class="text regular"
            v-html="block.textAfterList"
          ></p>
          <div
            v-if="block.images && block.images.length"
            class="case-img-multi"
          >
            <ZoomableImage
              v-for="(img, i) in block.images"
              :key="'img-' + i"
              :src="img.src"
              :alt="img.alt"
              :img-class="img.class"
            />
          </div>

          <ZoomableImage
            v-else-if="block.image"
            :src="block.image.src"
            :alt="block.image.alt"
            :img-class="block.image.class"
          />
          <CasePanel
            v-if="block.panels && block.panels.length"
            :panels="block.panels"
            :variant="block.panelStyle || 'default'"
          />
          <CasePilars
            v-if="block.pilars && block.pilars.length"
            :content="block.pilars"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import CasePanel from '@/components/CasePanel.vue'
import CasePilars from '@/components/CasePilars.vue'
import ZoomableImage from '@/components/ZoomableImage.vue'

defineProps({
  content: {
    type: Array,
    required: true
  },
  title: String,
  direction: String,
  align: String,
  margin: String,
  directionContent: String,
  alignContent: String,
  customMargin: String,
  customMargin0: String
});
</script>

<style lang="scss" scoped>
.case-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-6x);
  margin: var(--spacing-30x) auto;
  scroll-margin-top: 120px;
  &:last-child {
    margin-bottom: 0;
  }
  &.direction-column {
    flex-direction: column;
  }
  &.justify-end {
    justify-content: end;
  }
  &.justify-center {
    justify-content: center;
  }
  &.custom-margin {
    margin: var(--spacing-30x) auto var(--spacing-10x) auto;
  }
  &.custom-margin-0 {
    margin: 0;
  }
}
.block-content {
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-10x);
  &.direction-column {
    flex-direction: column;
    .block-item {
      max-width: 100%;
    }
  }
  &.align-center {
    align-items: center;
  }
}
.block-item {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  &.custom-width {
    max-width: var(--width-md);
  }
  p {
    &.margin-bottom {
      margin-bottom: var(--spacing-10x);
    }
    :deep(span.bold) {
      font-weight: var(--font-weight-bold);
    }
  }
}
.case-img-multi {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-8x);
  flex-direction: column;
  :deep(.case-img) {
    flex: 1 1 200px;
  }
}
@include mobile {
  .case-block {
    flex-direction: column;
  }
  .block-content {
    flex-direction: column;
  }
}
</style>
