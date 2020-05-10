//路由
//导入模块
    const express = require('express')
    const Mail = require('../tool/mail')
//导入数据库模型
    const userModel = require('../db/model/userModel2')  //userModel
//路由实例化
    let router = express.Router()
//全局变量
    let userMailCode = {}
//api
    //注册api
    router.post('/reg',(req,res)=>{//1.name，2.ps，3.banji，4.mailName，5.maliCode
        //获得数据
        let {name,ps,banji,mailName,mailCode} = req.body
        //处理数据
        if(userMailCode[mailName] != mailCode){return res.send('验证码错误')}
        userModel.findOne({name})
            .then((data)=>{ //查询name成功
                if(data){   //数据库有此用户名
                    res.send('用户已存在')
                }else{//数据库无此用户名
                    //将数据添加到数据库中
                    userModel.insertMany({name,ps,banji})
                        .then((data)=>{ //添加数据成功
                            res.send('注册成功')
                        }).catch((err)=>{   //添加数据失败
                            console.log('添加dataErr：'+err)
                    })
                }
            }).catch((err)=>{   //查询name失败
                console.log('查询regNameErr:'+err)
        })
    })
    //登录api
    router.post('/login',(req,res)=>{   //前端传参:1.name，2.ps，3.banji，4.mailName，5.maliCode
        //获得数据
        let {name,ps,banji,mailName,mailCode} = req.body
        //处理数据
        if(userMailCode[mailName] != mailCode)return res.send('验证码错误')
        userModel.findOne({name})//查找数据库有没有此用户
            .then((data)=>{//查询成功
                if(data){//数据库有loginName
                    if(data.ps==ps){//用户密码正确
                        res.send('登录成功')
                    }else{//用户密码错误
                        res.send('密码错误')
                    }
                }else{//数据库没有loginName
                    res.send('用户名不正确')
                }
            }).catch((err)=>{//查询失败
                console.log('查询loginNameErr:'+err)
            })
    })
    //邮箱验证api
    router.post('/getMail',(req,res)=>{ //前端传参：1、mailName
        //获取数据
        let {name,mailName} = req.body
        //处理数据
        let mailCode = parseInt(Math.random()*10000)//随机生成验证码
        userMailCode[mailName] = mailCode
        console.log(userMailCode)//测试
        Mail.sendMail('smtp.qq.com:465','epxqhizyucjibfbe','992941783@qq.com',`${mailName}`,`验证码|五分钟有效时间${mailCode}`)
            .then(()=>{//发送成功
                res.send('验证码发送成功')
            }).catch((err)=>{//发送失败
                console.log('验证码发送Err：'+err)
                res.send('验证码发送失败，稍后重试')
        })
        //返回数据
    })
//导出模块
    module.exports = router