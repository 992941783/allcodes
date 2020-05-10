//00_解决回调地狱,Promise对象
function del(){ //定义函数（方法）
    return new Promise((resolve,reject)=>{  //返回Premise对象：参数1：成功时执行；参数2：失败时执行。
        // resolve('ok');
        reject('fail');
    })
}
del()   //调用函数
.then((msg)=>{  //Promise对象.then方法,当Promise对象有reslove(成功)时执行.then内部代码：参数是回调函数
    console.log(msg);
}).catch((err)=>{   //Promise对象.catch方法,当Promise对象有reject(失败)时执行.catch内部代码：参数是回调函数
    console.log(err);
})