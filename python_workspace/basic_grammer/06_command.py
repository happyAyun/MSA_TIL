# if 조건식1 :
#     조건식1이 참일 때 실행문
# elif 조건식2 :
#     조건식2가 참일 때 실행문
# else :
#     조건식1, 조건식2 모두 거짓일 때 실행문

# month = input("월 입력 : ")
# if month.isdecimal() : 
#     m = int(month)
#     if m==1 or m==3 or m==5 or m==7 or m==8 or m==10 or m==12 :
#         print("{0}월은 31일까지 있습니다.".format(m))
#     elif m==2 :
#         print("{0}월은 28일까지 있습니다.".format(m))
#     elif m==4 or m==6 or m==9 or m==1 :
#         print("{0}월은 30일까지 있습니다.".format(m))
#     else :
#         month=input("월은 1-12사이 값을 입력이 잘못되었습니다.")
# else :
#     month=input("월은 1-12사이 값을 입력 : ")


# list type : [str, int, float, bool, list] // 혼합하여 들어갈 수 있다.
#               +, *(iteration), len()
# append(), insert(), del, pop(), remove(), clear()
list_a = ["hi",2.87,1,False]
list_b = [4,5,len(list_a)]
print(list_a + list_b, "연산 후: ", list_a) # list_a 는 변하지 않음.
print(list_a.append(4), "append 후 list_a ", list_a) # 마지막 index+1 뒤에 추가
print(list_a.insert(1,5), "insert 후 list_a ", list_a) # 해당 index에 삽입
print(list_a.pop(1), "pop(1) 삭제 후 list_a", list_a) # 해당 index 삭제
print(list_a.remove(1), "remove(1) 1인 값 삭제 후 list_a", list_a) # 첫번째 만나는 값 삭제
print(list_b.extend(list_a)) # None
print(list_b) # list_b가 바뀜.

# for 반복자 in 반복할 수 있는 데이터(list, dictionary, string, range()) :
# 실행문
# index = 0
for index,data in enumerate(list_a) :
    print("list_a[{0}] : {1}".format(index, data))
    # index += 1
