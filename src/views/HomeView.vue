<template>
  <LayoutComponent>
    <div class="intro">
      <h1 class="visually-hidden">Alex Cerezo, Product Designer</h1>
      <TypingText />
      <p class="text regular">
        I’m Alex Cerezo, a Product Designer focused on solving real user problems and business needs through impactful digital products. Based in Spain.
      </p>
      <SocialLinks />
    </div>
    <ProjectList :projects="projects" />
    <div class="past-link">
      <router-link to="/past-work">
        <p class="text-link text regular">Past work →</p>
      </router-link>
    </div>
  </LayoutComponent>
</template>

<script setup>
import TypingText from '@/components/TypingText.vue'
import ProjectList from '@/components/ProjectList.vue'
import { projects } from '@/data/projects.js'
import LayoutComponent from '@/components/LayoutComponent.vue'
import SocialLinks from '@/components/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.intro {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: var(--width-sm);
  margin: var(--spacing-10x) 0 calc(var(--spacing-20x) + var(--spacing-20x)) 0;
  p {
    max-width: var(--width-xs);
    margin: var(--spacing-4x) 0;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-xl);
    font-weight: var(--font-weight-regular);
  }
}
.past-link {
  margin-top: var(--spacing-20x);
  a {
    display: inline-block;
  }
}
</style>
