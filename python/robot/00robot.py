from wxpy import *
bot = Bot(cache_path=True)
li = bot.friends().search('脚下')[0]
li.send('测试')