const express = require('express')
let app = express()

/**
* @api {post} /food/add 添加菜品
* @apiName add
* @apiGroup food
* @apiParam {String} us 用户名
* @apiParam {String} ps 密码
* @apiParam {String} code 随机数
*/
app.post('/food/add',(req,res)=>{
    let {us,ps,code} = req.body
    res.send({err:'0',msg:'ok'})
})

app.listen(3000,(err)=>{
    if(err){
        console.log(`server nook ${err}`)
    }else{
        console.log(`server ok`)
    }
})

/**
 *@api {post} /food/del 删除菜品
 *@apiName del
 *@apiGroup food
 *@apiParam {String} us 用户名
 * @apiParam {String} ps 密码
 * @apiParam {String} code 随机数
*/

/**
* @api {post} /food/update 修改菜品
 * @apiName update
 * @apiGroup food
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 密码
 * @apiParam {String} code 随机数
* */

/**
 * @api {post} /food/find 查询菜品
 * @apiName find
 * @apiGroup food
 * @apiParam {String} us 用户名
 * @apiParam {String} ps 密码
 * @apiParam {String} code 随机数
 * */