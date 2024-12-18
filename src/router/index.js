import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'
import AdminVue from '../views/AdminVue.vue'
import CrossesGame from '../views/portfolioItems/CrossesGame.vue'
import TodoList from '../views/portfolioItems/TodoList.vue'
import PollComponent from '../views/portfolioItems/PollComponent.vue'
import StartPage from '@/views/portfolioItems/StartPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/portfolio/admin',
    name: 'admin',
    component: AdminVue
  },
  {
    path: '/crosses',
    name: 'crosses',
    component: CrossesGame
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoList
  },
  {
    path: '/poll',
    name: 'poll',
    component: PollComponent
  },
  {
    path: '/startPage',
    name: 'startPage',
    component: StartPage
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
