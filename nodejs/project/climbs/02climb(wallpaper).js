const mongoose = require('mongoose');
const https = require('https');
const http = require('http')
const cheerio = require('cheerio')
const fs = require('fs')

//连接数据库
mongoose.connect('mongodb://localhost/admin',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('error',(err)=>{
    console.log('mongodb no ok')
}).on('open',()=>{
    console.log('mongodb ok');

})
//创建表对象
let aS = mongoose.Schema({
    url:String
})
let a = mongoose.model('wallPapers',aS)

//获取页面图片url方法
function getDatas(url){
    //判断协议
    let U = new URL(url);
    if(U.protocol == 'https:'){//https协议
        https.get(url,(res)=>{
            let datas = '';
            if(res.statusCode != 200){return console.log('请求状态码错误'+res.statusCode+'')}
            res.on('data',(chunk)=>{//传输中
                datas += chunk;
            }).on('end',()=>{//页面传输完成
                let $ = cheerio.load(datas)
                $('img.thumb_img').each((index,el)=>{
                    console.log($(el).attr('src'))
                })
            })
        })
    }else if(U.protocol == 'http:'){//http协议
        http.get(url,(res)=>{
            let datas = '';
            if(res.statusCode != 200){return console.log('请求状态码错误'+res.statusCode+'')}
            res.on('data',(chunk)=>{//传输中
                datas += chunk;
            }).on('end',()=>{//页面传输完成
                let $ = cheerio.load(datas)
                //便遍历img
                $('img.thumb_img').each((index,el)=>{
                    a.insertMany({url:$(el).attr('src')})
                        .then(()=>{//添加成功
                            console.log(`>>>>>>>>>>>>>>>>>>>>>>第${url.substr(56)}页第${index}条数据添加成功>>>>>>>>>>>>>>>>>>>>>>`)
                        }).catch((err)=>{//添加失败
                        console.log(`>>>>>>>>>>>>>>>>>>>>>>第${url.substr(56)}页第${index}条数据添加失败>>>>>>>>>>>>>>>>>>>>>>err:${err}`)
                    })
                })
            })
        })
    }else{
        console.log('啥也不是')
    }
}
//下载图片
function downloadImg(url,path){
    //方法一
    /*http.get(url,(res)=>{
        if(res.statusCode != 200){return console.log('请求状态码错误:',res.statusCode)}
        res.pipe(fs.createWriteStream(path))
    })*/
    //方法二
    http.get(url,(res)=>{
        if(res.statusCode != 200){return console.log('请求状态码错误:',res.statusCode)}
        let datas = '';
        res.setEncoding('binary');
        res.on('data',(chunk)=>{
            datas += chunk;
        }).on('end',()=>{
            fs.writeFile(path,datas,'binary',(err)=>{
                if(err){
                    console.log('写入失败')
                }else{
                    console.log('保存成功')
                }
            })
        })
    })
}
//更改数据库数据
function updateU(oldUrl,newUrl){
    a.update({url:oldUrl},{url:newUrl},(err,res)=>{
        if(err){console.log('更改失败：',err)}else{console.log('更改成功')};
    })
}
/*//判断文件是否为空
/!*for(let i=0; i<files.length; i++){
    fs.stat(files[i],(err,stats)=>{
        if(!err){
            if(stats.size <100){
                fs.unlink(path,(err)=>{
                    if(err){
                        console.log('删除文件err：'+err)
                    }else{
                        console.log('筛选成功')
                    }
                })
            }
        }
    })
}*!/*/
//循环取出数据库数据下载图片
a.find({url:/http/})
    .then((data)=>{
        for(let i=0; i<data.length; i++){
            downloadImg(data[i],`D:/img/wallpaper/girls/${i}.jpg`)
            // updateU(data[i].url,urld);//更改数据。
        }
    }).catch((err)=>{
        console.log('查询失败',err)
})
//导出
module.exports = a;
