
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('todoInput/', views.todoInput, name="todoInput"),
    path('todoDelete/<str:pk>/', views.todoDelete, name="todoDelete"),
    path('todoReset/', views.todoReset, name="todoReset"),
]
