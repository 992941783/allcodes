/*
功能：路由，为了避免将全部api接口写入到同一个文件中，从而造成混乱，将相同类型的api单独写入到一个文件中，并在主文件中引入此类api。
*/

const express = require('express')  //导入模块
let router = express.Router()
router.get('/add',(req,res)=>{  //请求
    res.send({stuta:'add ok'})
})
router.get('/del',(req,res)=>{  //请求
    res.send({stuta: 'del ok'})
})

module.exports = router; //导出