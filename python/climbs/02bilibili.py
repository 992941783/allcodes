# from bs4 import *
import requests #请求网页数据
from bs4 import BeautifulSoup#解析dom数据
import json#转换类型
import re#正则表达式
from threading import Thread#多线程
import pymongo
#数据库操作
client = pymongo.MongoClient('mongodb://localhost:27017')#链接数据库
bili = client['admin']['bili0']

datas = []
def getdata(url,pn):#获取异步加载数据
    headers = {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Cookie": "_uuid=9259931A-EF22-4027-B57D-1E48352184B550505infoc; buvid3=ED1E9385-53AD-44FB-8524-232B9E64637C53924infoc; CURRENT_FNVAL=16; LIVE_BUVID=AUTO6515826991742046; rpdid=|(J~R~u|lJuY0J'ul)kYmmu)u; INTVER=1; sid=94s7e1ia",
        "Host": "api.bilibili.com",
        "Referer": "https://www.bilibili.com/v/anime/finish/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
    }
    res  = requests.get(url,headers = headers)
    #数据处理
    dict1 = eval(res.text[res.text.find('('):][1:-1])#字典,包含data键
    list1 = dict1['data']['archives']#列表，包含多个数据。
    print('--------------------------------------------------------------------------------------------第{}页--------------------------------------------------------'.format(pn))
    for i in list1:#循环取出url和title
        #添加数据
        title = i['title'] if i['title'] else '#'#标题
        url = i['redirect_url'] if i.get('redirect_url',"none") != "none" else 'http://www.bilibili.com/video/av{}'.format(i['aid'])#url
        number = getdata2(url) if getdata2(url) != None else 0
        bili.insert_one({"title":title,"url":url,"number":number})
        
        #old添加到数组中
        """ datas.append({
            'title':title,
            'url':url,
            'number':getdata2(url) if getdata2(url) != None else 0
        }) """

def getdata2(url):#获取播放页信息
    headers = {
        "Accept": "*/*",
        # "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Cookie": "_uuid=9259931A-EF22-4027-B57D-1E48352184B550505infoc; buvid3=ED1E9385-53AD-44FB-8524-232B9E64637C53924infoc; CURRENT_FNVAL=16; LIVE_BUVID=AUTO6515826991742046; rpdid=|(J~R~u|lJuY0J'ul)kYmmu)u; INTVER=1; sid=94s7e1ia",
        # "Host": "api.bilibili.com",
        "Referer": "https://www.bilibili.com/v/anime/finish/",
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
    }
    res = requests.get(url,headers = headers)
    soup = BeautifulSoup(res.text,'lxml')
    #方法二 获取播放量
    try:
        datas = json.loads(soup.select('script[type="application/ld+json"]')[0].string)
        return int(datas["itemListElement"][0]["interactionStatistic"]["userInteractionCount"]) #返回整型，播放量
    except BaseException as a :
        # print('${}:::::${}'.format(url,a))#错误信息
        datas = str(soup.select('script[type="application/ld+json"]')[0].string)#字符串
        num = re.findall('\d+',datas[datas.find('userInteractionCount')+22:])#正则匹配数字,list
        return int(num[0])   #返回整型，播放量

    #方法1
    """ try:
        datas = json.loads(soup.findAll('script')[2].text)
        # print(type(datas['itemListElement'][0]["interactionStatistic"]["userInteractionCount"]))
        return datas["itemListElement"][0]["interactionStatistic"]["userInteractionCount"]
    except BaseException as a:
        print(url,':',a) """


#分析数据
#1循环爬取
# for i in range(1,777):#pn776
#     getdata('https://api.bilibili.com/x/web-interface/newlist?callback=jqueryCallback_bili_9295621317985154&rid=32&type=0&pn={}&ps=20&jsonp=jsonp&_=1584189039720'.format(i),i)


# #2多线程爬取1
# def threadC(start,end):#param：起始页，结束页
#     for i in range(start,end):
#         getdata('https://api.bilibili.com/x/web-interface/newlist?callback=jqueryCallback_bili_9295621317985154&rid=32&type=0&pn={}&ps=20&jsonp=jsonp&_=1584189039720'.format(i),i)

# for i in range(1,79):
#     if i == 78 :
#         Thread(target=threadC,args=(771,777)).start()
#     else:
#         Thread(target=threadC,args=(1+(i-1)*10,i*10+1)).start()

#3多线程爬取2
# def threadC(start,end):#param：起始页，结束页
#      for i in range(start,end):
#          getdata('https://api.bilibili.com/x/web-interface/newlist?callback=jqueryCallback_bili_9295621317985154&rid=32&type=0&pn={}&ps=20&jsonp=jsonp&_=1584189039720'.format(i),i)
# Thread(target=threadC,args=(1,50)).start()
# Thread(target=threadC,args=(51,101)).start()
# Thread(target=threadC,args=(101,151)).start()
# Thread(target=threadC,args=(151,201)).start()
# Thread(target=threadC,args=(201,251)).start()
# Thread(target=threadC,args=(301,351)).start()
# Thread(target=threadC,args=(401,451)).start()
# Thread(target=threadC,args=(501,551)).start()
# Thread(target=threadC,args=(601,651)).start()
# Thread(target=threadC,args=(701,751)).start()
# Thread(target=threadC,args=(751,777)).start()


#public公共部分
# #排序，降序
# for j in range(len(datas)-1):
#     for k in range(len(datas)-1):
#         if datas[k]['number'] < datas[k+1]['number']:
#             a = datas[k]
#             datas[k] = datas[k+1]
#             datas[k+1] = a
# #top10
# for j in range(10):
#     print('{}:{}:{}'.format(datas[j]['number'],datas[j]['title'],datas[j]['url']))

#排序
data = bili.find().sort('number',-1)
for i in range(10):
    print('{}:{}:{}'.format(data[i]['number'],data[i]['title'],data[i]['url']))

