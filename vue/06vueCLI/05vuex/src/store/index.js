import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    content:1,
    list1:[
      {id:1,name:'L',age:19},
      {id:1,name:'M',age:19},
      {id:1,name:'L',age:19},
      {id:1,name:'L',age:19},
      {id:1,name:'L',age:19},
    ]
  },
  mutations: {
    increment(state){
      state.content++
    },
    decrement(state){
      state.content--
    },
    incrementAll(state,num){
      state.content += num
    },
    decrementAll(state,num){
      state.content -= num
    },
    incrementList1(state,ob){
      state.list1.push(ob)
    },
    decrementList1(state){
      state.list1.pop()
    }
  },
  getters:{
    moreAge(state,getters){//可以拿到其他getter
      return age => {
        return state.list1.filter(a => a.age > age)
      }
    },
    lessAge(state){
      return age => {
        return state.list1.filter(a => a.age < age)
      }
    }
  },
  actions: {
    test1(context){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          context.commit("increment")
          resolve(111)
        }, 1000);
      })
    }
  },
  modules: {
  }
})
