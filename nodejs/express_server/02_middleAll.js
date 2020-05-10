/*
全局拦截，全部api接口都会经过此拦截。
*/

const express = require('express');
let app = express();
app.use('/',(req,res,next)=>{   //中间件，拦截器，功能：为了简化代码，为此下的api接口执行统一的代码,避免重复的代码重复书写.第一个参数pathname如果是根目录，可以省略。
    let {token} = req.query;
    console.log('中间件');
    if(req.query.token){  //将所有api需要的代码写到此处。
        next(); //继续执行下边的api接口内容
    }else{
        res.send('缺少字符串');
    }
});
app.get('/user/test1',(req,res)=>{    //api
    console.log('test1');
    res.send({statu:'test1 ok'});
});
app.get('/user/test2',(req,res)=>{    //api
    console.log('test2');
    res.send({statu:'test2 ok'});
});

app.listen('3000',()=>{ //监听端口
    console.log('server start');
})

