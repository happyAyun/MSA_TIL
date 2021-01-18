from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'), #어떠한 경로로 왔을 때 어떤 메소드를 연결하는지.
]