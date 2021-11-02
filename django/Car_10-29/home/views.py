from django.shortcuts import render
import datetime
from django.http import HttpResponse
# Create your views here.

TEMPLATE_DIRS= (
    'os.path.join(BASE_DIR, "templates"),'
)
def index(request):
    return render(request, "index.html",{})

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