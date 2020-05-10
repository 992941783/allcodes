<template>
  <div>
    <h2>用户界面</h2>
    <p>用户信息</p>
    <h2>{{userName}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed:{
    userName(){
      return this.$route.params.userName//$route获取活跃组件相关信息
    }
  }
}
</script>

<style>

</style>