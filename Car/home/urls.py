from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('buy.html',views.buy,name='buy'),
    path('cars.html', views.cars, name='cars'),
    path('topics.html', views.topics, name='topics'),
    path('about.html', views.about, name='about'),
    path('index.html',views.index,name='index'),
]