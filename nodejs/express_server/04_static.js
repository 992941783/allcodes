/*express方法static:静态目录*/

const express = require('express')
const path = require('path')    //内置模块
let app = express()
app.use('/public',express.static(path.join(__dirname,'./04_static'))) //中间件，path模块合并路径，设置为静态目录。

app.listen(3000,(req,res)=>{  //监听端口。
    console.log('server start')
})