//数据库表模型：user表
const mongoose = require('mongoose')
//schema对象
let userSchema = mongoose.Schema({
    name:String,
    ps:{type:{Number,String}},
    banji:String
})
//表模型
let userModel = mongoose.model('user',userSchema)
//导出
module.exports = userModel
