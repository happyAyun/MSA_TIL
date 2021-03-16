from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Todo
from .forms import TodoForm

# Create your views(controller) here.
# request로부터 [parameter값] 받아서 valid check
# business method 호출 (우리는 여기서 구현)
# view(template) 에서 참조할 데이터 저장
# view(template) 선택
# todo_app/
def index(request):
    todos = Todo.objects.all()
    context = {"todos" : todos}
    return render(request, 'todo_app/index.html', context) # 이름이 같으면 충돌이 될수도 있으니 templates 밑에 프로젝트와 같은 명의 폴더를 만들어서 하자.

# todo_app/createTodo
def createTodo(request):
    new_todo = TodoForm(request.POST) # index.html과 form.html 의 이름이 같아야한다.
    new_todo.save()
    return HttpResponseRedirect(reverse("index")) # 다시 index 페이지로 되돌아간다. 응답하면서 바로 redirect(다시 서버로 아무런 명령없이 자동request 재요청을 자동으로 으로 감.)하게 함.(urls에서 name을 주었음)

# todo_app/deleteTodo
def deleteTodo(request):
    delete_todo_id = request.GET['id']
    todo = Todo.objects.get(id=delete_todo_id)
    todo.delete()
    return HttpResponseRedirect(reverse('index'))



