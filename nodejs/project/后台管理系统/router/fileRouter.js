//文件路由
const express = require('express')
let router = express.Router()
const multer = require('multer')

//上传图片
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./project/后台管理系统/static/img')
    },
    filename:(req,file,cb)=>{
        let date = new Date()
        let random = date.getTime()+parseInt(Math.random()*10000)//随机名
        let type  =file.mimetype.split('/')[1]//类型
        cb(null,`${random}.${type}`)
    }
})
let add = multer({
    storage:storage
})
/**
 * @api {post} /file/addImg 上传图片
 * @apiName addIme
 * @apiGroup file
 * @apiParam {file} hhh 键名
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} why 说明
 * @apiSuccess {String} path 文件相对路径(无主机&端口号)
 * */
router.post('/addImg',add.single('hhh'),(req,res)=>{
    if(req.file.size > 500000){return res.send({err:1,why:'上传失败，文件太大'})}
    res.send({err:0,why:'上传成功',path:`img/${req.file.filename}`})
})

module.exports = router
