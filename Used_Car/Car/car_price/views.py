from django.shortcuts import render
# from .models import Encar,Kcar

TEMPLATE_DIRS= (
    'os.path.join(BASE_DIR, "templates"),'
)
def main(request):
    return render(request,'day_car.html',{})


def sell(request):
    # bra = request.GET.get('brand', '')
    # na = request.GET.get('name', '')
    # site = request.GET.get('site', '')
    # year = request.GET.get('year', '')
    # fuel = request.GET.get("fuel", "")
    # loc = request.GET.get("loc", "")
    # s = Encar.objects.filter(brand=bra, name__icontains=na,year__gte=year,type=fuel,location=loc)
    return render(request,'wannabesell.html',{})
# ,{'brand':bra,'name':na,'s':s,'site':site,'year':year,'tyep':fuel,'location':loc}

def buy(request):

    return render(request,'wannabebuy.html',{})

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
    #     info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year,km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('km')
    # elif sort == "year":
    #     info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('year')
    # else:
    #     info = Encar.objects.filter(brand=bra, name__icontains=na, year__gte=year, km__lte=mile, type=fuel, location=loc,price__lte=price).order_by('price')
    return render(request, 'search.html',{'name':na,'brand':bra})

def about(request):
    return render(request,'aboutus.html',{})
# Create your views here.
