//user路由
//模块导入
const express = require('express')
// const bodyParser = require('body-parser')
//连接数据表模型
let userModel = require('../db/mudel/uesrModel')//user表模型，用于数据库操作
//路由实例化
let router = express.Router();
//使用中间件

//api接口
    //注册接口
    router.post('/reg',(req,res)=>{
        let {name,ps,banji} = req.body    //取得前端数据
        //通过查询数据库判断用户名是否和数据库重复
        userModel.findOne({name})
            .then((data)=>{
                if(data){
                    res.send('用户名重复')
                }else{
                    //数据库操作 ，执行添加操作
                    userModel.insertMany({name,ps,banji})
                        .then((data)=>{
                            res.send('注册成功')  //返回数据
                        }).catch((err)=>{
                            res.send('注册失败')    //返回数据
                            console.log('添加err：'+err+'')   //错误信息
                    })
                }
            }).catch((err)=>{
                console.log('查询err：'+err)
        })
        // userModel.deleteMany({},(err,data)=>{if(err){console.log('删除ok')}else{console.log('删除失败')}})//清空数据库
    });
    //登录接口
    router.post('/login',(req,res)=>{
        //获取前端数据
        let {name,ps,banji} = req.body
        //查询数据库是否有此账户
        userModel.findOne({name})
            .then((data)=>{
                //判断数据库书否存在此账户
                if(data){
                    //账户合法，判断密码是否正确
                    if(data.ps == ps){
                        //密码正确
                        res.send('登录成功')
                    }else{
                        //密码不正确
                        res.send('密码不正确')
                    }
                }else{
                    //如果没有此账户，返回账户不存在
                    res.send('账户不存在')
                }

            }).catch((err)=>{
                //用户名查询失败
                console.log('用户查询err：'+err)
        })
    })



//导出模块
module.exports = router