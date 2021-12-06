import { createRouter, createWebHistory } from 'vue-router';
import Demo from '../demos/index.vue';

const demoRoutes = [
  {
    path: '/demo-container',
    name: 'demo-container',
    component: () => import('../demos/container/index.vue'),
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Demo,
  },
  ...demoRoutes,
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
