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
    res = requests.get(f'http://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.N._.Trust.Warranty._.Color.{color}.)&sr=%7CModifiedDate%7C{i*50}%7C50')

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
            desc.append({'brand':brand,'km':mile,
                'name':name,'type':fuel,
                'price':price,'year':year,
                'info':model,'location':location})
    except:
        pass
    return desc
# print(box[1]['Manufacturer'])
# res = get_page('검정색')
# print(get_info(res))

def get_all():
    information = []
    for i in range(0,5):
        res = get_page('노란색',i)
        information.append(get_info(res))
    return information

# print(get_all())
def final():
    df = pd.DataFrame()
    infomation = get_all()
    for i in infomation:
        for j in i:
            df = df.append(j,ignore_index=True)
    df.to_csv('no_acc_for/29.csv',sep=',',na_rep='NaN')



final()

# def get_all():
#     information = []
#
#     for c in color:
#         res = get_page(c)
#         information.append(get_info(res))
#     return information



