/*const nm = require('nodemailer');   //导入模块
//第三方模块使用
let nmobj = nm.createTransport({
    host:'smtp.qq.com',
    port:465,
    secure:true,
    auth:{
        user:'3167996087@qq.com',
        pass:'islpoffhafgndeab'
    }
});

let data = {
    from:'3167996087@qq.com',
    to:'992941783@qq.com',
    subject:'i',
    text:'test'
};

nmobj.sendMail(data);*/

const send = require('../../customModu/sendMail/sendMail01')    //导入模块
send.sendMail01('smtp.qq.com:465','epxqhizyucjibfbe','992941783','992941783','2019-12-3|How are you!')  //使用模块方法


