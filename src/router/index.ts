import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotfoundView from '../views/NotfoundView.vue'
import StartView from '@/views/StartView.vue'
import ArticleView from '@/views/ArticleView.vue'
import RuriqueView from '@/views/RubriqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:restoId',
      name: 'start',
      component: StartView,
      props: true,
    },
    {
      path: '/:restoId/home',
      name: 'home',
      component: HomeView,
      props: true,
    },
    {
      path: '/:restoId/rubrique/:rubriqueId',
      name: 'rubrique',
      component: RuriqueView,
      props: true,
    },
    {
      path: '/:restoId/rubrique/:rubriqueId/article/:articleId',
      name: 'article',
      component: ArticleView,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      name: 'PageNotFound',
      path: '/404',
      component: NotfoundView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router
