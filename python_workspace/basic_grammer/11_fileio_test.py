# text data file 출력
write_file = open("hello.txt","w") # 파일이 현재 없으면 자동 생성됨.
write_file.write("Hello Python...\n")
write_file.close() # 자원 반납.

# with open(file명, mode) as file객체 :
# 자원반납 자동.
# mode : "w"(overwrite), "a"(append write), "r"(read)
# with open("hello.txt","a") as file:
#     file.write("File Writer Test")

# file read => console 출력
with open("hello.txt","r") as read_file :
    print("hello.txt 파일 내용 : ",read_file.read())

# console 입력 => file 출력
read_data = input("파일에 저장한 데이터 입력 : ")
with open("console_input.txt","w") as console_file :
    console_file.write(read_data)

# file 입력 => file 출력(file copy)   
# file_read = open("console_input.txt","r")
# file_copy = open("console_input_copy.txt","w")
# file_copy.write(file_read.read())
# file_copy.close()
# file_read.close()

# with 문으로
with open("console_input.txt","r") as read_file:
    with open("console_input_copy2.txt","w") as write_file:
        write_file.write(read_file.read())


import random
naming = list("가나다라마바사아자차카타파하")
with open("info.txt","w") as file:
    for i in range(100):
        name = random.choice(naming) + random.choice(naming)
        weight = random.randrange(40,100)
        height = random.randrange(140,200)
        file.write("{}, {}, {}\n".format(name,weight,height))

with open("info.txt","r") as file:
    for line in file: # 한줄씩 받는다.
        (name,weight,height) = line.strip().split(", ") # tuples
        if(not name) or (not weight) or (not height):
            continue
        bmi = int(weight) / (int(height) * int(height))
        result = ""
        if 25 <= bmi:
            result = "과체중"
        elif 18.5 <= bmi:
            result = "정상체중"
        else:
            result = "저체중"

        print('\n'.join([
            "이름: {}",
            "몸무게: {}",
            "키: {}",
            "BMI: {}",
            "결과: {}"
        ]).format(name,weight,height,bmi,result))
        print()


