const express = require('express')
const crawler = require('crawler')

let handle = new crawler({
    callback:function(err,res,done){
        console.log(res.body);
    }
})
handle.queue([{
    headers:{'User-Agent':'requests'},
    jQuery:false,
    uri:'https://www.919yy.com/mov/?v=%E7%BB%88%E7%BB%93%E8%80%85',
}])