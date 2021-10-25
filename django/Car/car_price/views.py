from django.shortcuts import render
from .models import Encar,Kcar
def index(request):

    return render(request,'car.html')

def buy(request):
    # s = EnCar.objects.filter(name__icontains = "2시리즈")
     return render(request,'buy_page1.html')

def search(request):
    bra = request.GET.get('brand','')
    na = request.GET.get('name','')
    site = request.GET.get('site', '')
    if site == "Encar":
        s = Encar.objects.filter(brand=bra,name__icontains=na)
    else:
        s = Kcar.objects.filter(brand=bra, name__icontains=na)
    return render(request,'buy_page.html',{'brand':bra,'name':na,'s':s,'site':site})
def sell(request):
    return render(request,'sell_page.html')
# Create your views here.
