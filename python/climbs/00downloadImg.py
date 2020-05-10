import requests
import pymongo
from threading import Thread
import os
import time

def downloadImg(url,path):#下载图片函数
    data = requests.get(url)
    if data.status_code != 200: 
        return print('请求状态码错误：'+str(data.status_code))
    if os.path.exists(path) == False:
        file = open(path,'wb')
        file.write(data.content)
        file.close()
        print('写入完成')

client = pymongo.MongoClient('mongodb://localhost:27017')#链接数据库
wallpaper = client.admin.wallpapers#数据库表模型
datas = wallpaper.find({})#查询数据库
def xun():
    for i in datas:
        time.sleep(5)
        downloadImg(i['url'],'D:\img\wallpaper\girls\{}.png'.format(i['url'][36:-5]))

for i in range(50):#多线程下载
    Thread(target=xun).start()

# for i in datas:
        # downloadImg(i['url'],'D:\img\wallpaper\girls\{}.png'.format(i['url'][36:-5]))

