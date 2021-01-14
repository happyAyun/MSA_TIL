from exception.duplicate_exception import DuplicateException
from exception.idnotfound_exception import IDNotFoundException
from dao.todo_file import save_list, init_data_load

class TodoService :

    schedules=[]

    def register(self,schedule):
        index = self.is_exist(schedule.todoNum)
        if index < 0 :
            TodoService.schedules.append(schedule)
            return "{0}(이)가 등록되었습니다.".format(schedule.title)
        else :
            try:
                raise DuplicateException(schedule.todoNum)
            except DuplicateException as inputError:
                return str(inputError)
    
    def getAllSchedule(self):
        return TodoService.schedules

    def remove(self, todoNum) :
        index = self.is_exist(todoNum)
        if index >= 0:
            TodoService.schedules.pop(index)
            return "{0}를 삭제하였습니다.".format(todoNum)
        else :
            try:
                raise IDNotFoundException(todoNum)
            except IDNotFoundException as removeError:
                return str(removeError)
            
    def allRemove(self,check) :
        if check == "y" or check=="Y":
            TodoService.schedules.clear()
            return "일정이 모두 삭제되었습니다."
        else :
            return "삭제되지 않았습니다."

    def is_exist(self,todoNum) :
        for index, schedule in enumerate(self.schedules) : # self. 도 역시 됨.
            if schedule.todoNum == todoNum :
                return index
        return -1   # 여기에 return -1이 있어야 함.

    def file_read(self):
        TodoService.schedules = init_data_load()

    def file_write(self):
        save_list(TodoService.schedules)