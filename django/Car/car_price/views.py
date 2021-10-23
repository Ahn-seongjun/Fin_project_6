from django.shortcuts import render
def index(request):
    return render(request,'day_car.html')

def buy(request):
    return render(request,'buy_page.html')

def sell(request):
    return render(request,'sell_page.html')
# Create your views here.
