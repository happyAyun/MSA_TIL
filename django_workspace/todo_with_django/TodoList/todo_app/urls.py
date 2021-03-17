from django.urls import path, include
from . import views

urlpatterns = [
    path('',views.index, name="index"),
    path('createTodo/',views.createTodo, name="createTodo"),
    path('deleteTodo/<str:pk>/',views.deleteTodo, name="deleteTodo"),
    
]
