import { createRouter, createWebHistory } from 'vue-router'
import exercise1 from '../views/exercise1/index.vue'
import exercise2 from '../views/exercise2/index.vue'
import exercise3 from '../views/exercise3/index.vue'
import exercise4 from '../views/exercise4/index.vue'
import exercise5 from '../views/exercise5/index.vue'
import exercise6 from '../views/exercise6/index.vue'
import exercise7 from '../views/exercise7/index.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/1',
      name: 'exercise1',
      component: exercise1
    },
    {
      path: '/2',
      name: 'exercise2',
      component: exercise2
    },
    {
      path: '/3',
      name: 'exercise3',
      component: exercise3
    },
    {
      path: '/4',
      name: 'exercise4',
      component: exercise4
    },
    {
      path: '/5',
      name: 'exercise5',
      component: exercise5
    },
    {
      path: '/6',
      name: 'exercise6',
      component: exercise6
    },
    {
      path: '/7',
      name: 'exercise7',
      component: exercise7
    }
  ]
})

export default router
