import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd
# url = 'https://auto.danawa.com/usedcar/?Work=list&Tab=list&Page=1&Order=8&Brand=303&Series=&Model='
#
# res = requests.get(url)
# soup = BeautifulSoup(res.text,'html.parser')
# print(soup)


def get_driver():
    options = Options()
    options.binary_location= 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
    driver = webdriver.Chrome('C:\Driver\chromedriver')
    driver.get('https://auto.danawa.com/usedcar/?Work=list&Tab=list&Brand=303&Series=&Model=')
    return driver

driver = get_driver()

def get_name(driver):
    html = driver.page_source
    soup = BeautifulSoup(html,'html.parser')
    box = soup.find("div",{"class":"finder_contents"})
    return box
#
name = get_name(driver)

print(name.find("button",{"class":"btn_select selected"}))
