# view.py (menu_display, input_display, list_display, ....)
from entity.todo import Schedule

def menu_display():
    print("====== <메뉴> ======")
    print("1. 일정 등록")
    print("2. 일정 목록 보기")
    print("3. 일정 삭제")
    print("4. 일정 전체 삭제")
    print("0. 시스템 종료")

def menu_select():
    menu = input("메뉴를 입력하세요 : ")
    return menu

def message_display(message):
    print(message)

def input_display():
    print("====== 일정 등록 ======")
    todoNum = input("일정 번호를 입력하세요 : ")
    title = input("일정을 입력하세요 : ")
    return Schedule(todoNum,title)

def list_display(schedules):
    print("====== 일정 목록 보기 ======")
    for schedule in schedules:
        print(schedule)
           
def remove_display():
    print("====== 일정 삭제 ======")
    todoNum = input("삭제할 todoNum을 입력하세요 : ")
    return todoNum

def allRemove_display():
    print("====== 일정 전체 삭제 ======")
    check = input("일정을 모두 삭제하시겠습니까? [y/n]")
    return check







