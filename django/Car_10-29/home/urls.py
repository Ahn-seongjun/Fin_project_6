from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('buy',views.buy,name='buy'),
    path('cars', views.cars, name='cars'),
    path('topics', views.topics, name='topics'),
    path('about', views.about, name='about'),
    path('index',views.index,name='index'),
]