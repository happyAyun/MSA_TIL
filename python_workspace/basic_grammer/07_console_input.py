hello=input("인사말 입력 : ")
print("입력하신 인사말은 {0} 입니다." .format(hello), type(hello))
# 문자열과 변수를 합해 문장을 만들때 => + + or , , 를 이용.
data = input("숫자 입력 : ")
print("입력한 숫자는 {0} 이고, 타입은 {1} 입니다." .format(data, type(data))) # str 타입으로 들어옴.

original_data = 100
# sum = original_data + data => type error : data는 str type
sum = original_data + int(data) # type cast : 형변환 => ValueError의 주역
print(sum)
# 입력 -> <- 출력 : stream = data 흐름 (1byte씩)

x=3
sum = x + 10.5
print(sum)
print(type(sum)) # sum 타입은 10.5에 의해 float가 되지만 피연산자(x)의 형은 그대로 int형으로 바뀌지 않음.
print(type(x)) # int
