//使用数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/admin',{useNewUrlParser:true, useUnifiedTopology: true })   //连接数据库
let db = mongoose.connection;
db.on('error',(err)=>{
    console.log('连接失败'+err+'')
})
db.once('open',()=>{
    console.log('连接成功')
})
//创建schema对象
let userSchema = mongoose.Schema({
    name:String,
    age:Number,
    sex:Number
})

//将schema对象转成模型
let user = mongoose.model('user',userSchema)
//数据库操作

// user.insertMany([{   //插入数据
//     name:'lll',
//     age:'19'
// },
//     {   //插入数据
//         name:'lll',
//         age:'19'
//     }])
// .then((data)=>{
//     console.log('添加成功')
// })
// .catch((err)=>{
//     console.log('fail')
// })

// user.find({name:'lll'})    //查找数据
// .then((data)=>{
//     // console.log('success'+data+'')
//     if(data.length>0){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
// })
// .catch((err)=>{
//     console.log('fail'+err+'')
// })

// user.updateOne({age:19},{$set:{age:20}})   //修改
// .then((data)=>{
//     console.log('修改成功');
// })
// .catch((err)=>{
//     console.log('修改失败')
// })

// user.deleteMany({age:{$gt:'10'}},(err)=>{
//     if(err){
//         console.log(''+err+'删除失败')
//     }else{
//         console.log('删除成功')
//     }
// })