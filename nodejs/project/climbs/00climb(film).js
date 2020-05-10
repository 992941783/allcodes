//导库
const http = require('http');
const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
const jquery = require('../lib/jquery-3.4.1');
const mongoose = require('mongoose');

//连接数据库
    mongoose.connect('mongodb://localhost/admin', { useUnifiedTopology: true , useNewUrlParser: true });
    //连接
    let db = mongoose.connection;
    //监听连接状态
    db.on('error',(err)=>{
        console.log({err:0,why:'数据库连接失败'})
    }).on('open',()=>{
        console.log({err:1,why:'数据库连接成功'})
    })
    //创建schema对象
    let ch = mongoose.Schema({
        name:String,
        url:String
    });
    //schema转模型
    let chs  = mongoose.model('chs',ch)

//获取web数据方法，path如果没有就不会写入文件
function getDatas(url,label,attr,path) {
    https.get(url,(res)=>{
        var datas = '';//请求的数据
        var {statusCode} = res;
        if(statusCode!='200'){
            return console.log('请求状态码错误');
        }
        res.on('data',(chunk)=>{//传输中
            // console.log('数据传输中');
            datas += chunk;
        }).on('end',()=>{//传输结束
            //解析
            g(datas,'a','href',path)
        })
    })
}
//解析数据
function g(datas,label,attr,path){
    let $ = cheerio.load(datas);
    let a ;
    $(label).each((index,el)=>{
        if($(el).attr('class') == 'vodlist_thumb lazyload'){//获取符合的第一个数据
            a = $(el).attr(attr).replace('voddetail','vodplay').replace('.html','-1-1.html')
            chs.insertMany({name:$(el).attr('title'),url:'https://vod.919yy.com'+a})
                .then(()=>{
                console.log('添加成功')
            }).catch((err)=>{
                console.log({err:-1,why:err})
            })
        }
    })
}


//使用
for(let i=2; i <=221; i++){
    console.log(`===============================================第${i}张页面抓取中=============================================`)
    getDatas(`https://vod.919yy.com/vodshow/1--hits------${i}---.html`,'a','href','./url.txt')
    if(i == 221){
        console.log('即将完成')
    }
}

