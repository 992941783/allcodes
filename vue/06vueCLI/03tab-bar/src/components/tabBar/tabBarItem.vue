<template>
  <div class='item'>
    <slot>
      <img src="../../assets/imgs/tabBar/home.svg" alt="">
      <div>首页</div>
    </slot>
  </div>
</template>

<script>
export default {
  name:'tabBarItem'
}
</script>

<style>
.item {
  flex:1;
  text-align:center;
}
/* .item img {
  height:20px;
  width:20px
} */
</style>