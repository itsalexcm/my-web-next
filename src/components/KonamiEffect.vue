<template>
  <div v-if="showEffect" class="konami-container">
    <div class="emoji" v-for="(emoji, index) in emojis" :key="index" :style="emoji.style">
      {{ emoji.icon }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useKonami } from '@/composables/useKonami.js';

const showEffect = ref(false);
const emojis = ref([]);

const activateEffect = () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const sound = new Audio('/assets/sounds/storms.mp3');
  sound.currentTime = 0;
  sound.play().catch(() => {});
  showEffect.value = true;

  for (let i = 0; i < 100; i++) {
    emojis.value.push({
      icon: ['💧', '💧', '💧', '💧', '💧'][Math.floor(Math.random() * 5)],
      style: {
        position: 'absolute',
        left: `${Math.random() * 95}vw`,
        top: `${Math.random() * 100}vh`,
        fontSize: `${Math.random() * 30 + 20}px`,
        animation: `fall 5s linear ${Math.random() * 5}s infinite`
      }
    });
  }

  const logo = document.getElementById('logo');
  if (logo) {
    const originalLogo = logo.innerHTML;
    logo.innerHTML = `
      <svg class="zelda" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="zelda-01" fill-rule="evenodd" clip-rule="evenodd" d="M13 2H15H17H19H21H23H25V4H27V6V8H25V6H23H21H19H17H15H13V8H11V6V4H13V2ZM9 16H11H13V18H11H9V16ZM17 10H15V12H17V10ZM17 20H19H21H23V18H25V16H27H29V18H27V20V22H25V24H23H21V22H19H17V20ZM19 24H17V26H19V24ZM17 28H19H21V26H23H25H27H29V28H27V30H25H23H21H19H17V28ZM23 10H21V12H23V10Z" fill="#3FDC41"/>
        <path class="zelda-02" fill-rule="evenodd" clip-rule="evenodd" d="M7 6H9V8V10H11V12V14H13V12V10H15V12V14H17V12V10H19H21V12V14H23V12V10H25V12V14H27V12V10H29V8V6H31V8V10V12V14H29V16H27H25V18H23V20H21H19H17H15V18H13V16H11H9V14H7V12V10V8V6ZM19 18H21V16H19H17V18H19ZM5 22H7V20H9V22H11V24H9V26V28H7V26V24H5V22ZM5 30H7H9H11H13H15V32H13H11H9H7H5V30ZM15 30V28V26V24V22H17V24V26V28V30H15ZM27 22H25V24H27V26H29V28H31V26H33V24H31V22H29V20H27V22Z" fill="#FFB75F"/>
        <path class="zelda-03" fill-rule="evenodd" clip-rule="evenodd" d="M13 6H15H17H19H21H23H25V8H27V10V12V14H25V12V10H23H21H19H17H15H13V12V14H11V12V10V8H13V6ZM5 18H7H9H11H13H15V20H17V22H15V24V26V28V30H13H11H9H7H5H3V28V26V24V22V20H5V18ZM15 30H17V32V34H15H13H11V32H13H15V30ZM17 22H19H21V24H23H25H27V26H25H23H21V28H19H17V26H19V24H17V22ZM11 24V22H9V20H7V22H5V24H7V26V28H9V26V24H11ZM17 12H15V14H17V12ZM19 16H17V18H19H21V16H19ZM21 12H23V14H21V12ZM21 30H23H25H27V32H25H23H21V30ZM27 18H29V16V14H31V16V18H33V20V22V24H31V22H29V20H27V18Z" fill="#AC5A0A"/>
      </svg>
    `;
    setTimeout(() => {
      logo.innerHTML = originalLogo;
    }, 5000);
  }

  setTimeout(() => {
    showEffect.value = false;
    emojis.value = [];
  }, 5000);
};

useKonami(activateEffect);
</script>

<style lang="scss">
.konami-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1000;
}
.emoji {
  position: absolute;
  animation: fall 5s linear infinite;
}
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
</style>