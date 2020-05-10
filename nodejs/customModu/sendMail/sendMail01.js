let mail = {
    sendMail(hostport,pass,from,to,text){
        const nm = require('nodemailer');    //导入模块

        let nmobj = nm.createTransport({    //创建nm对象
            host:hostport.split(':')[0],    //使用的邮箱主机号
            port:hostport.split(':')[1],    //使用的邮箱主机端口
            secure:true,    //端口处理
            auth:{  //对象
                user:''+from+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'',   //使用者邮箱
                pass:pass   //使用者邮箱pop密码
            }
        });
        let data = {    //定义对象
            from:''+from+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'',   //发送方邮箱地址
            to:''+to+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'',     //接收方邮箱地址
            subject:text.split('|')[0],              //标题
            text:text.split('|')[1]                   //内容
        };
        //测试
            console.log('host：',hostport.split(':')[0])
            console.log('port:',hostport.split(':')[1])
            console.log('secure:','true')
            console.log('auth.user:'+from+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'')
            console.log('auth.pass:',pass)
            console.log()
            console.log('from:'+from+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'')
            console.log('to:'+to+'@'+hostport.split('.')[1]+'.'+hostport.split('.')[2].split(':')[0]+'')


        nmobj.sendMail(data,(err,data)=>{
            /*if(err){
                console.log(err)
            }*/
        });   //发送 格式：对象.sendMail(发送对象)
    }
}
//调用方法
mail.sendMail('smtp.qq.com:465','epxqhizyucjibfbe','992941783','992941783','1');
//循环发送
// setInterval(()=>{send01.sendMail01('smtp.qq.com:465','epxqhizyucjibfbe','992941783','2436824874','1')},10)
//导出模块
module.exports=mail;