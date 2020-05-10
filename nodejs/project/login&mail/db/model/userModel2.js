//数据库表模型
//导入模块
const mongoose = require('mongoose')
//schema对象
let userSchema = mongoose.Schema({  //userSchema
    name:String,
    ps:String,
    banji:String
})
//模型
let user = mongoose.model('user',userSchema)    //user模型
//导出
module.exports = user