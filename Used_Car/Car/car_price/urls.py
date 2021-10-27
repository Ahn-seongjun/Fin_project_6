from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.main,name='main'),
    path('sell',views.sell,name='sell'),
    path('buy',views.buy,name='buy'),
    path('search',views.search,name='search'),
    path('about',views.about,name='about')
    ]
