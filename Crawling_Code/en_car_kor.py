import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
def get_page(i):
    res = requests.get(f'http://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.Y._.Color.%EA%B2%80%EC%A0%95%EC%83%89.)&sr=%7CModifiedDate%7C{i*50}%7C50')
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
            location = box[i]['OfficeCityState']
            desc.append({'brand':brand,'mile':mile,
                'name':name,'fuel':fuel,
                'price':price,'year':year,
                'model':model,'location':location})
    except:
        pass
    return desc


def get_all():
    information = []
    for i in range(1,436):
        res = get_page(i)
        information.append(get_info(res))
    return information


def final():
    df = pd.DataFrame()
    infomation = get_all()
    for i in infomation:
        for j in i:
            df = df.append(j,ignore_index=True)
    df.to_csv('en_car_kor_black.csv',sep=',',na_rep='NaN')

final()






