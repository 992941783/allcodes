import vue from 'vue'
import vueRouter from 'vue-router'

//组件导入
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

//组件导入(路由懒加载)
const Home = () => import ('../components/Home.vue')
const HomeNews = () => import ('../components/HomeC/HomeNews.vue')
const HomeMessages = () => import ('../components/HomeC/HomeMessages.vue')
const About= () => import ('../components/About.vue')
const User = () => import ('../components/User.vue')
const Profile = () => import ('../components/Profile')

vue.use(vueRouter)

//路由映射表
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'/',
        redirect:'news'
      },
      {
        path:'news',
        component:HomeNews
      },
      {
        path:'messages',
        component:HomeMessages
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
  },
  {
    path:'/user/:userName',//动态路由
    component:User,
    meta:{
      title:'用户'
    },
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'个人简介'
    },
  }
]
const router = new vueRouter({
  routes,
  mode:'history'
})

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title
  next()
})
export default router
