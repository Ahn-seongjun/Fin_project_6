import requests
from bs4 import BeautifulSoup
import json
import csv
import pandas as pd

def get_info(i):
    url = 'https://www.kcar.com/search/api/getCarSearchWithCondition.do'
    res = requests.post(url,data={'car_kind':'전체',
        'price_tab_flag': '1',
        'v_sell_cl_cd': 'ALL',
        'limit': '60',
        'pageno':f'{i}',
        'orderFlag': 'true',
        'orderby': 'n_order:desc',
        'wr_eq_v_usernm':'',
        'v_trust_flag': 'A',
        'action': 'filterclicked',
        'acmPageno': '1'})
    info_json =res.json()['DRCT']['result']['rows']
    return info_json

def get_desc(info):
    desc= []
    for i in range(0,60):
        brand = info[i]['v_makenm']
        name = info[i]['v_modelnm']
        color = info[i]['v_exterior_colornm']
        fuel = info[i]['v_fuel_typecd_name']
        accident = info[i]['v_rec_comment']
        price = info[i]['n_price']
        mile = info[i]['n_mileage']
        model = info[i]['v_class_headnm']+info[i]['v_class_detailnm']
        year = info[i]['v_begin_year']
        desc.append({'name':name,
            'brand':brand,
            'color':color,
            'fuel':fuel,
            'accident':accident,
            'price':price,
            'mile':mile,
            'model':model,
            'year':year})
    return desc


def all():
    information = []
    for i in range(0,124):
        info = get_info(i)
        information.append(get_desc(info))
    return information

#도저히 방법이 떠오르지 않아서 빈 df에 dict를 추가하는 방법을 사용헀다
def final():
    df = pd.DataFrame()
    infomation = all()
    for i in infomation:
        for j in i:
            df = df.append(j,ignore_index=True)
    df.to_csv('k_car.csv',sep=',',na_rep='NaN')
