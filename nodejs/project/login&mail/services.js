//入口文件
//导入模块
    const express = require('express')  //框架
    const db = require('./db/mongoStart')//连接数据库
    const bodyParser = require('body-parser')//解析post请求的body数据
//模块实例化
    let app = express()
//中间件
    app.use(bodyParser.urlencoded({extended:false}))//解析body数据
    app.use(bodyParser.json())//解析post请求的json格式数据
//引入路由
    const userRouter = require('./router/userRouter')   //user路由
//使用路由
    app.use('/user',userRouter) //user路由使用

//监听端口
    app.listen(3000,(err)=>{
        if(err){
            console.log('监听端口err：'+err)
        }else{
            console.log('端口已打开')
        }
    })