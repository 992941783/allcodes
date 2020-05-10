const fs=require('fs')

//异步方法
fs.readdir('../',(err,data)=>{  //读取文件夹里文件目录
    console.log('readdir loading...')   //输出
    if(err){    //捕获错误
        console.log('readdir fail') //输出
        console.log('readdir over') //输出
    }else{  //其他
        console.log('readdir success')  //输出
        console.log(data)   //输出返回的数据
        console.log('readdir over') //输出
    }
})

fs.rmdir('./inFun/tast',(err)=>{    //删除文件夹
    console.log('rmdir loading...') //输出
    if(err){    //捕获错误
        console.log('rmdir fail')   //输出
        console.log(err)    //输出错误信息
        console.log('rmdir over')   //输出
    }else{  //其他
        console.log('rmdir success')    //输出
        console.log('rmdir over')   //输出
    }
})

fs.mkdir('./inFun/test',(err)=>{    //增加文件夹
    console.log('mkdir loading...') //输出
    if(err){    //捕获错误
        console.log('mkdir fail')   //输出
        console.log(err)    //输出错误信息
        console.log('mkdir over')   //输出
    }else{  //其他
        console.log('mkdir success')    //输出
        console.log('mkdir over')   //输出
    }
})

fs.rename('./inFun/test','./inFun/tesk',(err)=>{    //更改dirname
    console.log('rename loading...')    //输出
    if(err){    //捕获错误
        console.log('rename fail')  //输出
        console.log(err)    //输出错误信息
        console.log('rename over')  //输出
    }else{  //其他
        console.log('rename success')   //输出
        console.log('rename over')  //输出
    }
})



//同步方法
/*
//读取目录文件
try{
    console.log('readdir loading...')   //输出
    let a = fs.readdirSync('./inFun')   读取文件夹里文件目录并将返回值赋值给a
}
catch (err) {   //如果有报错对象，执行此处代码，功能：捕获错误
    console.log('readdir lose') //输出
    console.log(err)    //输出错误信息
}
console.log(a)  //输出返回的数据
console.log('readdir over') //读取结束，输出

//删除文件夹
try{
    console.log('rmdir loading...') //输出，开始执行删除命令
    fs.rmdirSync('./inFun/tast')    //删除文件夹
}
catch (err) {   //捕获错误
    console.log('rmdir lose')   //输出删除失败
    console.log(err)    //输出错误信息
}
console.log('rmdir over')   //输出

//增加文件夹
try{
    console.log('mkdir loading...') //输出
    fs.mkdirSync('./inFun/tast')    //增加文件夹
}
catch (err) {   //捕获错误
    console.log('mkdir lose')   //输出
    console.log(err)    //输出错误信息
}
console.log('mkdir over')   //输出

//更改dirname
try{
    console.log('rename loading...')    //输出
    fs.renameSync('./inFun/test','./inFun/tesk')    //更改文件夹name
}
catch (err) {   //捕获错误
    console.log('rename lose')  //输出
    console.log(err)    //输出错误信息
}
console.log('rename over')
*/