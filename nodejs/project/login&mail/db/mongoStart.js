//连接数据库
//导入模块
const mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost/test00', { useUnifiedTopology: true ,useNewUrlParser:true})
//监听数据库
mongoose.connection.on('err',(err)=>{
    console.log('数据库连接err：'+err)
})
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功')
})