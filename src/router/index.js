import { createRouter, createWebHistory } from 'vue-router';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/firebase-config';
import { projects } from '@/data/projects.js';
import { site } from '@/data/site.js';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: site.titles.home }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: site.titles.about }
  },
  {
    path: '/past-work',
    name: 'past-work',
    component: () => import('../views/PastView.vue'),
    meta: { title: site.titles.pastWork }
  },
  {
    path: '/work/:id',
    name: 'case',
    component: () => import('../views/CaseView.vue'),
    beforeEnter: (to) => {
      const exists = projects.some((project) => project.id === to.params.id);
      if (!exists) return { name: 'not-found', replace: true };
      return true;
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: site.titles.notFound }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

router.afterEach((to) => {
  let title = to.meta.title || site.name;
  if (to.name === 'case') {
    const project = projects.find((item) => item.id === to.params.id);
    if (project) title = `${site.name} | ${project.title}`;
  }
  document.title = title;

  if (analytics) {
    logEvent(analytics, 'page_view', {
      page_path: to.fullPath,
      page_title: title
    });
  }
});

export default router;
