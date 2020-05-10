import Vue from 'vue'
import VueRouter from 'vue-router'

//导入组件
const Home = () => import('../views/tabBar/Home/Home.vue')
const Type = () => import('../views/tabBar/Type/Type.vue')
const Shop = () => import('../views/tabBar/Shop/Shop.vue')
const Me = () => import('../views/tabBar/Me/Me.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/type',
    component:Type
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/Me',
    component:Me
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
