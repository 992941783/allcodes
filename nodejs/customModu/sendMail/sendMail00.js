let send = {
    sendMail (hostport,pass,fromTo,subjectText) {
        const nm = require('nodemailer');        //导入nm模块
        //字符串处理
        let hostT = hostport.split(':')[0];      //邮箱主机号
        let portT = hostport.split(':')[1];     //邮箱端口号
        if (portT == '465') {     //secure参数处理
            let secureT = 'true'
        }else{
            let secureT = 'false'
        }
        let fromT = fromTo.split('|')[0];    //发送方邮箱号
        let toT = fromTo.split('|')[1];      //接收方邮箱号
        let fromUserT = ''+fromT+'@'+hostT.split('.',1)[1]+'';    //使用方邮箱地址
        let toTUserT = ''+toT+'@'+hostT.split('.',1)[1]+'';    //接收方邮箱地址
        let passT = pass;   //使用者邮箱密码
        let subjectT = subjectText.split('|')[0];    //发送标题
        let textT = subjectText.split('|')[1];   //发送内容
        let nmobj = nm.createTransport({
            host:hostT,
            port:465,
            secure:true,
            auth:{
                user:fromUserT,
                pass:passT
            }
        })

        let data = {
            from:fromUserT,
            to:toTUserT,
            subject:subjectT,
            text:textT
        }
        nmobj.sendMail(data)
    }
}
send.sendMail('smtp.qq.com:465','islpoffhafgndeab','3167996087|992941783','test|hello')
module.exports = send