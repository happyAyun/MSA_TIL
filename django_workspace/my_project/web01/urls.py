
from django.urls import path, include, re_path
from . import views

urlpatterns = [
    path('',views.index,name="index"),

    re_path(r'createList/$', views.createList, name="createList"),

    re_path(r'listForm/$', views.listForm, name="listForm"),

    re_path(r'viewList/$', views.viewList, name="viewList"),

    re_path(r'moreView/<str:pk>/$', views.moreView, name="moreview"),

    re_path(r'deleteList/<str:pk>/$', views.deleteList, name="deleteList"),

    re_path(r'updateList/$', views.updateList, name="updateList"),

    re_path(r'updateView/<str:pk>/$', views.updateView, name="updateView"),

    re_path(r'listSearch/<str:str>$', views.listSearch, name="listSearch"),

    re_path(r'join/$', views.join, name="join"),

    re_path(r'login/$', views.login, name="login"),

    re_path(r'userJoin/$', views.userJoin, name="userJoin"),

    re_path(r'userLogin/$', views.userLogin, name="userLogin"),

    re_path(r'logout/$', views.logout, name="logout"),

    re_path(r'createReply/<str:pk>/$', views.createReply, name="createReply"),

    re_path(r'deleteReply/<str:pk>/$', views.deleteReply, name="deleteReply"),

    re_path(r'myDeleteReply/<str:pk>/$', views.myDeleteReply, name="myDeleteReply"),

    re_path(r'myPage/$', views.myPage, name="myPage"),

    re_path(r'pwChange/$', views.pwChange, name="pwChange"),

    re_path(r'changePW/$', views.changePW, name="changePW"),

    re_path(r'secession/$', views.secession, name="secession"),

    re_path(r'resetUser/$', views.resetUser, name="resetUser"),

    re_path(r'myWriting/$', views.myWriting, name="myWriting"),

    re_path(r'myArticle/<str:pk>/$', views.myArticle, name="myArticle"),

    re_path(r'myCreateReply/<str:pk>$', views.myCreateReply, name="myCreateReply"),


]