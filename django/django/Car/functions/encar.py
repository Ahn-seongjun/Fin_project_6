import requests
from bs4 import BeautifulSoup

def get_page():
    url = f'http://api.encar.com/search/car/list/premium?count=true&q=(And.Hidden.N._.CarType.Y.)&sr=%7CModifiedDate%7C0%7C50'
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
        res = get_page()
        information.append(get_info(res))
    except:
        pass
    return information

print(get_all())