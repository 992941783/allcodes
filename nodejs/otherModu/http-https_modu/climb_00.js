//导入http模块
const https = require('https'); //导入模块  ，https请求
const http = require('http');   //导入模块  ，http请求
const fs = require('fs');       //导入模块 ，文件操作
const cheerio = require('cheerio'); //导入模块,分析数据

//get方法
let url = 'https://www.qunar.com/'; //url
https.get(url,(res)=>{   //回调函数
    //数据判断
    const {statusCode} = res;   //获取状态码
    const contentType = res.headers['content-type'];    //获取数据类型
    let err = null; //定义变量，存放异常。
    if(statusCode != 200){  //如果状态码不是200
        err = new Error('请求状态码错误');     //将创建一个对象
    }else if(contentType.split(';')[0] != 'text/html'){
        err = new Error('数据类型不符合');
    }
    if(err){    //如果有err异常
        res.resume; //重置缓存
        return false;   //返回false
    }

    //数据处理
    let sum = '';   //定义空字符串，用来放数据。
    //当有数据时的事件，执行此回调。
    res.on('data',(chunk)=>{
        console.log('-----------数据传输中-------------');
        sum += chunk.toString('utf8');  //将每次的数据累加到sum中。
    })

    //当数据传输结束时，执行此事件回调函数。
    res.on('end',()=>{
        //分析数据（sum）到本地
        let httpsarray = [];
        console.log('传输完成');
        let $ = cheerio.load(sum);   //将源文件赋值给$
        $('img').each((index,el)=>{     //节点.each方法循环
            let url = $(el).attr('src');    //提取的信息，未处理
            if(url.split('//')[0]==''){ //判断url是否有协议。https/http
                url = 'https:'+url+'';
                httpsarray.push(url);
            }
            else if(url.split(':')[0]=='http'){
                url.split(':')[0] = 'https';
                httpsarray.push(url);
            }else{
                httpsarray.push(url);
            }
        })
        console.log(httpsarray);

    })
}).on('error',(err)=>{     //请求失败，回调函数。
    console.log('请求失败');
})