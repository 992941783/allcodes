const request = require('request');
const cheerio = require('cheerio')

//全局变量
let datas = [];//存放具体:url,look,put
let a = {
    url:'https://www.bilibili.com/v/anime/finish/#/all/default/0/1',
    headers:{
        "Accept": "*/*",
        //"Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Cookie": "_uuid=9259931A-EF22-4027-B57D-1E48352184B550505infoc; buvid3=ED1E9385-53AD-44FB-8524-232B9E64637C53924infoc; CURRENT_FNVAL=16; LIVE_BUVID=AUTO6515826991742046; rpdid=|(J~R~u|lJuY0J'ul)kYmmu)u; INTVER=1; sid=94s7e1ia",
        //"Host": "api.bilibili.com",
        "Referer": "https://www.bilibili.com/v/anime/finish/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
    }
}
request(a,(err,res,body)=>{
    if(!err){//请求成功
        let $ = cheerio.load(body);
        console.log(body)
        $('script').each((index,el)=>{
            if(index != 4){return}
            let datas0 = $(el)['0']['children'][0]['data']//原字符串
            let datas1 = datas0.split(';')[0].substring(datas0.indexOf('{'),datas0.lastIndexOf('}')+1)//字符串内是对象
            let datas2 = JSON.parse(datas1)//对象
            // console.log()
        })
    }
})


