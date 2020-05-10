<template>
  <div>
    <h2>我是主页</h2>
    <p>啊啊啊</p>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/messages'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Home',
  data(){
    return {
      path:'/home/news'
    }
  },
  created(){
    console.log('home created')
  },
  activated(){
    console.log('home 活跃')
    console.log(this.$route)
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from, next){
    // console.log('home 离开之前')
    // console.log(this.$route)
    this.path = this.$route.path
    next()
  }
}
</script>

<style>

</style>