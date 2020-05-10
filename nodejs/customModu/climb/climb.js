let climb = {
    //https_climb方法
    https_climb (urll,label,att,type) {
        //导入模块
        const https = require('https'); //导入模块  ，https请求
        const http = require('http');   //导入模块  ，http请求
        const fs = require('fs');       //导入模块 ，文件操作
        const cheerio = require('cheerio'); //导入模块,分析数据
        const request = require('request'); //导入请求
        const iconv = require('iconv-lite');

        var httpsarray = [];

        //get方法
            let url = urll; //url
                //此方法获取网站上指定的信息，并添加到httpsattay数组中。
                function htp(ret){
                    https.get(url,(res)=>{   //回调函数
                        //数据判断
                        const {statusCode} = res;   //获取状态码
                        const contentType = res.headers['content-type'];    //获取数据类型
                        let err = null; //定义变量，存放异常。
                        if(statusCode != 200){  //如果状态码不是200
                            err = new Error('请求状态码错误');     //将创建一个对象
                        }else if(contentType.split(';')[0] != type){
                            err = new Error('数据类型不符合');
                        }
                        if(err){    //如果有err异常
                            res.resume; //重置缓存
                            return false;   //返回false
                        }

                        //数据处理
                        let sum = '';   //定义空字符串，用来放数据。
                        //当有数据时的事件，执行此回调。
                        res.on('data',(chunk)=>{
                            console.log('-----------数据传输中-------------');
                            sum += chunk.toString('utf8');  //将每次的数据累加到sum中。
                        });

                        //当数据传输结束时，执行此事件回调函数。
                        res.on('end',()=>{
                            //分析数据（sum）到本地
                            console.log('传输完成');

                                let $ = cheerio.load(sum);   //将源文件赋值给$
                                $(label).each((index,el)=>{     //节点.each方法循环
                                //将获取的数据添加到数组中
                                    if($(el).attr(att)){    //如果url是真的，就加入到数组
                                        httpsarray[index]='https:'+$(el).attr(att);
                                        console.log('第'+index+'个数据整理完成');
                                        // console.log('数据是：'+httpsarray[index]);
                                    }
                                })
                            console.log('主函数')
                            ret(httpsarray);
                        })
                    }).on('error',(err)=>{
                        console.log('网站请求失败,错误信息：'+err+'');
                    })  //https.get请求结束

                }   //htp方法结束
                //图片url处理后执行函数，将httpsarray数组中的数据遍历取出，进行爬取操作。
                function ret (callbac){
                    console.log('共获得'+callbac.length+'条数据----------------------爬取数据中...');
                    //循环取出数据进行操作
                    for(var i = 0; i<callbac.length; i++){
                        //请求数据
                        console.log(callbac[i]);
                        request(callbac[i],(err,response,body)=>{
                            //将数据转换成base64字符串
                            let base64 = iconv.decode(body,'base64').toString();
                            console.log(base64);
                        })  //请求结束
                    }   //for循环结束
                }   //ret方法结束
                htp(ret)
    }       //https_climb方法结束
};

// climb.https_climb('https://image.baidu.com/search/index?tn=baiduimage&ct=201326592&lm=-1&cl=2&ie=gb18030&word=%CD%BC%C6%AC&fr=ala&ala=1&alatpl=others&pos=0','img','src','text/html')
climb.https_climb('https://www.qunar.com/','img','src','text/html');
