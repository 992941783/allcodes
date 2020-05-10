//创建表
const mongoose = require('mongoose')
let imgSchema = mongoose.Schema({
    url:String
})
let img = mongoose.model('img',imgSchema)
module.exports = img