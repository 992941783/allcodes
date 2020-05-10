//连接数据库
const mongoose = require('mongoose')
//连接
mongoose.connect('mongodb://localhost/test00',{ useNewUrlParser: true,useUnifiedTopology: true} )
//监听
mongoose.connection.on('error',(err)=>{
    console.log('数据库连接失败')
    console.log('错误信息'+err+'')
})
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功')
})
