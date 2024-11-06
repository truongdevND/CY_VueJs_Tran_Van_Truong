import { createRouter, createWebHistory } from 'vue-router'
import Profile from "@/views/Profile.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile,
      props: true,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true,
    },
  ]
})

export default router
