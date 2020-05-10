import requests
from bs4 import BeautifulSoup
# import ast#类型转换
import json
# from pyquery import PyQuery as pq

def getHtml(url, headers):
    print(url)
    html = requests.get(url,headers=headers)
    if html.status_code != 200:return print('请求状态码错误：'+str(html.status_code))
    #处理dom树
    dom = BeautifulSoup(html.text,'lxml')
    datas0 = dom.findAll('script')[14].string#js数据
    datas1 =str(datas0)[19:-1]#字符串
    datas2 = json.loads(str(datas0)[19:-1])#字典
    print(datas2)
    # for i in datas2['prefer']:
    #     print('{}:https://www.meituan.com/meishi/{}/'.format(i['title'],i['itemId']))
    


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Connection": "keep-alive",
    "Cookie": "uuid=f4e65eb4d8ba4976be17.1584346218.1.0.0; _lx_utm=utm_source%3DBaidu%26utm_medium%3Dorganic; _lxsdk_cuid=170e264cbcdc8-03379e9e7eef6a-4313f6a-fa000-170e264cbcd71; ci=73; rvct=73; __mta=209615533.1584346258280.1584346258280.1584346258280.1; client-id=ad58e32a-5297-4084-94fa-4b455e590d12; _lxsdk=170e264cbcdc8-03379e9e7eef6a-4313f6a-fa000-170e264cbcd71; _hc.v=d535d115-3d2b-09e7-7c56-eef6951d3b7c.1584346297; lat=34.7565; lng=113.71335; _lxsdk_s=170e264cbd0-3cc-374-375%7C%7C24",
    "Host": "zz.meituan.com",
    "Referer": "https://zz.meituan.com/meishi/",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"
}

for i in range(1,143):
    print('----------------------------------------------------------第{}页---------------------------------------------------------------'.format(i))
    getHtml('https://zz.meituan.com/meishi/pn{}/'.format(i),headers)