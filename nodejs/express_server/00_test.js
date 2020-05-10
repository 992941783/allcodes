const express = require('express'); //导入express框架，功能：创建api
const bodyParser = require('body-parser');  //导入此插件，功能：获取post请求的body中的数据。获取请求参数,get:req.query; post:req.body
let app = express();    //模块实例化
app.use(bodyParser.urlencoded({extended:false}));   //表示使用此‘中间件’来解析消息体
app.use(bodyParser.json());


app.get('/user', (req, res) => {    //get方法，处理前台get请求。
    console.log(req.query.us, req.query.ps);
    if (req.query.us === 'hhh' && req.query.ps == 123) {
        res.send({login:'login ok',type: 1});
    } else {
        res.send({login:'login fail',type: 0});
    }
})

app.post('/reg',(req,res)=>{   //post方法，处理前台post请求
    let {us,ps} = req.body;
    console.log(req.body);
    if(us==='hhh'&&ps==123){
        res.send({req:'req ok',});
    }else{
        res.send({req:'req fail'});
    }
})

app.listen(3000,()=>{   //监听端口
    console.log('server start');
})