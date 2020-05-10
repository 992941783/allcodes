//账户表模型
const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
    us:String,
    ps:String,
})
let user = mongoose.model('users',userSchema)

module.exports = user