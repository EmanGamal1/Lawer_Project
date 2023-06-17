import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/RegistrationView/RegistrationView.vue')
    },
    {
      path: '/verfication',
      name: 'verfication',
      component: () => import('../views/VerfiyPhone/VerfiyPhone.vue')
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('../views/ForgetPassword/ForgetPassword.vue')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/ResetPassword/ResetPassword.vue')
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: () => import('../views/UserProfile/UserProfile.vue')
    },
    {
      path: '/check-code',
      name: 'check-code',
      component: () => import('../views/CheckCodeForgetPass/CheckCodeForgetPass.vue')
    },
  ]
})

export default router
