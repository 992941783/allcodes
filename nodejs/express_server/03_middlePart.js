/*
局部拦截，只在某特定api内拦截，中间件。
*/

const express = require('express')  //导入模块
let app = express() //express框架实例化
app.get('/test1',(req,res,next)=>{  //api接口，此函数为中间件，next()是继续向下执行。
    console.log('fun1') //输出
    next()  //继续向下执行
},(req,res,next)=>{ //有一个中间件【拦截器】，
    console.log('fun2') //输出
    next()  //继续向下执行
},(req,res)=>{  //正常api处理
    console.log('fun3') //输出
})

app.listen('3000',function(){   //监听端口。函数：【function(){}】 == 【let a = ()=>{}】箭头函数
    console.log('server start') //输出
})