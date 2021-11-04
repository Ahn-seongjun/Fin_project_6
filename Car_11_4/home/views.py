from django.shortcuts import render
import datetime
from django.http import HttpResponse,JsonResponse
from .models import Warehouse,Warehouse1,Search
from django.db.models import Min,Count
from .functions import to_db,to_csv,get_trim
import joblib
from django.core import serializers
# import simplejson as json
from django.views.decorators.csrf import csrf_exempt
# import xgboost
import numpy as np
# Create your views here.

TEMPLATE_DIRS= (
    'os.path.join(BASE_DIR, "templates"),'
)
def index(request):
    return render(request, "index.html",{})
def buy_1(request):
    # rank = Search.objects.values("name").annotate(Count('name')).order_by('name')
    # first = rank[0:5]
    # # second = rank[1:2]
    # # third = rank[2:3]
    return render(request, "buy_1.html",{})

def buy_3(request):

    return render(request, "buy3.html")



def buy_2(request):
    bra = request.GET.get('brand', '')
    na = request.GET.get('name', '')
    mile = request.GET.get('km', '')
    mile1 = request.GET.get('km1', '')
    year = request.GET.get('year', '')
    year1 = request.GET.get('year1', '')
    fuel = request.GET.get("fuel", "")
    loc = request.GET.get("loc", "")
    price = request.GET.get("price","")
    site = request.GET.get('chk',"")
    to_db(None,bra,na)

    info = Warehouse.objects.filter(brand=bra, name__icontains=na, year__gte=year, year__lte=year1, km__gte=mile,km__lte=mile1, fuel=fuel, location=loc, price__lte=price).order_by('price')
    info1 = Warehouse.objects.filter(brand=bra, name__icontains=na, year__gte=year, year__lte=year1, km__gte=mile,km__lte=mile1, fuel=fuel, location=loc, price__lte=price).annotate(num=Count('brand'))

    try:
        total = info1[0].num
        return render(request, "buy_2.html", {'info': info, 'info1': info1,'total':total})
    except:
        return render(request,"buy3.html")


def cars(request):
    return render(request, "cars.html",{})

def topics(request):
    return render(request, "topics.html",{})

def about(request):
    return render(request, "about.html",{})

def main(request):
    return render(request, "main.html",{})

def sell(request):
    bra = request.GET.get('brand', '')
    na = request.GET.get('name', '')
    trim = request.GET.get('trim', '')
    fuel = request.GET.get("fuel", "")
    year = request.GET.get('year', '')
    acci = request.GET.get('accident', '')
    color = request.GET.get('color', '')
    wd = request.GET.get("wd", "")
    km = request.GET.get("km", "")
    trim1 = get_trim(bra,trim)
    a = to_csv(bra,na,trim1,fuel,year,acci,color,wd,km)
    model = joblib.load('LinearRegression.pkl')
    price = model.predict(a)
    price = np.expm1(price)
    for i in price:
        num = round(int(i))
    return render(request,'sell.html',{'price':num})
