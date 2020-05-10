<template>
  <div class='tabBarItem' @click='itemClick'>
    <div v-if='!isShowImg'><slot name='item_img'></slot></div>
    <div v-else><slot name='item_img_active'></slot></div>
    <div :style='item_text_style'><slot name='item_text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:'',
    text_color:{
      type:String,
      default:'#f00'
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  },
  computed:{
    isShowImg(){
      if(this.path == this.$route.path){
        return true
      };return false
    },
    item_text_style(){
      return this.isShowImg ? {color:this.text_color} : {}
    }
  },
}
</script>

<style>
  .tabBarItem {
    flex:1;
    font-size: 12px;
    text-align:center
  }
  .tabBarItem img {
    width:20px;
    height:20px;
    margin-top:2px
  }

</style>