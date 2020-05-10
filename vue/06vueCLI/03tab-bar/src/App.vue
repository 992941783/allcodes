<template>
  <div id='app'>
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/imgs/tabBar/home.svg" alt="">
        <div>主页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/imgs/tabBar/type.svg" alt="">
        <div>分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/imgs/tabBar/shop.svg" alt="">
        <div>购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/imgs/tabBar/me.svg" alt="">
        <div>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar.vue'
import tabBarItem from './components/tabBar/tabBarItem.vue'
export default {
  name:'App',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style: none;
  color:#000;
}
</style>