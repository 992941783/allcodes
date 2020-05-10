<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot='item_img' src="@/assets/imgs/tabBar/home.svg" alt="">
        <img slot='item_img_active' src="@/assets/imgs/tabBar/home-active.svg" alt="">
        <div slot='item_text'>首页</div>
      </tab-bar-item>

      <tab-bar-item path='/type'>
        <img slot='item_img' src="@/assets/imgs/tabBar/type.svg" alt="">
        <img slot='item_img_active' src="@/assets/imgs/tabBar/type-active.svg" alt="">
        <div slot='item_text'>分类</div>
      </tab-bar-item>

      <tab-bar-item path='/shop'>
        <img slot='item_img' src="@/assets/imgs/tabBar/shop.svg" alt="">
        <img slot='item_img_active' src="@/assets/imgs/tabBar/shop-active.svg" alt="">
        <div slot='item_text'>购物车</div>
      </tab-bar-item>

      <tab-bar-item path='/me'>
        <img slot='item_img' src="@/assets/imgs/tabBar/me.svg" alt="">
        <img slot='item_img_active' src="@/assets/imgs/tabBar/me-active.svg" alt="">
        <div slot='item_text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabBar/TabBar.vue'
import TabBarItem from '@/components/tabBar/TabBarItem.vue'
export default {
  name:'MainTabBar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>