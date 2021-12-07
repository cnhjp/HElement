import { createRouter, createWebHistory } from 'vue-router';

const demos = [
  {
    path: '/demo-container',
    name: 'demo-container',
    component: () => import('../views/demos/container/index.vue'),
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test/index.vue'),
  },
  ...demos,
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
