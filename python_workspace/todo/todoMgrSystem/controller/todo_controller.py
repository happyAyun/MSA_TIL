from service.todo_service import TodoService
from view.view import list_display, message_display

class ScheduleController :

    def register(self, schedule):
        service = TodoService()
        message = service.register(schedule)
        message_display(message)

    def getAllSchedule(self):
        service = TodoService()
        schedules = service.getAllSchedule()
        list_display(schedules)

    def remove(self, todoNum):
        if todoNum == "":
            message_display("일정 번호가 필요합니다.")
        service = TodoService()
        message = service.remove(todoNum)
        message_display(message)

    def allRemove(self,check):
        service = TodoService()
        message = service.allRemove(check)
        message_display(message)

    def file_read(self):
        service = TodoService()
        service.file_read()

    def file_write(self):
        service = TodoService()
        service.file_write()