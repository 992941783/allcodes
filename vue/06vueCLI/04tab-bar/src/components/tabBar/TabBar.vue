<template>
  <div class='tabBar'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
  .tabBar{
    display:flex;
    position:fixed;
    bottom:0px;
    left:0px;
    right:0px;
    height:49px;
    background:#696969
  }
</style>