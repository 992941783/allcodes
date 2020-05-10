import Vue from 'vue'
import VueRouter from 'vue-router'

//导入组件(懒加载)
const Home = ()=>import('../views/tabBar/home/Home.vue')
const Type = ()=>import('../views/tabBar/type/Type.vue')
const Shop = ()=>import('../views/tabBar/shop/Shop.vue')
const Me = ()=>import('../views/tabBar/me/Me.vue')

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
    path:'/me',
    component:Me
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
