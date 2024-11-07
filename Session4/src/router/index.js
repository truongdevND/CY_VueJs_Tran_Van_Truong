import { createRouter, createWebHistory } from 'vue-router'
import newsDetails from '../components/exercise7/NewsDetails.vue';
import exercise1 from '@/views/exercise1/index.vue'
import exercise2 from '@/views/exercise2/index.vue'
import exercise3 from '@/views/exercise3/index.vue'
import exercise4 from '@/views/exercise4/index.vue'
import exercise5 from '@/views/exercise5/index.vue'
import exercise6 from '@/views/exercise6/index.vue'
import exercise7 from '@/views/exercise7/index.vue'
import exercise8 from '@/views/exercise8/index.vue'
import exercise10 from '@/views/exercise10/index.vue'
import exercise11 from '@/views/exercise11/index.vue'
import exercise12 from '@/views/exercise12/index.vue'
import exercise13 from '@/views/exercise13/index.vue'
import exercise14 from '@/views/exercise14/index.vue'
import exercise15 from '@/views/exercise15/index.vue'
import home from "@/views/home.vue";













const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
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
    },
    {
      path: '/8',
      name: 'exercise8',
      component: exercise8
    },
    {
      path: '/10',
      name: 'exercise10',
      component: exercise10
    },
    {
      path: '/11',
      name: 'exercise11',
      component: exercise11
    },
    {
      path: '/12',
      name: 'exercise12',
      component: exercise12
    },
    {
      path: '/13',
      name: 'exercise13',
      component: exercise13
    },
    {
      path: '/14',
      name: 'exercise14',
      component: exercise14
    },
    {
      path: '/15',
      name: 'exercise15',
      component: exercise15
    },
    {
      path: '/news/detail',
      name: 'NewsDetail',
      component: newsDetails,
      props: true,
    },

  ]
})

export default router
