const express = require('express')
const router = express.Router()
const userModel = require('../mongodb/model/userModel')
const sendMail = require('../tool/mail')

//全局变量
let userMailCode = {}//验证码缓存
let userMailTime = {}//时间缓存
let count = 0
//邮箱验证码接口
/**
 * @api {post} /food/getMailCode 获取邮箱验证码（五分钟内上限三次）
 * @apiName getMailCode
 * @apiGroup user
 * @apiParam {String} mailUser 邮箱账号
 *@apiSuccess {string} err  状态码
 *@apiSuccess {string} why  说明
*/
router.post('/getMailCode',(req,res)=>{//1.mailUser
    let {mailUser} = req.body
    let mailCode = Math.ceil(Math.random()*10000)
    let time = new Date()//当前时间
    userMailCode['mailUser'] = {mailCode,count}
    //安全验证
    if(!userMailTime['mailUser']){    //第一次请求，添加时间戳
        let newTime = new Date()
        userMailTime['mailUser'] = newTime    //将数据存入缓存
    }else{//验证请求时间，之前请求过
        let oldTime = userMailTime['mailUser']
        let newTime = time
        let oldMin = oldTime.getHours()*60+oldTime.getMinutes()+Math.ceil(oldTime.getSeconds()/60)//old分钟
        let newMin = newTime.getHours()*60+newTime.getMinutes()+Math.ceil(newTime.getSeconds()/60)//new分钟
        console.log(userMailCode['mailUser']['count'])
        if(Number(newMin)-Number(oldMin)>5){userMailCode['mailUser']['count']=0}  //如果超过五分钟，重新计算次数
    }
    if(userMailCode['mailUser']['count'] >= 3){return res.send({err:1,why:'五分钟内只能获取三次'})}

    //发送邮件
    sendMail.sendMail('smtp.qq.com:465','epxqhizyucjibfbe','992941783@qq.com',`${mailUser}`,`验证码|五分钟有效时间${mailCode}`)
        .then((data)=>{
            res.send({err:0,why:'getMailCode ok'})
            count += 1
            userMailCode['mailUser'] = count
        }).catch((err)=>{
            res.send({err:-1,why: 'getMailCode no ok,稍后重试'})
            console.log(`getMailCode Err:账户(${mailUser}),err(${err})`)
    })
})
//注册接口
/**
 * @api {psot} /user/reg 管理员注册
 * @apiName reg
 * @apiGroup user
 * @apiParam {String} us 账号（邮箱账号）
 * @apiParam {String} ps 密码
 * @apiParam {String} code 邮箱验证码
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
 * */
router.post('/reg',(req,res)=>{//1.us 2.ps 3.code
    let {us,ps,code} = req.body
    if(!code){return res.send({err:2,why:'请输入验证码'})}    //没有验证码
    if(userMailCode[us] != code){return res.send({err:2,why:'验证码错误'})}//验证码错误
    userModel.find({us},(err,data)=>{
        if(err){//查询失败
            console.log(`user查询失败:账户（${us}） ,err:(${err})`)
            res.send({err:-1,reg:'no ok'})
        }else{//查询成功
            if(data.length>0){//数据库已有数据，不允许注册
                res.send({err:1,why:'用户名重复'})
            }else{//数据库无数据，允许注册
                userModel.insertMany({us,ps})
                    .then((data)=>{ //添加成功，注册成功
                        res.send({err:0, why:'注册成功'})
                    }).catch((err)=>{   //添加失败，注册失败
                        res.send({err:3, why:'注册失败'})
                        console.log(`user注册失败：账户（${us}）,err(${err}err)`)
                })
            }
        }
    })
})
//登录接口
/**
 * @api {post} /user/login 管理员登录
 * @apiName login
 * @apiGroup user
 * @apiParam {String} us 账户（邮箱账号）
 * @apiParam {String} ps 密码
 * @apiSuccess {string} err  状态码
 * @apiSuccess {string} why  说明
* */
router.post('/login',(req,res)=>{//1.us,ps
    let {us,ps} = req.body
    userModel.find({us,ps})
        .then((data)=>{//查询成功
            if(data.length>0){//合法用户
                res.send({err:0,why:'登录成功'})
            }else{//非法用户
                res.send({err:2,why:'登录失败，用户名或密码错误'})
            }
        }).catch((err)=>{//查询失败
            res.send({err:1,why:'登录失败，稍后重试'})
            console.log(`查询失败：账户(${us}),密码(${ps}),err(${err})`)
    })
})


module.exports = router