//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/admin', { useUnifiedTopology: true,useNewUrlParser:true })
mongoose.connection.on('err',(err)=>{
    console.log(`数据库连接失败${err}`)
})
mongoose.connection.once('open',()=>{
    console.log(`数据库连接成功`)
})