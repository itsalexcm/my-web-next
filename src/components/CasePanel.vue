<template>
  <div :class="['case-panels', variant]">
    <div
      v-for="(panel, index) in panels"
      :key="index"
      class="panel-item"
    >
      <div v-if="variant === 'alpha'" class="panel-bullet">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="12" fill="var(--text-primary)"/>
          <circle cx="18" cy="18" r="9" fill="var(--bg-primary)"/>
          <circle cx="18" cy="18" r="6" fill="var(--text-accent)"/>
        </svg>
      </div>
      <div class="panel-content">
        <div v-if="variant === 'zeta'" class="panel-quote" aria-hidden="true">“</div>
        <h4 v-if="panel.label" class="panel-heading" v-html="panel.label"></h4>
        <p v-if="panel.text" class="text regular" v-html="panel.text"></p>
        <ul v-else-if="panel.list && panel.list.length" class="text regular list">
          <li v-for="(item, itemIndex) in panel.list" :key="itemIndex" v-html="item"></li>
        </ul>
      </div>
    </div>
    <div v-if="variant === 'alpha'" class="panel-line">
      <svg width="4" height="10004" viewBox="0 0 4 10004" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L2.00041 10002" stroke="var(--text-primary)" stroke-width="2" stroke-linecap="square" stroke-dasharray="8 12"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    panels: Array,
    variant: {
      type: String,
      default: 'default'
    }
  })
</script>

<style lang="scss" scoped>
  .case-panels {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-8x);
    &.alpha {
      position: relative;
      flex-wrap: wrap;
      margin: var(--spacing-10x) auto 0 auto;
      .panel-item {
        z-index: 100;
      }
    }
    &.beta {
      gap: var(--spacing-10x);
      justify-content: flex-start;
      .panel-item {
        flex: 0 1 auto;
        .panel-content {
          background-color: transparent;
          padding: 0;
          .panel-heading {
            display: inline-block;
            font-size: var(--font-size-3xl);
            line-height: var(--line-height-4xl);
            margin-bottom: 0;
          }
        }
      }
    }
    &.gamma {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacing-10x);
      .panel-item {
        flex: 1 1 0;
        .panel-content {
          background-color: var(--bg-secondary);
          border-radius: var(--spacing-4x);
          padding: var(--spacing-8x) var(--spacing-10x);
          ul {
            li {
              display: table;
              :deep(span.bold) {
                font-weight: var(--font-weight-bold);
              }
              &::before {
                display: table-cell;
                box-sizing: border-box;
                padding-inline-end: var(--spacing-4x);
                content: "→";
                color: var(--text-accent);
                font-weight: var(--font-weight-bold);
              }
            }
          }
        }
      }
    }
    &.zeta {
      .panel-item {
        .panel-content {
          flex-direction: column;
          justify-content: flex-start;
          display: flex;
          gap: var(--spacing-4x);
          box-sizing: border-box;
          height: 100%;
          font-style: italic;
          .panel-quote {
            font-family: ui-serif, Georgia, serif;
            color: var(--text-accent);
            font-size: calc(var(--font-size-xl) * 3);
            line-height: 1;
          }
          p {
            margin-top: calc(var(--spacing-14x) * -1);
          }
        }
      }
    }
    .panel-line {
      position: absolute;
      z-index: 0;
      overflow: hidden;
      height: 100%;
      left: var(--spacing-4x);
      svg {
        path {
          transition: stroke .3s ease;
        }
      }
    }
    .panel-item {
      flex: 1 1 auto;
      display: flex;
      align-items: center;
      gap: var(--spacing-4x);
      .panel-bullet {
        display: flex;
        svg {
          width: auto;
          height: auto;
          circle {
            transition: fill .3s ease;
          }
        }
      }
      .panel-content {
        flex: 1 1 100%;
        background-color: var(--bg-secondary);
        border-radius: var(--spacing-4x);
        padding: var(--spacing-8x) var(--spacing-10x);
        transition: background-color .3s ease;
      }
    }
  }
  @include mobile {
    .case-panels {
      flex-wrap: wrap;
      &.gamma {
        .panel-item {
          flex: 1 1 100%;
        }
      }
      .panel-line {
        left: 16px;
      }
    }
  }
</style>