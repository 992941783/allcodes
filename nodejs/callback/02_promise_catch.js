//promise对象then方法
const fs = require('fs')    //导入模块
function isfile(){  //封装判断文件是否存在函数
    return new Promise((resolve,reject)=>{  //返回一个promise对象
        fs.stat('./test.js',(err,status)=>{ //fs模块的stat方法，判断文件是否存在
            if(err){   //如果有错误，执行此处代码
                reject('文件不存在') //失败方法，
            }else{  //否则，其他的情况执行此处代码
                resolve('找到文件') //成功方法
            }
        })
    })
}
function delfile(){ //封装删除文件函数
    return new Promise((resolve,reject)=>{  //返回promise对象
        fs.unlink('test.js',(err)=>{    //fs模块的unlink方法,删除文件
            if(err){    //如果有错误执行此处代码
                reject('删除失败')  //失败方法
            }else{  //否则,其他情况执行此处代码
                resolve('删除成功') //成功方法
            }
        })
    })
}
isfile()    //调用方法
    .then((msg)=>{  //promise对象方法.then,只有promise对象的内部成功时，执行.then内代码
        console.log('找到文件，正在删除')    //输出xxx
        return delfile()    //调用delfile(删除文件)方法，并返回值
    })
    .then((msg)=>{  //delfile方法里promise对象的内部成功时，执行此处代码
        console.log('删除成功') //输出xxx
        throw ('手动终止')
    })
    .then(()=>{
        console.log('test1')
    })
    .then(()=>{
        console.log('test2')
    })
    .catch((err)=>{ //promise对象方法.catch,只有primise对象的内部失败时，执行此处代码
        console.log('catch')    //输出xxx
        console.log(err)    //输出xxx
    })