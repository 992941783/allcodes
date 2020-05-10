const express = require('express'); //导入模块
let router = express.Router();  //路由

router.get('/apple',(req,res)=>{    //get请求,api
    res.send({statu:'apple ok'})
});
router.get('/banana',(req,res)=>{
    res.send({statu:'banana ok'})
});

module.exports = router;    //导出路由
