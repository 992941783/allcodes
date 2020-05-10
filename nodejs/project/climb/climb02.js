//爬虫
const https = require('https')  //爬取源码
const http = require('http')    //爬取源码
const cheerio = require('cheerio')  //分析源码
const fs = require('fs')
const mongoose = require('mongoose')
const imgModel = require('./db/Model/imgModel')//导入数据库表模型
let mongoStart = require('./db/mongoStart') //连接数据库


/*let url = 'http://wallpaperswide.com/girls-desktop-wallpapers/page/2'
let data = ''   //存放源码
http.get(url,(res)=>{   //获取源码
    // console.log(res)
    res.on('data',(chunk)=>{
        console.log('源码正在获取');
        data += chunk
    }).on('end',()=>{
        console.log('源码获取完成');
        // console.log(data)//源码
        let $ = cheerio.load(data)
        $('img').each((index,el)=>{   //循环取出
            if($(el).attr('src') == undefined){console.log('数据不合法')}//判断是否是合法链接
            else{
                //有效链接
                //导入进数据库
                let URL = $(el).attr('src')
                imgModel.findOne({URL})
                    .then((data)=>{
                        if(!data){//没有此条数据，可以写入
                            imgModel.create({url:$(el).attr('src')})
                                .then(()=>{
                                    console.log(`写入成功`)
                                })
                                .catch((err)=>{
                                    console.log(`写入失败:${err}`)
                                })
                        }
                    })
                    .catch((err)=>{
                        console.log(`查询失败：${err}`)
                    })



                // console.log($(el).attr('src'))  //有效连接
                //图片链接无协议时使用此判断
                /!*if(/png/.test($(el).attr('src')) || /gif/.test($(el).attr('src'))){ //判断是否是图片链接
                    if(/http/.test($(el).attr('src')) || /https/.test($(el).attr('src'))){  //判断是否有协议
                        console.log($(el).attr('src'))
                    }else{
                        let srct = 'http:'+$(el).attr('src')
                        console.log(srct)
                    }
                }*!/
            }
        })
    })
})*/


//爬取图片链接封装函数
function climbImg(url){
    let data = ''   //存放源码
    //判断什么协议
    if(/http/.test(url)){   //http协议
        http.get(url,(res)=>{   //获取源码
                                // console.log(res)
            res.on('data',(chunk)=>{
                // console.log('源码正在获取');
                data += chunk//将源码数据追加到一起
            }).on('end',()=>{
                // console.log('源码获取完成');
                // console.log(data)//源码
                let $ = cheerio.load(data)
                $('img').each((index,el)=>{   //循环取出
                    if($(el).attr('src') == undefined){console.log('数据不合法')}//判断是否是合法链接
                    else{
                        let URL = $(el).attr('src')
                        //有效链接
                        if(/http/.test(URL) || /https/.test(URL)){  //是正确URL
                            //导入进数据库
                            imgModel.findOne({url:URL})
                                .then((data)=>{
                                    if(!data){//没有此条数据，可以写入
                                        imgModel.create({url:$(el).attr('src')})
                                            .then(()=>{
                                                console.log(`写入成功`)
                                            })
                                            .catch((err)=>{
                                                console.log(`写入失败:${err}`)
                                            })
                                    }
                                })
                                .catch((err)=>{
                                    console.log(`查询失败：${err}`)
                                })
                        }else{//不是正确URL
                            console.log(`链接不正确:${URL}`)
                        }


                        //图片链接无协议时使用此判断
                        /*if(/png/.test($(el).attr('src')) || /gif/.test($(el).attr('src'))){ //判断是否是图片链接
                            if(/http/.test($(el).attr('src')) || /https/.test($(el).attr('src'))){  //判断是否有协议
                                console.log($(el).attr('src'))
                            }else{
                                let srct = 'http:'+$(el).attr('src')
                                console.log(srct)
                            }
                        }*/
                    }
                })
            })
        })

    }else{//https协议
        https.get(url,(res)=>{   //获取源码
                                // console.log(res)
            res.on('data',(chunk)=>{
                // console.log('源码正在获取');
                data += chunk//将源码数据追加到一起，一个变量中
            }).on('end',()=>{
                // console.log('源码获取完成');
                // console.log(data)//源码
                let $ = cheerio.load(data)
                $('img').each((index,el)=>{   //循环取出
                    if($(el).attr('src') == undefined){console.log('数据不合法')}//判断是否是合法链接
                    else{
                        let URL = $(el).attr('src')
                        //有效链接
                        if(/http/.test(URL) || /https/.test(URL)){  //是正确URL
                            //导入进数据库
                            imgModel.findOne({url:URL}) //判断数据库中是否已经存在
                                .then((data)=>{
                                    if(!data){//没有此条数据，可以写入
                                        imgModel.create({url:$(el).attr('src')})
                                            .then(()=>{
                                                console.log(`写入成功`)
                                            })
                                            .catch((err)=>{
                                                console.log(`写入失败:${err}`)
                                            })
                                    }else{
                                        console.log('已存在')
                                    }
                                })
                                .catch((err)=>{
                                    console.log(`查询失败：${err}`)
                                })
                        }else{//不是正确URL
                            console.log(`链接不正确:${URL}`)
                        }


                        //图片链接无协议时使用此判断
                        /*if(/png/.test($(el).attr('src')) || /gif/.test($(el).attr('src'))){ //判断是否是图片链接
                            if(/http/.test($(el).attr('src')) || /https/.test($(el).attr('src'))){  //判断是否有协议
                                console.log($(el).attr('src'))
                            }else{
                                let srct = 'http:'+$(el).attr('src')
                                console.log(srct)
                            }
                        }*/
                    }
                })
            })
        })

    }
}
//下载到本地封装函数
function downImg(imgUrl){

}
for(let i = 2; i <103; i++ ){
    console.log(`-------------------------------------------正在爬取第${i}页图片-----------------------------------------------`)
    climbImg(`http://wallpaperswide.com/girls-desktop-wallpapers/page/${i}`)
}

