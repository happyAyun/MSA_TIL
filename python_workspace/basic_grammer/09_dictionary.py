# dictionary type : variable_name = {"name":"value",...} => value : int, float, str, bool, list
# data access : variable_name["name"]

# student = {"name":"심아윤","age":26, "major":"컴공"}
# print("이름:{0} 나이:{1} 전공:{2}".format(student["name"], student["age"], student["major"]))

# students = [{"name":"심아윤","age":26, "major":"컴공"},{"name":"홍길동","age":25, "major":"정보보호"}]
students = [] 
students.append({"name":"심아윤","age":26, "major":"컴공"}) 
students.append({"name":"홍길동","age":25, "major":"정보보호"}) 
print("{0}".format(students[0]["name"]))
for s in students :
    # print("이름:{0} 나이:{1} 전공:{2}".format(s["id"], s["age"], s["major"])) # keyError : id
    print("이름:{0} 나이:{1} 전공:{2}".format(s["name"], s["age"], s["major"]))


# dictionary 추가 수정 : "name":value 쌍으로 추가 수정 
students[0]["id"] = "CloudMSA" # key값이 없는 경우는 추가.
print(students[0])
students[0]["major"] = "컴퓨터공학" # key값이 있는 경우는 수정.
print(students[0])

#dictionary 삭제
del students[0]["id"]
print(students[0])

# get() : key check를 하는 메소드 None return
key = input("student 속성 입력(name, age, major) : ")
while students[0].get(key) == None :
    key = input("student 속성 입력(name, age, major) : ")
print("{0} key의 value 값은 : {1} ".format(key, students[0][key]))