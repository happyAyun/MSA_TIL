# 수강생 관리 시스템
students=[] #global variable

# 수강생 등록 : list students에 id 중복 체크 하고, 존재하지 않는 경우 정보 저장하고 message 리턴
def register(student) :
    index = is_exist(student["id"])
    if index < 0 :
        students.append(student)
        return "{0}(이)가 등록되었습니다.".format(student["name"])
    else :
        return "이미 등록된 정보입니다." 

# 수강생 목록 : list students 목록 리턴
def getAllStudents() :
    return students

# 수강생 수정 : id를 검색해서 전공 정보 수정하고 message 리턴
def update(id,major) :
    index = is_exist(id)
    if index > -1 :
        students[index]["major"] = major
        return "{0}의 전공이 변경되었습니다." .format(id)
    else :
        return "{0}의 정보가 존재하지 않습니다." .format(id)
# 수강생 삭제 : id를 검색해서 수강생 정보 삭제 message 리턴
def remove(id) :
    index = is_exist(id)
    if index > -1 :
        students.pop(index)
        return "{0} 정보를 삭제하였습니다.".format(id)
    else :
        return "{0} 정보가 존재하지 않습니다.".format(id)

# 수강생 존재 여부 : id 검색해서 list students의 index 값 리턴
def is_exist(id) :
    for index, student in enumerate(students):
        if student["id"] == id :
            return index
    return -1

# menu display
def menu_display() :
    print("====== Cloud MSA 반 수강생 관리 시스템 ======")
    print("1. 수강생 정보 등록")
    print("2. 수강생 정보 목록")
    print("3. 수강생 정보 수정")
    print("4. 수강생 정보 삭제")
    print("0. 종료")

# message display
def message_display(message) :
    print(message)


while True :
    menu_display()
    menu = input("메뉴를 선택하세요 : ")
    if menu == "1" :
        id = input("학번 : ")
        name = input("이름 : ")
        age = input("나이 : ")
        # while not age.isdecimal(): 
        #     print("나이를 숫자로 입력해 주세요.")
        #     age = input("나이 : ")
        # while age.isdecimal() :
        #     if int(age) >= 18 :
        #         break
        #     else :
        #         print("나이를 18세 이상으로 입력해주세요.")
        #         age = input("나이 : ")
        major = input("전공 : ")
        student = {"id":id, "name": name, "age": int(age), "major": major }
        message_display(register(student))

    elif menu == "2" :
        print("====== 수강생 목록 보기 ======")
        print(students)

    elif menu == "3" :
        print("====== 수강생 정보 수정 ======")        
        id = input("id를 숫자로 입력하세요 : ")
        major = input("변경할 전공을 입력하세요 : ")
        message_display(update(id,major))

    elif menu == "4" :
        print("====== 수강생 정보 삭제 ======")
        id = input("id를 입력하세요 : ")
        message_display(remove(id))
        

    elif menu == "0" :
        message_display("수강생 관리 프로그램을 종료합니다.")
        break
    else :
        print()
        message_display("잘못 입력하셨습니다.")
        continue

#github : python_workshop repository생성 - 01.todos.py 작성해보기
# {"todoNum":todoNum,"title":title}
# 등록, 삭제, 일정목록, 전체삭제 기능