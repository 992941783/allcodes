const https = require('https')
const cheerio = require('cheerio')
const mongoose = require('mongoose')
const URL = require('url')

//连接数据库
mongoose.connect('mongodb://localhost/admin',{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('error',(err)=>{
    console.log('数据库连接失败')
}).on('open',()=>{
    console.log('数据库连接成功')

});
//创建schema对象
let alianjia = mongoose.Schema({
    bigUrl:String,
    doc:String,
    price:String,
    place:String
})
//转对象
let a = mongoose.model('lianjias',alianjia)
//获取大页面
function getDatas(url){
    if(URL.parse(url).protocol == 'http:'){

    }else if(URL.parse(url).protocol == 'https:'){
        https.get(url,(res)=>{
            let datas = '';
            if(res.statusCode != 200){return console.log('请求状态吗错误'+res.statusCode+'\n'+url+'')}
            res.on('data',(chunk)=>{
                datas += chunk
            }).on('end',()=>{
                //处理datas
                let $ = cheerio.load(datas);
                $('a').each((index,el)=>{
                    if($(el).attr('class')=='content__list--item--aside'){
                        a.find({bigUrl:'https://zz.lianjia.com'+$(el).attr('href')}).then((data)=>{
                            //查询，防止重复
                            if(data.length>0){//不允许写入
                                console.log('已存在')
                            }else{//允许写入
                                //添加
                                a.insertMany({bigUrl: 'https://zz.lianjia.com'+$(el).attr('href')}).then(()=>{
                                    console.log('添加成功')
                                }).catch((err)=>{
                                    console.log('添加失败'+err+'')
                                })
                            }
                        }).catch((err)=>{
                            console.log('查询失败:'+err+'')
                        })
                    }
                })
            })
        })
    }else{
        console.log('什么都不是')
    }
}
//获取详细数据
function getSDatas(url){
    let datas = '';//页面数据
    https.get(url,(res)=>{
        if(res.statusCode != 200){return console.log('请求状态码错误')}
        res.on('data',(chunk)=>{
            datas += chunk;
        }).on('end',()=>{//传输结束
            //分析数据
            let $ = cheerio.load(datas)
            //查询数据
            a.find({bigUrl:url}) .then((data)=>{
                    if(data.bigUrl&&data.price&&data.doc){//不允许写入
                        console.log('已存在')
                    }else{//允许写入
                        //添加数据
                        a.updateOne({bigUrl:url},{$set:{price:$('div.content__aside--title').children('span').text(),doc:$('ul.content__aside__list').children().eq(0).text()+','+$('ul.content__aside__list').children().eq(1).text()+','+$('ul.content__aside__list').children().eq(2).text(),place:$('p.content__title').text()}})
                            .then(()=>{
                                console.log('更新成功');
                            }).catch((err)=>{
                                console.log('更新失败',err)
                        })
                    }
                }).catch((err)=>{console.log('查询失败:',err)})
        })
    })
}
//一
/*for(let i=1; i<101; i++){
    getDatas(`https://zz.lianjia.com/zufang/pg${i}`)
}*/
//二
a.find({bigUrl:/https/}).then((datas)=>{
    console.log(datas.length)
    for(let i=1300; i<datas.length; i++){
        setTimeout(function(){
            getSDatas(datas[i].bigUrl)
        },20000)
    }
}).catch((err)=>{
    console.log(err)
})

