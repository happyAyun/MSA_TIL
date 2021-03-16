from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo # .model **

# Create your views here.

def index(request):
    todos = Todo.objects.all()
    context = {"todos" : todos}
    return render(request, 'my_todo_app/index.html', context)

def todoInput(request):
    title = request.POST['title']
    new_todo = Todo(title = title)
    new_todo.save()
    return HttpResponseRedirect(reverse("index"))

def todoDelete(request):
    d_id = request.GET['id']
    todo = Todo.objects.get(id=d_id)
    todo.delete()
    return HttpResponseRedirect(reverse("index"))

def todoReset(request):
    todos = Todo.objects.all()
    todos.delete()
    return HttpResponseRedirect(reverse("index"))
    