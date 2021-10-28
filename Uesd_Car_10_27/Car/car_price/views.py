from django.shortcuts import render
# from .models import Encar,Kcar,Search
from django.db.models import Min,Count
import pandas as pd
from .functions import to_db,to_csv

import pymysql
def main(request):
    # info = Search.objects.values("brand").annotate(Count('brand')).order_by("brand")
    # first = info[0:1]
    # second = info[1:2]
    # third = info[2:3]
    # print(info)
    return render(request,'day_car.html')
# ,{'info':info,'first':first,'second':second,'third':third}

def sell(request):
    return render(request,'wannabesell.html')
def sell1(request):
    bra = request.GET.get('brand', '')
    na = request.GET.get('name', '')
    trim = request.GET.get('trim', '')
    fuel = request.GET.get("fuel", "")
    year = request.GET.get('year', '')
    acci = request.GET.get('accident', '')
    color = request.GET.get('color', '')
    wd = request.GET.get("wd", "")
    km = request.GET.get("km", "")
    to_csv(bra,na,trim,fuel,year,acci,color,wd,km)
    return render(request,'wannabesell1.html')

def buy(request):
    return render(request,'wannabebuy.html')


def search(request):
    bra = request.GET.get('brand', '')
    na = request.GET.get('name', '')
    mile = request.GET.get('km', '')
    mile1 = request.GET.get('km1', '')
    year = request.GET.get('year', '')
    year1 = request.GET.get('year1', '')
    fuel = request.GET.get("fuel", "")
    loc = request.GET.get("loc", "")
    price = request.GET.get("price","")
    sort = request.GET.get("sort","")
    # to_db('1',bra,na)
    # info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year,year__lte=year1,km__gte=mile,km__lte=mile1, type=fuel, location=loc,price__lte=price).order_by('price')
    # obj1 = info[0:1]
    # obj2 = info[1:2]
    # obj3 = info[2:3]
    # if not info:
    #     return render(request, 'search1.html',{'info': info, 'name': na, 'brand': bra, 'obj2': obj2, 'obj1': obj1, 'obj3': obj3})
    # else:
    #     return render(request, 'search.html',{'info': info, 'name': na, 'brand': bra, 'obj2': obj2, 'obj1': obj1, 'obj3': obj3})
    return render(request, 'search.html')


# Create your views here.
