import os.path

# {"todoNum":todoNum,"title":title}
# 등록, 삭제, 일정목록, 전체삭제 기능
schedules = []

def menu_dispay():
    print("====== <메뉴> ======")
    print("1. 일정 등록")
    print("2. 일정 목록 보기")
    print("3. 일정 삭제")
    print("4. 일정 전체 삭제")
    print("0. 시스템 종료")

def register(todoNum,title):
    index = is_exist(todoNum)
    if index < 0 :
        schedules.append({"todoNum": todoNum ,"title":title})
        return "{0}(이)가 등록되었습니다.".format(title)
    else :
        return "{0} 이 번호는 이미 있는 일정 번호 입니다.".format(todoNum)

def message_display(message):
    print(message)

def allSchedule():
    return schedules

def is_exist(todoNum) :
    for index, schedule in enumerate(schedules) :
        if schedule["todoNum"] == todoNum :
            print(index)
            return index
    return -1   # 여기에 return -1이 있어야 함.

def remove(todoNum) :
    index = is_exist(todoNum)
    if index >= 0:
        schedules.pop(index)
        return "{0}를 삭제하였습니다.".format(todoNum)
    else :
        return "{0}가 존재하지 않습니다.".format(todoNum)

def allRemove(check) :
    if check == "y" or check=="Y":
        schedules.clear()
        return "일정이 모두 삭제되었습니다."
    else :
        return "삭제되지 않았습니다."

def save_list():
    save_file = open("todos.dat","w")
    for schedule in schedules:
        save_file.write("{0},{1}\n".format(schedule["todoNum"], schedule["title"]))
    save_file.close()

def init_data_load() :
    fileExist = os.path.isfile("todos.dat")
    if fileExist:
        read_file = open("todos.dat","r")
        while True:
            data = read_file.readline()
            if len(data.split(",")) == 2 :
                schedule = data.split(",")
                schedules.append({"todoNum":schedule[0].strip(), "title":schedule[1].strip()})
            if not data:
                break
        read_file.close()

init_data_load()
while True :
    menu_dispay()

    menu = input("메뉴를 입력하세요 : ")
    
    if menu =="1":
        print("====== 일정 등록 ======")
        todoNum = input("일정 번호를 입력하세요 : ")
        title = input("일정을 입력하세요 : ")
        message_display(register(todoNum,title))
    
    elif menu =="2":
        print("====== 일정 목록 보기 ======")
        message_display(allSchedule())

    elif menu =="3" :
        print("====== 일정 삭제 ======")
        todoNum = input("삭제할 todoNum을 입력하세요 : ")
        message_display(remove(todoNum))
    
    elif menu =="4" :
        print("====== 일정 전체 삭제 ======")
        check = input("일정을 모두 삭제하시겠습니까? [y/n]")
        message_display(allRemove(check))

    elif menu =="0" :
        save_list()
        message_display("시스템을 종료합니다.")
        break

    else :
        message_display("잘못 입력하셨습니다. 다시 올바른 숫자로 입력하세요. ")
       


