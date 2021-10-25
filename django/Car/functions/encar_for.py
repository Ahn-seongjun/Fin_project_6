import requests
from bs4 import BeautifulSoup
import pymysql

def get_page(i):
    url = f'http://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.N.)&sr=%7CModifiedDate%7C{i*50}%7C50'
    res = requests.get(url)
    return res

def get_info(res):
    try:
        desc = []
        for i in range(0, 49):
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
            link = 'http://www.encar.com/dc/dc_cardetailview.do?pageid=dc_carsearch&listAdvType=normal&carid='+box[i]['Id']
            desc.append({'brand': brand, 'name': name, 'info': model, 'type': fuel, 'km': mile,
                         'year': year, 'location': location, 'price': price, 'link':link})
    except:
        pass
    return desc

def get_all():
    try:
        information = []
        for i in range(711):
            res = get_page(i)
            information.append(get_info(res))
    except:
        pass
    return information


def save_db(information):
    car_db = pymysql.connect(
        user='root',
        passwd='0000',
        host='127.0.0.1',
        db='car_info',
        charset='utf8'
    )
    cursor = car_db.cursor(pymysql.cursors.DictCursor)
    info = get_all()
    insert_data = sum(info, [])
    insert_sql2 = "INSERT INTO `en_car` VALUES (%(brand)s,%(name)s,%(info)s,%(type)s,%(km)s,%(year)s,%(location)s,%(price)s,%(link)s);"
    cursor.executemany(insert_sql2, insert_data)
    car_db.commit()

fore = get_all()
save_db(fore)