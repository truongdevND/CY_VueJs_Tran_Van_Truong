import { createRouter, createWebHistory } from 'vue-router'
import exercise from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exercise',
      component: exercise
    },

  ]
})

export default router
