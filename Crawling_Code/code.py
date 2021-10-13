import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
# 29페이지까지
def get_page(i):
    url = 'http://www.m-park.co.kr/buy/my_car_list.asp'
    data ={'sSearch': 1,
    'sListOrder': 'DemoDay_D',
    'sColorCode': '006007',
    'sPageSize': 40,
    'gotoPage': f'{i}'}
    res = requests.post(url,data=data)
    soup = BeautifulSoup(res.text,'html.parser')
    return soup
def get_info(soup):
    #연식 키로수 유종
    #ilst안에 다 들어가있음 일단
    info = soup.find_all("div",{"class":"car-info-s"})
    year = []
    mile = []
    fuel = []
    for i in info:
        year.append(i.select_one("p:nth-child(1)").string)
        mile.append(i.select_one("p:nth-child(2)").string)
        fuel.append(i.select_one("p:nth-child(3)").string)
    return year,mile,fuel

def get_name(soup):
    #브랜드 차종 모델
    name_box = soup.find_all("div",{"class":"title-box"})
    c_name = []
    c_model = []
    for name in name_box:
        car_name = name.find("h1").text
        car_model = name.find("h2").text
        c_name.append(car_name)
        c_model.append(car_model)
    return c_name,c_model

def get_price(soup):
    #모델, 차이름이 하나의리스트로 묶여있음
    #리스트 인덱스 이용해서 더하면 될듯
    price_box = soup.find_all("div",{"class":"price-info"})
    car_price = []
    for price in price_box:
        for p in price.find_all("span",{"class":"point"}):
            car_price.append(p.text)
    return car_price


def all_info():
    info_list = []
    for j in range(1,29):
        page = get_page(j)
        year,mile,fuel = get_info(page)
        car_price = get_price(page)
        c_name,c_model = get_name(page)
        for i in range(0,40):
            info_list.append(year[i]+','+mile[i]+','+fuel[i]+','+c_name[i]+','+c_model[i]+','+car_price[i])
    return info_list

def final():
    df = pd.DataFrame(columns=['번호','연식','주행','유종','차량명','모델명','가격'])
    infomation = all_info()
    for i in infomation:
        df = df.append(pd.Series(i,index=df.columns),ignore_index=True)
    df.to_csv('m_park_black.csv',sep=',',na_rep='NaN')




