const qs = require('querystring')   //导入querystring模块
//将查询字符串转为对象
let str = 'name等于韩梅梅和pass等于nane'
let obj00 = qs.parse(str,'和', '等于')
console.log(obj00)    //输出将字符串转换后的对象
//将对象转成字符串
let obj = {name:'李笑笑', pass:'123456'}   //定义对象
// console.log('编码格式：'+qs.stringify(obj))  //默认输出格式
// console.log('解码后格式：'+qs.unescape(qs.stringify(obj)))

console.log(qs.stringify(obj, '和', '等于'))   //参数为将对象以对应字符合并成字符串
//将查询字符串编码
let str01 = 'name=lixiao&pass=111'
console.log(qs.escape(str01))   //输出编码后格式
//将查询字符串解码
let str02 = 'name%3Dlixiao%26pass%3D111'
console.log(qs.unescape(str02)) //输出解码后格式
