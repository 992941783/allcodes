//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test00',{ useNewUrlParser: true,useUnifiedTopology: true} )
mongoose.connection.on('error',(err)=>{
    console.log('数据库连接失败'+err)
})
mongoose.connection.once('open',()=>{
    console.log('数据库连接成功')
})