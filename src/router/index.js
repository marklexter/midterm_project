import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/StringAppView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import VuetifyView from '../views/VuetifyView.vue'
import QuizView from '../views/QuizView.vue'
import AboutView from '../views/AboutView.vue'






const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

  

   
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView

    
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMeView
    },
    {
      path: '/Vuetify',
      name: 'Vuetify',
      component: VuetifyView
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: QuizView
    },
    {
      path: '/About',
      name: 'About',
      component: AboutView
    }
    
  ]
})

export default router
