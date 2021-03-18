from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.db.models import Q
from .forms import ContentForm
from .models import Content, User, Reply
from django.contrib.auth.hashers import check_password, make_password
from django.contrib import messages
from django.contrib.auth import authenticate
from django.core.paginator import Paginator
# import bcrypt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .modelSerial import UserSerializer, ContentSerializer, ReplySerializer

def index(request):
    return render(request,"web01/index.html")

def listForm(request):
    return render(request,"web01/form.html")

def login(request):
    return render(request,"web01/login.html")

def join(request):
    return render(request,"web01/join.html")

@api_view(['POST']) ########
def createList(request):
    serializer = ContentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
    

@api_view(['GET'])
def viewList(request):
    contents = Content.objects.all()
    serializer = ContentSerializer(contents, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def moreView(request,pk): 
    content = Content.objects.get(id=pk)
    content.cnt = content.cnt + 1
    content.save()
    serializer = ContentSerializer(content)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteList(request,pk):
    content = Content.objects.get(id=pk)
    content.delete()
    return Response('Delete!')


def updateList(request):
    get_id = request.GET['id']
    content = Content.objects.get(id = get_id)
    return render(request,"web01/update_form.html",{'content':content})

@api_view(['PUT'])
def updateView(request,pk):
    content = Content.objects.get(id=pk)
    serializer = ContentSerializer(instance=content, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST']) ######## DB에 저장되지 않는 text를 받아오는 것.
def listSearch(request):
    contents = Content.objects.filter(Q(title__icontains=request.data) | Q(context__icontains=request.data)).distinct()
    serializer = ContentSerializer(instance = contents)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST']) ########       
def userJoin(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        users = User.objects.all()
        if not users:
            for u in users:
                if u.user_id == request.data.user_id:
                    return Response('Not Join!')
        if request.password != request.password2:
            return Response('Not Same Passwd!')
        serializer.save()
        return Response(serializer.data.password)
  

@api_view(['POST']) ########
def userLogin(request):
    serializer = UserSerializer(data=request)
    if serializer.is_valid():
        user = User.objects.get(user_id=request.data.user_id)
        if user.is_valid():
            if user.password == request.data.password :
                return Response(serializer.data)
            return Response('Not Same Passwd!')
        return Response('No Join!')


def logout(request):
    if request.session['user']:
        del request.session['user']
    return HttpResponseRedirect('/')

@api_view(['POST']) ########
def createReply(request,pk):
    # content pk // reply 의 모든 데이터
    serializer = ReplySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        content = Content.objects.get(id=pk)
        reply = Reply.objects.get(originalCon=content)
        serializer = ReplySerializer(reply)
    return Response(serializer.data)


@api_view(['GET'])
def myCreateReply(request): # 모든 댓글 삭제권한을 가짐(but, 수정은 나의 댓글만 수정할 수 있음).
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies,many=True) # many=True
    return Response(serializer.data)
    

@api_view(['DELETE']) 
def deleteReply(request,pk):
    reply = Reply.objects.get(id=pk)
    reply.delete()
    return Response('Reply Delete!')

@api_view(['GET']) ########
def myDeleteReply(request, pk):
    s_user = request.session['user']
    reply = Reply.objects.get(id=pk)
    if reply.user == s_user: # ??
        reply.delete()
        return Response('Reply Delete!')

def myPage(request):
    return render(request, 'web01/myPage.html')

def pwChange(request):
    return render(request, 'web01/pwChange.html')

@api_view(['POST']) ########
def changePW(request):
    s_user = request.session['user']
    user = User.objects.get(user_id=s_user)
    if user.is_valid():
        if user.password == request.data.password:
            if request.data.re_pw == request.data.re_pw2:
                user.password = request.data.re_pw
                serializer = UserSerializer(user)
                return Response(serializer.data)
            return Response('Not Same changePW!')
        return Response('Not Same PW!')
    return Response('Not Join!')


def secession(request):
    return render(request,'web01/secession.html')

@api_view(['GET']) ########
def myWriting(request):
    s_user = request.session['user']
    user = User.objects.get(user_id=s_user)
    contents = Content.objects.filter(userId=user)
    serializer = ContentSerializer(contents)
    return Response(serializer.data)


@api_view(['POST']) ########
def resetUser(request):
    s_user = request.session['user']
    if s_user.password == request.data.password:
        user = User.objects.get(user_id=s_user)
        user.delete()
        return Response('Delete!')
    return Response('Not Same PW!')

@api_view(['GET']) ########
def myArticle(request):
    s_user = request.secession['user']
    user = User.objects.get(user_id=s_user)
    content = Content.objects.get(userId=user)
    replies = Reply.objects.filter(originalCon=content)
    serializer_C = ContentSerializer(content)
    serializer_R = ReplySerializer(replies)
    if serializer_C.is_valid():
        if serializer_R.is_valid():
            return Response(serializer_C.data, serializer_R.data)
        return Response(serializer_C.data)
    return Response('Not Exist Content!')

def findPW(request):
    return render(request, "web01/findPW.html")


    
