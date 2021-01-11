# {"todoNum":todoNum,"title":title}
# 등록, 삭제, 일정목록, 전체삭제 기능
schedule = []
todoNum = 1

while True :
    print("====== <메뉴> ======")
    print("1. 일정 등록")
    print("2. 일정 목록 보기")
    print("3. 일정 삭제")
    print("4. 일정 전체 삭제")
    print("0. 시스템 종료")

    menu = input("메뉴를 입력하세요 : ")
    while not menu.isdecimal() :
        print("잘못 입력하셨습니다. 다시 올바른 숫자로 입력하세요. ")
        menu = input("메뉴를 입력하세요 : ")
    
    if menu =="1":
        print("====== 일정 등록 ======")
        title = input("일정을 입력하세요 : ")
        schedule.append({"todoNum":todoNum ,"title":title})
        todoNum += 1
    
    elif menu =="2":
        print("====== 일정 목록 보기 ======")
        for sche in schedule :
            print(sche)

    elif menu =="3" :
        print("====== 일정 삭제 ======")
        m_todoNum = input("삭제할 todoNum을 입력하세요 : ")
        for sche in schedule :
            if sche["todoNum"] == int(m_todoNum) :
                schedule.remove(sche)
                print("해당 {0} 일정이 삭제되었습니다.".format(m_todoNum))
                break
    
    elif menu =="4" :
        print("====== 일정 전체 삭제 ======")
        check = input("일정을 모두 삭제하시겠습니까? [y/n]")
        if check == 'y' or check == 'Y' :
            schedule = []
            print("일정이 모두 삭제되었습니다.")
    
    else :
        print("시스템을 종료합니다.")
        break


