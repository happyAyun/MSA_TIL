# 수강생 관리 시스템
students=[]
id = 1
while True :
    print("====== Cloud MSA 반 수강생 관리 시스템 ======")
    print("1. 수강생 정보 등록")
    print("2. 수강생 정보 목록")
    print("3. 수강생 정보 수정")
    print("4. 수강생 정보 삭제")
    print("0. 종료")

    menu = input("메뉴를 선택하세요 : ")
    if menu == "1" :
        name = input("이름 : ")
        age = input("나이 : ")
        while not age.isdecimal(): 
            print("나이를 숫자로 입력해 주세요.")
            age = input("나이 : ")
        while age.isdecimal() :
            if int(age) >= 18 :
                break
            else :
                print("나이를 18세 이상으로 입력해주세요.")
                age = input("나이 : ")
        major = input("전공 : ")
        student = {"id": id, "name": name, "age": int(age), "major": major }
        students.append(student)
        id += 1

    elif menu == "2" :
        print("====== 수강생 목록 보기 ======")
        print(students)

    elif menu == "3" :
        print("====== 수강생 정보 수정 ======")
        m_id = input("id를 입력하세요 : ")
        while not m_id.isdecimal() :
            m_id = input("id를 숫자로 입력하세요 : ")
        m_major = input("변경할 전공을 입력하세요 : ")
        for s in students :
            if s["id"] == int(m_id) :
                s["major"] = m_major
                print("{0}의 전공이 변경되었습니다." .format(s["name"]))
                break

    elif menu == "4" :
        print("====== 수강생 정보 삭제 ======")
        m_id = input("id를 입력하세요 : ")
        while not m_id.isdecimal() :
            m_id = input("id를 숫자로 입력하세요 : ")
        for s in students :
            if s["id"] == int(m_id) :
                check = input("{0}의 정보를 삭제하시겠습니까?[y/n]" .format(s["name"]))
                if check == 'y' or check == "Y" :
                    students.remove(s)
                    print("{0}의 정보가 삭제되었습니다." .format(id))
                break

    elif menu == "0" :
        print("수강생 관리 프로그램을 종료합니다.")
        break
    else :
        print("잘못 입력하셨습니다.")
        continue

#github : python_workshop repository생성 - 01.todos.py 작성해보기
# {"todoNum":todoNum,"title":title}
# 등록, 삭제, 일정목록, 전체삭제 기능