import { createRouter, createWebHistory } from 'vue-router'
import Exercise1 from '@/views/exercise1/index.vue'
import Exercise2 from '@/views/exercise2/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'Exercise1',
      component: Exercise1
    },
    {
      path: '/2',
      name: 'Exercise2',
      component: Exercise2
    },


  ]
})

export default router
