import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
def get_page(color,i):
    res = requests.get(f'http://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.Y._.Trust.Warranty._.Color.{color}.)&sr=%7CModifiedDate%7C{i*50}%7C50')
    return res
def get_info(res):
    try:
        desc = []
        for i in range(0,49):
            soup = res.json()
            box = soup["SearchResults"]
            brand = box[i]['Manufacturer']
            mile = box[i]['Mileage']
            name = box[i]['Model']
            fuel = box[i]['FuelType']
            price = box[i]['Price']
            year = box[i]['FormYear']
            model = box[i]['Badge']
            # model1 = box[i]['BadgeDetail']
            location = box[i]['OfficeCityState']
            desc.append({'brand':brand,'name':name,'info':model,'type':fuel,'km':mile,
                'year':year,'location':location,'price':price,})
    except:
        pass
    return desc


def get_all():
    try:
        information = []
        # color = ['검정색', '검정투톤', '쥐색', '은색', '은회색', '은색투톤',
        #      '흰색', '진주색', '흰색투톤', '진주투톤', '은하색', '명은색',
        #      '갈대색', '연금색', '갈색', '갈색투톤', '금색', '금색투톤',
        #      '청색', '하늘색', '담녹색', '녹색', '연두색', '청옥색', '빨간색',
        #      '주황색', '자주색', '보라색', '분홍색', '노란색']
        # for c in color:
        for i in range(0,2):
            res = get_page('갈색투톤',i)
            information.append(get_info(res))
    except:
        pass
    return information


def final():
    df = pd.DataFrame()
    infomation = get_all()
    for i in infomation:
        for j in i:
            df = df.append(j,ignore_index=True)
    df.to_csv('no_acc/18.csv',sep=',',na_rep='NaN')

final()






