from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo # .model **
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .tododto import TodoSerializer
# Create your views here.

@api_view(['GET'])
def index(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)
    # context = {"todos" : todos}
    # return render(request, 'my_todo_app/index.html', context)

@api_view(['POST'])
def todoInput(request):
    serializer = TodoSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)
    # title = request.POST['title']
    # new_todo = Todo(title = title)
    # new_todo.save()
    # return HttpResponseRedirect(reverse("index"))

@api_view(['DELETE'])
def todoDelete(request,pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return Response('Delete')
    # d_id = request.GET['id']
    # todo = Todo.objects.get(id=d_id)
    # todo.delete()
    # return HttpResponseRedirect(reverse("index"))

@api_view(['DELETE'])
def todoReset(request):
    todos = Todo.objects.all()
    todos.delete()
    return Response('All Clear')
    # return HttpResponseRedirect(reverse("index"))
    