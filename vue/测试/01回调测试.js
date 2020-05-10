function print(num1,num2,callback1){
  var sum = num1 + num2
  // console.log(sum)
  callback1(num1,num2,sum)//回调函数
}

print(1,2,(num1,num2,sum)=>{
  console.log(`sum=${sum};${num1}*${num2}=${num1*num2}`)
})