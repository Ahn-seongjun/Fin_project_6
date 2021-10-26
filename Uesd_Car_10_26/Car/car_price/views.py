from django.shortcuts import render
# from .models import Encar,Kcar
from django.db.models import Min
def main(request):
    return render(request,'day_car.html')


def sell(request):
    # bra = request.GET.get('brand', '')
    # na = request.GET.get('name', '')
    # site = request.GET.get('site', '')
    # year = request.GET.get('year', '')
    # fuel = request.GET.get("fuel", "")
    # loc = request.GET.get("loc", "")
    # s = Encar.objects.filter(brand=bra, name__icontains=na,year__gte=year,type=fuel,location=loc)
    return render(request,'wannabesell.html')
# ,{'brand':bra,'name':na,'s':s,'site':site,'year':year,'tyep':fuel,'location':loc}

def buy(request):

    return render(request,'wannabebuy.html')

def search(request):
    bra = request.GET.get('brand', '')
    na = request.GET.get('name', '')
    mile = request.GET.get('km', '')
    year = request.GET.get('year', '')
    fuel = request.GET.get("fuel", "")
    loc = request.GET.get("loc", "")
    price = request.GET.get("price","")
    sort = request.GET.get("sort","")
    # if sort == "km":
    # info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year,km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('km')
    # obj1 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('km')[0:1]
    # obj2 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[1:2]
    # obj3 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[2:3]
    # elif sort == "year":
    #     info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('year')
    #     obj1 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[0:1]
    #     obj2 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[1:2]
    #     obj3 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[2:3]
    # else:
    #     info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('price')
    #     obj1 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[0:1]
    #     obj2 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[1:2]
    #     obj3 = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel,location=loc, price__lte=price).order_by('km')[2:3]
    return render(request, 'search.html')
    # , {'info': info, 'name': na, 'brand': bra, 'obj2': obj2, 'obj1': obj1, 'obj3': obj1

# Create your views here.
