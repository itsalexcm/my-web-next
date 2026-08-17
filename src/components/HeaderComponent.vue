<template>
  <header>
    <div class="header-container">
      <div class="alex">
        <router-link to="/" class="logo-link" aria-label="Alex Cerezo, home">
          <LogoComponent />
        </router-link>
      </div>
      <menu>
        <nav class="menu-desktop" aria-label="Primary">
          <ul>
            <li>
              <router-link
                to="/"
                class="text regular menu-link"
                :class="{ selected: route.path === '/' || route.path.startsWith('/work/') }"
              >
                Work
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text regular menu-link"
                :class="{ selected: route.path === '/about' }"
              >
                About
              </router-link>
            </li>
            <li>
              <a
                class="text regular menu-link"
                :href="site.resumeUrl"
                target="_blank"
                rel="noopener noreferrer"
              >Resume <span class="arrow arrow-out" aria-hidden="true"></span></a>
            </li>
          </ul>
        </nav>

        <button
          class="hamburger"
          type="button"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="mobileMenu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <div class="menu-toggle">
          <ThemeToggle />
        </div>
      </menu>
      <Transition name="fade">
        <div
          v-if="isMenuOpen"
          id="mobileMenuBackdrop"
          class="mobile-menu-backdrop"
          @click.self="closeMenu"
        >
          <nav id="mobileMenu" class="mobile-menu" aria-label="Mobile">
            <ul>
              <li>
                <router-link
                  to="/"
                  class="text regular menu-link"
                  :class="{ selected: route.path === '/' || route.path.startsWith('/work/') }"
                  @click="closeMenu"
                >
Work
</router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="text regular menu-link"
                  :class="{ selected: route.path === '/about' }"
                  @click="closeMenu"
                >
About
</router-link>
              </li>
              <li>
                <a
                  class="text regular menu-link"
                  :href="site.resumeUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="closeMenu"
                >Resume <span class="arrow arrow-out" aria-hidden="true"></span></a>
              </li>
            </ul>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import { useRoute } from 'vue-router';
  import LogoComponent from '@/components/LogoComponent.vue';
  import ThemeToggle from '@/components/ThemeToggle.vue';
  import { site } from '@/data/site.js';

  const route = useRoute();

  const isMenuOpen = ref(false);
  const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };
  const closeMenu = () => { isMenuOpen.value = false; };

  watch(() => route.fullPath, () => closeMenu());

  const onKeydown = (e) => { if (e.key === 'Escape') closeMenu(); };
  onMounted(() => { window.addEventListener('keydown', onKeydown); });
  onBeforeUnmount(() => { window.removeEventListener('keydown', onKeydown); });
</script>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    z-index: 9999;
    width: 100%;
    padding: var(--spacing-10x) 0;
    transition: background-color .3s ease;
  }
  .header-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    max-width: var(--width-xl);
    padding: 0 var(--spacing-10x);
  }
  menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--spacing-6x);
    padding: 0;
    margin: 0;
    cursor: default;
  }
  ul {
    display: flex;
    align-items: center;
    gap: var(--spacing-6x);
    margin: 3px 0 0 0;
    padding: 0;
  }
  .menu-link {
    color: var(--text-primary);
    border-bottom: 1px solid transparent;
    padding-bottom: var(--spacing-1x);
    &.selected {
      border-bottom-color: var(--text-primary);
    }
  }
  .menu-toggle {
    width: 40px;
    height: 40px;
    background-color: var(--bg-secondary);
    border-radius: var(--radius-pill);
    transition: background-color .3s ease;
  }
  .alex {
    display: flex;
    align-items: center;
  }
  .logo-link {
    display: inline-flex;
  }

  .fade-enter-active, .fade-leave-active { transition: opacity .25s ease; }
  .fade-enter-from, .fade-leave-to { opacity: 0; }
  .fade-enter-from .mobile-menu ul { transform: translateY(8px) scale(.98); opacity: 0; }
  .fade-enter-active .mobile-menu ul { transition: transform .25s ease, opacity .25s ease; }
  .fade-leave-to .mobile-menu ul { transform: translateY(8px) scale(.98); opacity: 0; }

  .hamburger {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    border: 0;
    padding: 0;
    background-color: var(--bg-secondary);
    transition: background-color 0.3s ease;
    border-radius: var(--radius-pill);
    cursor: pointer;
  }
  .hamburger .bar {
    position: absolute;
    left: 10px;
    right: 10px;
    height: 2px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: transform .2s ease, opacity .2s ease;
  }
  .hamburger .bar:nth-child(1) { top: 13px; }
  .hamburger .bar:nth-child(2) { top: 19px; }
  .hamburger .bar:nth-child(3) { top: 25px; }

  .mobile-menu-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0);
    backdrop-filter: blur(4px);
    z-index: 10000;
    display: grid;
    place-items: end center;
    padding-bottom: max(24px, env(safe-area-inset-bottom));
  }
  .mobile-menu ul {
    list-style: none;
    margin: 0;
    padding: var(--spacing-8x) var(--spacing-10x);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-5x);
    align-items: center;
    background: color-mix(in oklab, var(--bg-primary) 85%, transparent);
    border: 1px solid var(--bg-secondary);
    border-radius: 16px;
    backdrop-filter: blur(6px);
  }
  .mobile-menu a {
    border-bottom: 1px solid transparent;
    padding-bottom: var(--spacing-1x);
    font: inherit;
    color: var(--text-primary);
    text-decoration: none;
  }
  .mobile-menu a.selected {
    border-bottom-color: var(--text-primary);
  }
  .menu-desktop { display: flex; }

  @include mobile {
    menu {
      gap: var(--spacing-2x);
    }
    .menu-desktop { display: none; }
    .hamburger { display: inline-block; }
  }
</style>
