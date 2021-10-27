from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.main,name='main'),
    path('sell',views.sell,name='sell'),
    path('sell1',views.sell1,name='sell1'),
    path('buy',views.buy,name='buy'),
    path('search',views.search,name='search'),
    ]
