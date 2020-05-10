const fs = require('fs');

//异步
//读取文件
/*fs.readFile('./test.txt',(err,data)=>{  //读取文件 一个方法
    console.log('readFile loading...'); //控制台输出
    if(err){    //if判断如果有错误对象
        console.log('readFile fail');   //控制台输出
        console.log(err);   //控制台输出报错信息
        console.log('readFile over');   //控制台输出
    }else{  //否则
        console.log('readFile success');    //输出成功
        console.log(data.toString('utf-8'));    //toString方法转换字符格式
        console.log('readFile over');   //输出
    }
})*/

//覆盖写入文件
/*fs.writeFile('./test.txt','hello world too',(err)=>{  //覆盖写入文件 一个方法
    console.log('writeFile loading...');    //输出
    if(err){    //判断如果有错误对象
        console.log('writeFile fail');  输出
        console.log(err);   输出错误对象信息
        console.log('writeFile over');  //输出
    }else{  //其他
        console.log('writeFile success');   //输出成功
        console.log('writeFile over');  //输出
    }
})*/

//追加写入文件
/*fs.appendFile('./test.txt','你好韩梅梅',(err)=>{   //追加写入文件
    if(err){    //判断err对象是否存在
        console.log('appendFile fail'); 输出
        console.log(err);   //输出错误对象信息
        console.log('appendFile over'); //输出
    }else{  //其他
        console.log('appendFile success');  //输出成功
        console.log('appendFile over'); //输出
    }
})*/

//删除文件
/*
fs.unlink('./test.txt',(err)=>{ //删除文件
    if(err){    //捕获错误
        console.log('unlink fail'); //输出
        console.log(err);   //输出错误信息
        console.log('unlink over'); //输出
    }else{} //其他
    console.log('unlink success');  //输出
    console.log('unlink over'); //输出
})*/

//同步
//读取文件
try{
    console.log('readFile loading...|正在读取')
    let data = fs.readFileSync('test.txt')
}
catch(err){
    console.log('readFile fail|读取失败')
    console.log(err)
}
console.log('readFile success|读取成功')
// console.log('文件内容：'+data.toString('utf-8')+'')
console.log('readFile over|读取结束')
//文件覆盖写入
/*try{
    console.log('writeFile loading...|正在写入')
    fs.writeFileSync('./test.txt', '你好韩梅梅')
}
catch(err){
    console.log('writeFile fail|写入失败')
    console.log(err)
}
console.log('wrietFile success|写入成功')
console.log('writeFile over|写入结束')*/

//文件追加写入
/*try{
    console.log('appendFile loading...|正在追加内容')
    for(let i = 0; i < 9999; i++){
        fs.appendFileSync('./test.txt', '追加')
    }

}
catch(err){
    console.log('appendFile fail|追加失败')
    console.log(err)
}
console.log('appendFile success|追加成功')
console.log('appendFil over|追加结束')*/
//删除文件
/*try{
    console.log('rmFile loading...|正在删除')
    fs.unlinkSync('./test.txt')
}
catch(err){
    console.log('rmFile fail|删除失败')
    console.log(err)
}
console.log('rmFile success删除成功')
console.log('reFile over|删除结束')*/
//更改我文件名
/*
try{
    console.log('rename loading...|正在更改文件名')
    fs.renameSync('./test.txt','text.txt')
}
catch(err){
    console.log('rename fail|更改文件名失败')
    console.log(err)
}
console.log('rename success|更改成功')
console.log('rename over|更改结束')*/
