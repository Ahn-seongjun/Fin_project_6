import requests
from bs4 import BeautifulSoup
import json
import csv
import pymysql
# import pandas as pd

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
    try:
        for i in range(0,60):
            brand = info[i]['v_makenm']
            name = info[i]['v_modelnm']
            fuel = info[i]['v_fuel_typecd_name']
            accident = info[i]['v_rec_comment']
            price = info[i]['n_price']
            mile = info[i]['n_mileage']
            model = info[i]['v_class_headnm']+info[i]['v_class_detailnm']
            year = info[i]['v_begin_year']
            location = info[i]['v_center_region']
            link = 'https://www.kcar.com'+info[i]['v_car_url']
            desc.append({'brand':brand,
                         'name': name,
                         'info': model,
                         'type': fuel,
                         'km': mile,
                         'year': year,
                         'location':location,
                         'accident': accident,
                         'price': price,
                         'link':link})
    except:
        pass
    return desc


def all():
    information = []
    for i in range(0,124):
        info = get_info(i)
        information.append(get_desc(info))
    return information
car_db = pymysql.connect(
    user='root',
    passwd='0000',
    host='127.0.0.1',
    db='car_info',
    charset='utf8'
)





cursor = car_db.cursor(pymysql.cursors.DictCursor)
info = all()
insert_data = sum(info, [])
insert_sql2 = "INSERT INTO `kcar` VALUES (%(brand)s,%(name)s,%(info)s,%(type)s,%(km)s,%(year)s,%(location)s,%(price)s,%(link)s);"
cursor.executemany(insert_sql2, insert_data)
car_db.commit()