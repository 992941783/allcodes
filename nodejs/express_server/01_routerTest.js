const express = require('express'); //导入框架
const app = express();  //express实例化
let userRouter = require('./01Router_test/01_userRouter');    //导入路由
let foodRouter = require('./01Router_test/00_foodRouter');    //导入路由

app.use('/user',userRouter);    //使用路由
app.use('/',foodRouter);    //使用路由

app.listen(3000,()=>{ //监听端口
    console.log('server ok');   //输出
})