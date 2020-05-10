//食品表模型
const mongoose = require('mongoose')
let foodSchema = mongoose.Schema({
    name:String,
    fenlei:String,
    price:String,
    doc:String,
    pingjia:String,
    img:{type:String,required:true}
})

let food = mongoose.model('foods',foodSchema)
module.exports = food