const https = require('https'); //导入模块  ，https请求
const http = require('http');   //导入模块  ，http请求
const fs = require('fs');       //导入模块 ，文件操作
const cheerio = require('cheerio'); //导入模块,分析数据
const request = require('request'); //导入请求
const iconv = require('iconv-lite');

let url = 'https://source.qunarzz.com/common/hf/logo.png';
request(url,(err,response,data)=>{
    let base64 = iconv.decode(data,'base64').toString();
    // console.log(base64);
    var databuffer = new Buffer(base64,'base64');
    fs.writeFile('./image.png',databuffer,(err)=>{
        if(err){
            console.log('写入失败');
        }else{
            console.log('写入成功');
        }
    })
})