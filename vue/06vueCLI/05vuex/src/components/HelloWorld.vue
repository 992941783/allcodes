<template>
  <div>
    <h2>首页</h2>
    <p>{{$store.state.content}}</p>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='incrementAll(5)'>+all</button>
    <button @click='decrementAll(5)'>-all</button>
    <button @click='incrementList1'>addList</button>
    <button @click='decrementList1'>romveList</button>
    <button @click='test1'>action异步</button>
    <p>----------------getters------------</p>
    <h2>moreAge{{$store.getters.moreAge(3)}}</h2>
    <h2>lessAge{{$store.getters.lessAge(2)}}</h2>
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
  data(){
    return {
    }
  },
  methods:{
    increment(){
      console.log(this.$store)
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    incrementAll(num){
      this.$store.commit('incrementAll',num)
    },
    decrementAll(num){
      this.$store.commit('decrementAll',num)
    },
    incrementList1(){
      let ob = {id:2,name:'M',age:11}
      this.$store.commit('incrementList1',ob)
    },
    decrementList1(){
      this.$store.commit('decrementList1')
    },
    test1(){//action异步操作
      this.$store.dispatch('test1')
      .then((data)=>{
        console.log('内部操作已经完成\n数据：',data)
      })
    }
  }
}
</script>

<style>

</style>