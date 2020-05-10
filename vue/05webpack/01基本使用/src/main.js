const math = require('./js/math.js')
require('./css/index.css')
require('./css/00.less')
// const Vue = require('vue')
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  el:'#app',
  template:'<App/>',
  components:{
    App
  },
})

