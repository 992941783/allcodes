const crawler = require('crawler');
const fs = require('fs');
const mongoose = require('mongoose');
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


a.find({url:/http/})
.then((data)=>{

}).catch((err)=>{
    console.log('数据库查询失败');
});
let handle = new crawler({
    callback:function(err,res,done){
        if(err){
            console.log(err);
        }else{
            console.log('抓取成功');
            fs.writeFile(`D:/img/wallpaper/girls/test01.jpg`,res.body,(err)=>{
                if(err){console.log('写入失败：',err)}else{console.log('写入成功')}
            })
        }
    }
})
handle.queue([{
    headers:{'User-Agent':'requests'},
    jQuery:false,
    uri:'http://wallpaperswide.com/download/beautiful_girls_34-1280x800.html',
   /* callback:function(err,res,done){
        //fun1
       /!* res.setEncoding('binary');
        if(err){
            console.log(err);
        }else{
            fs.writeFile(`D:/img/wallpaper/girls/test01.jpg`,res.body,'binary',(err)=>{
                if(err){console.log('写入失败：',err)}else{console.log('写入成功')}
            })
            // console.log(res.body);
        }*!/
       //fun2
        /!*res.setEncoding('binary');
        fs.createWriteStream(`D:/img/wallpaper/girls/test04.jpg`).write(res.body,'binary');
        done(console.log('结束'));*!/
    }*/
}])