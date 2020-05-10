<template>
  <div>
    <h2>  我是子组件</h2>
    <ul>
      <li v-for='item in list1' :key='item'>{{item}}</li>
    </ul>
    <h1>子组件1</h1>
  </div>
</template>

<script>
export default {
  name:'Nav',
  data(){
    return {
      list1:[1,2,3]
    }
  }
}
</script>

<style>

</style>