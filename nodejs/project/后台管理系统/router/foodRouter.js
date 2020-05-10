//菜品路由
const express = require('express')
const router = express.Router()
const foodModel = require('../mongodb/model/foodModel')//food表模型

//增加菜品
/**
 * @api {post} /food/add 添加菜品
 * @apiName add
 * @apiGroup food
 * @apiParam {String} name 菜名
 * @apiParam {String} fenlei 分类
 * @apiParam {String} price 价格
 * @apiParam {String} doc 描述
 * @apiParam {String} pingjia 评价
 * @apiParam {String} img 图片相对路径（无需主机&端口）
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
 * */
router.post('/add',(req,res)=>{
    let {name,fenlei,price,doc,pingjia,img} = req.body
    if(name&&fenlei&&price&&doc&&pingjia&&img){//传参完整，可以写入
        foodModel.findOne({name})       //查找数据
            .then((data)=>{     //查找成功
                if(data){      //菜名重复，不可添加
                    return res.send({err:2,why:'菜名重复'})
                }else{                  //可以添加
                    foodModel.insertMany({name,fenlei,price,doc,pingjia,img})   //增加数据
                        .then((data)=>{ //增加成功
                            res.send({err:0,why:'添加菜品成功'})
                        }).catch((err)=>{
                        res.send({err:2,why:'添加菜品失败'})
                        console.log(`添加菜品：菜品（${name}）,err(${err})`)
                    })
                }
            }).catch((err)=>{   //查找失败
                res.send({err:1,why:'添加失败'})
                console.log(`查询菜品：菜名(${name}),err(${err})`)
            })

    }else{//传参不全
        res.send({err:1,why:'参数不完整'})
    }

})
//删除菜品
/**
 * @api {post} /food/del 删除菜品
 * @apiName del
 * @apiGroup food
 * @apiParam {String} name 菜名
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
 * */
router.post('/del',(req,res)=>{
    let {name} = req.body
    foodModel.findOne({name})//查找数据
        .then((data)=>{//查找成功
            if(data){//有数据，可以删除
                foodModel.deleteOne({name})
                    .then((data)=>{//删除成功
                        res.send({err:0,why:'删除成功'})
                    }).catch((err)=>{//删除失败
                        res.send({err:2,why:'删除失败'})
                        console.log(`删除菜品：菜品${name},err：(${err})`)
                })
            }else{//不能删除
                res.send({err:2,why:'无此菜品'})
            }
        }).catch((err)=>{//查找失败
            res.send({err:1,why:'删除失败'})
            console.log(`查找菜品：菜品${name},err：(${err})`)
    })
})
//修改菜品
/**
 * @api {post} /food/update 修改菜品
 * @apiName update
 * @apiGroup food
 * @apiParam {String} name 菜名
 * @apiParam {String} fenlei 分类
 * @apiParam {String} price 价格
 * @apiParam {String} doc 描述
 * @apiParam {String} pingjia 评价
 * @apiParam {String} img 图片相对路径（无需主机&端口）
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
 * */
router.post('/update',(req,res)=>{
    let {name,fenlei,price,doc,pingjia,img} = req.body
    foodModel.findOne({name})//查找数据
        .then((data)=>{//查找成功
            if(data){//可以修改
                foodModel.updateOne({name},{name,fenlei,price,doc,pingjia,img})//修改数据
                    .then((data)=>{//修改成功
                        res.send({err:0,why:'修改菜品成功'})
                    }).catch((err)=>{//修改失败
                        res.send({err:3,why:'修改失败'})
                        console.log(`修改菜品:菜品(${name}),err(${err})`)
                })
            }else{//无此条数据不可修改
                res.send({err:2,why:'菜品不存在'})
            }
        }).catch((err)=>{//查找失败
            res.send({err:1,why:'修改菜品失败'})
            console.log(`修改菜品:菜品(${name}),err(${err})`)
    })
})
//关键字查询
/**
 * @api {post} /food/getDataByKw 关键字查询
 * @apiName getDataByKw
 * @apiGroup food
 * @apiParam {String} word 关键字
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
 * @apiSuccess {Array} data  查询返回的数据
 * */
router.post('/getDataByKw',(req,res)=>{
    let {word} = req.body
    let words = new RegExp(word)
    foodModel.find({$or:[{name:{$regex:words}},{doc:{$regex: words}}]})
        .then((data)=>{//find成功
            if(data.length){//有数据
                res.send({err:0,why:'查询成功',data})
            }else{//无数据
                res.send({err:1,why:'没有此数据'})
            }
        }).catch((err)=>{//find失败
            res.send({err:-1,why:'查询失败'})
            console.log(`关键字查询：word（${word}）,err(${err})`);
    })
})
//分类查询
/**
 * @api {post} /food/getDataByClass 分类查询
 * @apiName getDataByClass
 * @apiGroup food
 * @apiParam {String} word 查询字符串
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} why 说明
 * @apiSuccess {Array} data 查询返回的数据
 * */
router.post('/getDataByClass',(req,res)=>{
    let {word} = req.body
    foodModel.find({fenlei:word})
        .then((data)=>{//查询成功
            if(data.length>0){//有数据
                res.send({err:0,why:'查询成功',data})
            }else{//无数据
                res.send({err:1,why:'没有此数据'})
            }
        }).catch((err)=>{//查询失败
            res.send({err:2,why:'查询失败'})
            console.log(`分类查询：word（${word}）,err(${err})`);
    })
})
//分页查询
/**
 * @api {post} /food/getDataByPage 分页查询
 * @apiName getDataByPage
 * @apiGroup food
 * @apiParam {String} page 第几页
 * @apiParam {String} pageSize 每页大小
 * @apiSuccess {String} err 状态码
 * @apiSuccess {String} why 说明
 * @apiSuccess {Object} info 查询返回的数据
 * */
router.post('/getDataByPage',(req,res)=>{
    let pageSize = req.body.pageSize || 5
    let page = req.body['page'] || 1
    let allDataLength = 0;//数据库数据个数
    let allPageLength = 0;//数据总页数
    foodModel.find()
        .then((data)=>{
            allDataLength = data.length;    //数据库数据个数
            allPageLength = Math.ceil(data.length/pageSize);//数据库数据总页数
            return foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize));
        })
        .then((data)=>{//查找成功
            res.send({err:0,why:'查询成功',info:{data,allDataLength,allPageLength}})
        }).catch((err)=>{//查找失败
            res.send({err:1,why:'查询失败'})
            console.log(`分页查询：err(${err})`);
    })
})

module.exports = router