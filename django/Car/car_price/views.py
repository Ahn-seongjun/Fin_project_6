from django.shortcuts import render
from .models import Encar,Kcar


def index(request):
    return render(request,'day_car_main.html')

def buy(request):
    return render(request,'car_buy.html')

def search(request):
    bra = request.GET.get('brand','')
    na = request.GET.get('name','')
    site = request.GET.get('site', '')
    year = request.GET.get('year','')
    fuel = request.GET.get("fuel","")
    loc = request.GET.get("loc","")
    if site == "Encar":
        s = Encar.objects.filter(brand=bra,name__icontains=na,year__gte=year,type=fuel,location=loc)
    else:
        s = Kcar.objects.filter(brand=bra, name__icontains=na,year__gte=year,type=fuel,location=loc)
    return render(request,'car_search.html',{'brand':bra,'name':na,'s':s,'site':site,'year':year,'tyep':fuel,'location':loc})
def sell(request):
    return render(request,'sell_page.html')
# Create your views here.
