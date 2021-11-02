from django.urls import path
from . import views

urlpatterns=[
    path('',views.index,name='index'),
    path('buy',views.buy,name='buy'),
    path('buy2',views.buy2,name='buy2'),
    path('cars', views.cars, name='cars'),
    path('topics', views.topics, name='topics'),
    path('about', views.about, name='about'),
    path('index',views.index,name='index'),
    path('sell',views.sell,name='sell'),

]