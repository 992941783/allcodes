function a (value){
    console.log('我是回调');
}

function b(a,value){
    a(value);
    console.log('我是主函数');

}

// b(a,'我是主函数');

