import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/home.vue';
import Layout from '../pages/layout/index.vue'

const routes = [
  { path: '/',name: 'Layout', component: Layout },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})