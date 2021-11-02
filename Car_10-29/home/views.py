from django.shortcuts import render
import datetime
from .functions import get_trim, to_csv
from xgboost import XGBRegressor
from django.http import HttpResponse
import joblib
# Create your views here.

TEMPLATE_DIRS= (
    'os.path.join(BASE_DIR, "templates"),'
)
def index(request):
    return render(request, "index.html",{})

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
    to_csv(bra,na,trim1,fuel,year,acci,color,wd,km)

    model = joblib.load('home/model/XGBoost.pkl')
    price = model.fit(to_csv)
    return render(request,'sell.html',{'price':price})

def buy(request):
    return render(request, "buy.html",{})

def cars(request):
    return render(request, "cars.html",{})

def topics(request):
    return render(request, "topics.html",{})

def about(request):
    return render(request, "about.html",{})

def main(request):
    return render(request, "main.html",{})