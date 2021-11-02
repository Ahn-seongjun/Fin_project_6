from django.shortcuts import render
import datetime
from django.http import HttpResponse,JsonResponse
# from .models import Test
from django.db.models import Min,Count
from .functions import to_db,to_csv,get_trim
import joblib
from django.core import serializers
# import simplejson as json
from django.views.decorators.csrf import csrf_exempt
# import xgboost
# Create your views here.

TEMPLATE_DIRS= (
    'os.path.join(BASE_DIR, "templates"),'
)
def index(request):
    return render(request, "index.html",{})
def buy(request):

    return render(request, "buy.html")



def buy2(request):
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
    # if site == 'encar':
    #     info = Test.objects.filter(brand=bra, name__icontains=na, year__gte=year, year__lte=year1, km__gte=mile,km__lte=mile1, type=fuel, location=loc, price__lte=price).order_by('price')
    #     info1 = Test.objects.filter(brand=bra, name__icontains=na, year__gte=year, year__lte=year1, km__gte=mile,km__lte=mile1, type=fuel, location=loc, price__lte=price).annotate(num=Count('brand'))
    # try:
    #     total = info1[0].num
    #     return render(request, "buy2.html",{'info':info,'total':total,'bra':bra})
    # except:
    #     return render(request,'buy3.html')
    return render(request,'buy.html')
# ,'total':total

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
    model = joblib.load('XGBoost.pkl')
    price = model.predict(a)
    return render(request,'sell.html')
