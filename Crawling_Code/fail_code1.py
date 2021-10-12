from fail_code2 import *
import requests
from bs4 import BeautifulSoup
from urllib.request import urlopen
import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
import numpy as np
import pandas as pd

info = get_all()
# narray = np.array(info)
print(info)
# df = pd.DataFrame.from_records(narray)
# df.to_csv("test.csv", mode='w')