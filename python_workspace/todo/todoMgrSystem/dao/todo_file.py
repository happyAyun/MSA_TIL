import os.path
from entity.todo import Schedule

def save_list(schedules):
    save_file = open("todos.dat","w")
    for schedule in schedules:
        save_file.write("{0},{1}\n".format(schedule.todoNum, schedule.title))
    save_file.close()


def init_data_load() :
    schedules = []
    fileExist = os.path.isfile("todos.dat")
    if fileExist:
        read_file = open("todos.dat","r")
        while True:
            data = read_file.readline()
            if len(data.split(",")) == 2 :
                schedule = data.split(",") # schedule은 list형이 되기 때문에 strip() 함수를 사용할 수 없다.
                # d = schedule[0] => d는 str형이 되기 때문에 d에는 strip() 함수를 사용할 수 있다.
                schedules.append(Schedule(schedule[0].strip(), schedule[1].strip().strip('\n')))
            if not data:
                break
        read_file.close()
    return schedule