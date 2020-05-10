//入口主文件，接口。
//导入模块
const express = require('express'); //express框架
const bodyParser = require('body-parser')   //解析post数据
const db = require('./db/mongoStart.js'); //连接数据库
const app = express();//实例化
//使用中间件
app.use(bodyParser.json())  //解析post请求的数据
app.use(bodyParser.urlencoded({extended:false}))    //解析post请求的数据
//导入路由
let userRouter = require('./router/userRouter');    //user路由
//使用路由
app.use('/user',userRouter) //user路由使用
//api接口

//监听端口
app.listen(3000,()=>{
    console.log('端口打开')
})