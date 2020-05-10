<template>
  <div id="app">
    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-link :to="'/user/'+userName">用户</router-link><!--动态路由-->
    <router-link :to="{path:'/profile',query:{userName:'张三',age:18,height:188}}">个人简介</router-link>
    <keep-alive exclude='Home'><!--保持状态属性-->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      userName:'张三'
    }
  },
  methods:{
    /* profile(){
      this.$router.push({
        path:'/profile',
        query:{
          userName:'张三',
          age:18,
          height:188
        }
      })
    } */
  },
}
</script>

<style>

</style>
