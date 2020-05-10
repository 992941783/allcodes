<template>
    <div>
      <h2>{{message}}</h2>
      <Nav></Nav>
    </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name:'App',
  data(){
    return {
      message:'test'
    }
  },
  components:{
    Nav
  }
}
</script>

<style>

</style>