const url = require('url')  //导入url模块
//将url字符串转为对象
let url00 = 'http://www.baidu.com/index.html?name=123&pass=456' //url
console.log(url.parse(url00))   //输出将url字符串转换后的对象
//将url对象转为字符串
let obj ={
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=123&pass=456',
    query: 'name=123&pass=456',
    pathname: '/index1.html',
    path: '/index1.html?name=123&pass=456',
    href: 'http://www.baidu.com/index.html?name=123&pass=456'
}   //url对象
console.log(url.format(obj))    //输出将url对象转换后的字符串