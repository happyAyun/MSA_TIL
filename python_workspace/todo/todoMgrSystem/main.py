from controller.todo_controller import ScheduleController
from view.view import menu_select, menu_display, message_display
from view.view import input_display, remove_display, allRemove_display

controller = ScheduleController()



controller.file_read()
while True :
    menu_display()

    menu = menu_select()
    if menu =="1":
        schedule = input_display()
        controller.register(schedule)
    
    elif menu =="2":
        controller.getAllSchedule()

    elif menu =="3" :
        todoNum = remove_display()
        controller.remove(todoNum)
    
    elif menu =="4" :
        check = allRemove_display()
        controller.allRemove(check)

    elif menu =="0" :
        message_display("시스템을 종료합니다.")
        controller.file_write()
        break

    else :
        message_display("잘못 입력하셨습니다. 다시 올바른 숫자로 입력하세요. ")
       


