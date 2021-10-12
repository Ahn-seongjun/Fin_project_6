import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
def get_driver():
    options = Options()
    options.binary_location= 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    driver = webdriver.Chrome('C:\Driver\chromedriver')
    driver.get('https://www.kcar.com/car/search/car_search_list.do')
    return driver

def get_page(driver):
    html = driver.page_source
    soup = BeautifulSoup(html,'html.parser')
    car = soup.find("ol",{"id":"kcarSearchList"})
    return car

def get_info(car):
    car_info = car.find_all("div", {"class": "car_desc"})
    info = []
    for i in car_info:
        info_box = i.find_all("span")
        box = []
        for a in info_box:
            box.append(a.text)
        info.append(box)
    return info


def get_name(car):
    name = []
    car_name = car.find_all("a", {"class": "car_name"})
    for i in car_name:
        name.append(i.text)
    return name

def get_price(car):
    price = []
    car_price = car.find_all("div", {"class": "car_cash"})
    for p in car_price:
        price.append(p.strong.text)
    return price

def all_info():
    all_info = []
    driver = get_driver()
    car = get_page(driver)
    price = get_price(car)
    info = get_info(car)
    name = get_name(car)
    for i in range(14):
       all_info.append([name[i]]+info[i]+[price[i]])
    return all_info




def get_all():
    data = []

    # data.append(desc)
    for i in range(2,4):
        time.sleep(2)
        options = Options()
        options.binary_location = 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
        driver = webdriver.Chrome('C:\Driver\chromedriver')
        driver.get('https://www.kcar.com/car/search/car_search_list.do')
        driver.page_source
        time.sleep(1)
        driver.find_element_by_xpath(f'//*[@id="kcarSearchListPaging"]/div/button[{i}]').click()
        desc = all_info()
        data.append(desc)
    return data






