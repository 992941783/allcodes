//模块
const express = require('express')
const app = express()
//解析数据
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const path = require('path')
app.use(express.static(path.join(__dirname,'./static')))
const mongoStart = require('./mongodb/mongoStart')//连接数据库
//路由
const foodRouter = require('./router/foodRouter')//路由：food
const userRouter = require('./router/userRouter')//路由：user
const fileRouter = require('./router/fileRouter')//路由：file
//use路由
app.use('/food',foodRouter)
app.use('/user',userRouter)
app.use('/file',fileRouter)


app.listen(3000,(err)=>{
    if(err){
        console.log('services no ok'+err)
    }else{
        console.log('services ok')
    }
})