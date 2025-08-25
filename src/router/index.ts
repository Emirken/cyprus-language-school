import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/ServicesPage.vue')
  },
  {
    path: '/services/english-courses',
    name: 'EnglishCourses',
    component: () => import('@/views/services/EnglishCoursesPage.vue')
  },
  {
    path: '/services/international-exams',
    name: 'InternationalExams',
    component: () => import('@/views/services/InternationalExamsPage.vue')
  },
  {
    path: '/services/abroad-programs',
    name: 'AbroadPrograms',
    component: () => import('@/views/services/AbroadProgramsPage.vue')
  },
  {
    path: '/services/education-consulting',
    name: 'EducationConsulting',
    component: () => import('@/views/services/EducationConsultingPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router